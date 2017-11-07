-- FUNCTION: public.get_dice(bigint)

-- DROP FUNCTION public.get_dice(bigint);

CREATE OR REPLACE FUNCTION public.get_dice(
	dice_id bigint DEFAULT 0)
    RETURNS json
    LANGUAGE 'sql'

    COST 100
    VOLATILE 
    ROWS 0
AS $BODY$

SELECT json_build_object(
  'id', dice.id,
  'dieCount', dice."dieCount",
  'dieType', dice."dieType",
  'modifier', dice.modifier,
  'multiplier', dice.multiplier,
  'divisor', dice.divisor,
  'rendered', 
    CASE WHEN dice."dieType" = 0 THEN
    	dice."dieType"::text
    WHEN dice."dieType" = 1 THEN
    	dice."dieCount"::text
    ELSE
        CASE WHEN dice.multiplier = 1 AND dice.modifier = 0 AND dice.divisor = 1 THEN
            concat_ws('d', dice."dieCount"::text, dice."dieType"::text)
        WHEN dice.multiplier != 1 AND dice.modifier = 0 AND dice.divisor = 1 THEN
            concat_ws('x', concat_ws('d', dice."dieCount"::text, dice."dieType"::text), dice.multiplier::text)
        WHEN dice.multiplier = 1 AND dice.modifier = 0 AND dice.divisor != 1 THEN
            concat_ws('/', concat_ws('d', dice."dieCount"::text, dice."dieType"::text), dice.multiplier::text)
        WHEN dice.multiplier = 1 AND dice.modifier > 0 AND dice.divisor = 1 THEN
            concat_ws('+', concat_ws('d', dice."dieCount"::text, dice."dieType"::text), dice.multiplier::text)
        WHEN dice.multiplier = 1 AND dice.modifier < 0 AND dice.divisor = 1 THEN
            concat_ws('-', concat_ws('d', dice."dieCount"::text, dice."dieType"::text), dice.multiplier::text)
        ELSE
            null
        END
    END
)
FROM adm_core_dice dice

$BODY$;

ALTER FUNCTION public.get_dice(bigint)
    OWNER TO postgres;

