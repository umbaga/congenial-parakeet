--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.0
-- Dumped by pg_dump version 10.0

-- Started on 2017-12-09 15:46:13

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

--
-- TOC entry 2574 (class 0 OID 16561)
-- Dependencies: 209
-- Data for Name: adm_core_chart; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_core_chart (id, title, "typeId") FROM stdin;
611	Personality Trait	806
612	Ideal	806
613	Bond	806
614	Flaw	806
625	Favorite Scheme	806
626	Personality Trait	806
627	Ideal	806
628	Bond	806
629	Flaw	806
641	Criminal Specialty	806
642	Personality Trait	806
643	Ideal	806
644	Bond	806
645	Flaw	806
657	Entertainer Routines	806
658	Personality Trait	806
659	Ideal	806
660	Bond	806
661	Flaw	806
673	Defining Event	806
674	Personality Trait	806
675	Ideal	806
676	Bond	806
677	Flaw	806
689	Guild Business	806
690	Personality Trait	806
691	Ideal	806
692	Bond	806
693	Flaw	806
705	Life of Seclusion	806
706	Personality Trait	806
707	Ideal	806
708	Bond	806
709	Flaw	806
721	Personality Trait	806
722	Ideal	806
723	Bond	806
724	Flaw	806
735	Origin	806
736	Personality Trait	806
737	Ideal	806
738	Bond	806
739	Flaw	806
750	Specialty	806
751	Personality Trait	806
752	Ideal	806
753	Bond	806
754	Flaw	806
766	Personality Trait	806
767	Ideal	806
768	Bond	806
769	Flaw	806
780	Specialty	806
781	Personality Trait	806
782	Ideal	806
783	Bond	806
784	Flaw	806
785	Flaw	806
797	Personality Trait	806
798	Ideal	806
799	Bond	806
800	Flaw	806
906	`test	904
914	'test chart title	904
919	'chart title	904
924	'chart title	904
929	'chart title	904
940	Animated Object Statistics	904
1169	Behavior	806
1173	Behavior	806
1177	Behavior	806
1181	Behavior	806
1257	Precipitation	904
1258	Temperature	904
1259	Wind	904
1282	Creation Spell Material	904
1948	Reincarnation Results	806
2205	Reincarnation Results	806
2212	Reincarnate Results	806
2216	Scrying Knowledge	904
2217	Scrying Connection	904
2222	Familiarity	904
\.


--
-- TOC entry 2556 (class 0 OID 16446)
-- Dependencies: 191
-- Data for Name: adm_core_description; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_core_description (id, "itemId", "descriptionTypeId", description) FROM stdin;
173	172	171	Padded armor consists of quilted layers of cloth and batting.
175	174	171	The breastplate and shoulder protectors of this armor are made of leather that has been stiffened by being boiled in oil. The rest of the armor is made of softer and more flexible materials.
177	176	171	Made from tough but flexible leather, studded leather is reinforced with close set rivets or spikes.
179	178	171	This crude armor consists of thick furs and pelts. It is commonly worn by barbarian tribes, evil humanoids, and other folk who lack access to the tools and materials needed to create better armor.
181	180	171	Made of interlocking metal rings, a chain shirt is worn between layers of clothing or leather. This armor offers modest protection to the wearer's upper body and allows and allows the sound of the rings rubbing against one another to be muffled by outer layers.
185	184	171	This armor consists of a fitted metal chest piece worn with supple leather. Although it leaves the legs and arms relatively unprotected, this armor provides good protection for the wearer's vital organs while leaving the wearer relatively unencumbered.
183	182	171	This armor consists of a coat and leggings (and perhaps a separate skirt) of leather covered with overlapping pieces of metal, much like the scales of a fish. This suit includes gauntlets.
187	186	171	Half plate consists of shaped metal plates that cover most of the wearer's body. It does not include leg protection beyond simple greaves that are attached with leather straps.
189	188	171	This armor is leather armor with heavy rings sewn into it. The rings help reinforce the armor against blows from swords and axes. Ring mail is inferior to chain mail, and it's usually worn only by those who can't afford better armor.
191	190	171	Made of interlocking metal rings, chain mail includes a layer of quilted fabric worn underneath the mail to prevent chafing and to cushion the impact of blows. The suit includes gauntlets.
193	192	171	This armor is made of narrow vertical strips of metal riveted to a backing of leather that is worn over cloth padding. Flexible chain mail protects the joints.
195	194	171	Plate consists of shaped, interlocking metal plates to cover the entire body. A suit of plate includes gauntlets, heavy leather boots, a visored helmet, and thick layer of padding underneath the armor. Buckles and straps distribute the weight over the body.
197	196	171	A shield is made from wood or metal and is carried in one hand. Wielding a shield increases your Armor Class by 2. You can benefit from only one shield at a time.
1417	1416	171	<div>This spell allows you to move at an incredible pace. W hen you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action.</div>
205	204	171	As an action, you can splash the contents of this vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case, make a ranged attack against a creature or object, treating the acid as an improvised weapon. On a hit, the target takes 2d6 acid damage.
207	206	171	This sticky, adhesive fluid ignites when exposed to air. As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the alchemist's fire as an improvised weapon. On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames.
213	212	171	A creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs.
221	220	171	As an action, you can spill these tiny metal balls from their pouch to cover a level, square area that is 10 feet on a side. A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone. A creature moving through the area at half speed doesn't need to make the save.
229	228	171	A book might contain poetry, historical accounts, information pertaining to a particular field of lore, diagrams and notes on gnomish contraptions, or just about anything else that can be represented using text or pictures. A book of spells is a spellbook (described later).
233	232	171	As an action, you can spread a bag of caltrops to cover a square area that is 5 feet on a side. Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving this turn and take 1 piercing damage. Taking this damage reduces the creature's walking speed by 10 feet until the creature regains at least 1 hit point. A creature moving through the area at half speed doesn't need to make the save.
235	234	171	For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for an additional 5 feet.
237	236	171	This wooden case can hold up to twenty crossbow bolts.
239	238	171	This cylindrical leather case can hold up to ten rolled-up sheets of paper or five rolled-up sheets of parchment.
241	240	171	A chain has 10 hit points. It can be burst with a successful DC 20 Strength check.
245	244	171	A climber's kit includes special pitons, boot tips, gloves, and a harness. You can use the climber's kit as an action to anchor yourself; when you do, you can't fall more than 25 feet from the point where you anchored yourself, and you can't climb more than 25 feet away from that point without undoing the anchor.
251	250	171	A component pouch is a small, watertight leather pouch that has compartments to hold all the material components and other special items you need to cast your spells, except for those components that have a specific cost (as indicated in a spell's description).
253	252	171	Using a crowbar grants advantage to Strength checks where the crowbar's leverage can be applied.
259	258	171	This kit includes a wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting.
1469	1468	171	You sense the presence of any trap within range that is within line of sight. A trap, for the purpose of this spell, includes anything that would inflict a sudden or unexpected effect you consider harmful or undesirable, which was specifically intended as such by its creator. Thus, the spell would sense an area affected by the alarm spell, a glyph of warding, or a mechanical pit trap, but it would not reveal a natural weakness in the floor, an unstable ceiling, or a hidden sinkhole.<div><div>This spell merely reveals that a trap is present. You don’t learn the location of each trap, but you do learn the general nature of the danger posed by a trap you sense.</div></div>
266	265	171	This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom (Medicine) check.
271	270	171	As an action, you can splash the contents of this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. In either case, make a ranged attack against a target creature, treating the Holy Water as an improvised weapon. If the target is a fiend or undead, it takes 2d6 radiant damage.\nA cleric or paladin may create holy water by performing a special ritual. Te ritual takes 1 hour to perform, uses 25 gp worth of powdered silver, and requires the caster to expend a 1st-level spell slot.
274	273	171	When you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground. A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take 1d4 piercing damage and stop moving. Thereafter, until the creature breaks free from the trap, its movement is limited by the length of the chain (typically 3 feet long). A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1 piercing damage to the trapped creature.
281	280	171	A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.
283	282	171	A bullseye lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.
285	284	171	A hooded lantern casts bright light in a 30-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil. As an action, you can lower the hood, reducing the light to dim light in a 5-foot radius.
287	286	171	A key is provided with the lock. Without the key, a creature proficient with thieves' tools can pick this lock with a successful DC 15 Dexterity check. Your DM may decide that better locks are available for higher prices.
289	288	171	This lens allows a closer look at small objects. It is useful as a substitute for flint and steel when starting fires. Lighting a fire with a magnifying glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite. A magnifying glass grants advantage on any ability check made to appraise or inspect an item that is small or highly detailed.
291	290	171	These metal restraints can bind a Small or Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them requires a successful DC 20 Strength check. Each set of manacles comes with one key. Without the key, a creature proficient with thieves' tools can pick the manacles' lock with a successful DC 15 Dexterity check. Manacles have 15 hit points.
293	292	171	This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl.
296	295	171	Oil usually comes in a clay flask that holds 1 pint. As an action, you can splash the oil in this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating the oil as an improvised weapon. On a hit, the target is covered in oil. If the target takes any fire damage before the oil dries (after 1 minute), the target takes an additional 5 fire damage from the burning oil. You can also pour a flask of oil on the groud to cover a 5-foot-square area, provided that surface is level. If lit, the oil burns for 2 rounds and deals 5 fire damage to any creature that enters the area or ends its turn in the area. A creature can take this damage only once per turn.
303	302	171	You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a DC 10 Constitution saving throw or take 1d4 poison damage. Once applied, the poison retains potency for 1 minute before drying.
307	306	171	A character who drinks the magical red fluid in this vial regains 2d4+2 hit points. Drinking or administering a potion takes an action.
309	308	171	A cloth or leather pouch can hold up to 20 sling bullets or 50 blowgun needles, among other things. A compartmentalized pouch for holding spell components is called a component pouch. (described earlier)
311	310	171	A quiver can hold up to 20 arrows.
313	312	171	You can use a portable ram to break down doors. When doing so, you can gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check.
315	314	171	Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts.
318	317	171	Rope has 2 hit points and can be burst with a DC 17 Strength check.
320	319	171	Rope has 2 hit points and can be burst with a DC 17 Strength check.
323	322	171	A scale includes a small balance, pans, and a suitable assortment of weights up to 2 pounds. With it, you can measure the exact weight of small objects, such as raw precious metals or trade goods, to help determine their worth.
330	329	171	Essential for wizards, a spellbook is a leather-bound tome with 100 blank vellum pages suitable for recording spells.
333	332	171	Objects viewed through a spyglass are magnified to twice their size.
335	334	171	A simple and portable canvas shelter, a tent sleeps two.
1420	1419	171	For the spell’s duration, your eyes become an inky void imbued with dread power. One creature of your choice within 60 feet of you that you can see must succeed on a Wisdom saving throw or be affected by one of the following effects of your choice for the duration. On&nbsp;each of your turns until the spell ends, you can use your action to target another creature but can’t target a creature again if it has succeeded on a saving throw against this casting of <i>eyebite</i>.
1421	1419	944	The target falls unconscious. It wakes up if it takes any damage or if another creature uses its action to shake the sleeper awake.
1422	1419	944	The target is frightened of you. On each of its turns, the frightened creature must take the Dash action and move away from you by the safest and shortest available route, unless there is nowhere to move. If the target moves to a place at least 60 feet away from you where it can no longer see you, this effect ends.
337	336	171	This small container holds flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a torch (or anything else with abundant, exposed fuel) takes an action. Lighting any other fire takes 1 minute.
339	338	171	A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee attack with a burning torch and hit, it deals 1 fire damage.
344	58	171	An arcane focus is a special item-an orb, a crystal, a rod, a specially constructed staff, a wand-like length of wood, or some similar item-designed to channel the power of arcane spells. A sorcerer, warlock, or wizrd can use such an item as a spellcasting focus.
345	59	171	A druidic focus might be a sprig of mistletoe or holly, a wand or scepter made of yew or another special wood, a staff drawn whole out of a living tree, or a totem object incorporting feathers, fur, bones, and teeth from sacred animals. A druid can use such an object as a spellcasting focus.
346	60	171	A holy symbol is a representation of a god or pantheon. It might be an amulet depicting a symbol representing a deity, the same symbol carefully engraved or inlaid as an emblem on a shield, or a tiny box holding a fragment of a sacred relic. A cleic or paladin can use a holy symbol as a spellcasting focus. To use the symbol in this way, the caster must hold it in hand, wear it visibly, or bear it on a shield.
347	62	171	These special tools include the items needed to pursue a craft or trade. The table shows examples of the most common types of tools, each providing items realted to a single craft. Proficiency with a set of artisan's tools lets you add your proficiency bonus to any ability checks you make using the tools in your craft. Each type of artisan's tools requires a spearate proficiency.
348	64	171	Several of the most common muscial instruments are shown on the table as examples. If you have proficiency with a given muscial instrument, you can add your proficiency bonus to any ability checks you make to play music with the instrument. A bard can use a musical instrument as a spellcasting focus. Each type of instrument requires a separate proficiency.
349	63	171	This item encompasses a wide range of gaming pieces, including dice and decks of cards. A few common examples appear on the Tools table, but other kinds of gaming sets exist. If you are proficient with a gaming set, you can add your proficiency bonus to ability checks you make to play a game with that set. Each type of gaming set requires a separate proficiency.
382	381	171	This pouch of cosmetics, hair dye, and small props lets you create disguises that change your physical appearance. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to create a visual disguise.
384	383	171	This small box contains a variety of papers and parchments, pens and inks, seals and sealing wax, gold and silver leaf, and other supplies necessary to create convincing forgeries of physical documents. Proficiency with this kits lets you add your proficiency bonus to any ability checks you make to create a physical forgery of a document.
386	385	171	This kit contains a variety of instruments such as clippers, mortar and pestle, and pouches and vials used by herbalists to create remedies and potions. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to identify or apply herbs. Also, proficiency with this kit is required to create antitoxin and potions of healing.
388	387	171	This set of instruments is used for navigation at sea. Proficiency with navigator's tools lets you chart a ship's course and follow navigation charts. In addition, these tools allow you to add your proficiency bonus to any ability check you make to avoid getting lost at sea.
390	389	171	A poisoner's kit includes the vials, chemicals, and other equipment necessary for the creation of poisons. Proficiency with this kit lets you add your proficiency bonus to any ability checks you make to craft or use poisons.
392	391	171	This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks.
1423	1419	944	<div>The target has disadvantage on attack rolls and ability checks. At the end of each of its turns, it can make another Wisdom saving throw. If it succeeds, the effect ends.</div>
796	793	171	You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow.
874	873	171	You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that w on’t set off the alarm. You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.
875	873	122	
878	877	171	You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that w on’t set off the alarm. You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.\n
880	879	171	You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that w on’t set off the alarm. You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.\n
610	607	171	As an acolyte you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle.\nYou might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.
624	621	171	You have created a second identity that includes documentation, established acquaintences, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy.
640	636	171	You have a reliable and trustworthy contact who acts as your liason to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.
656	652	171	You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theatre, or even in a noble's court. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you.
672	668	171	Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you.
688	684	171	As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other memebrs of your profession, which can be a good place to meet potential patrons, allies, or hirelings.\nGuilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild's coffers.\nYou must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild's good graces.
704	700	171	The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. Yu might have uncovered a fact that has been long forgotten, or unearthed some relic of the past that could rewrite history. It might be information that would be damaging to the people who consigned you to exile, and hence the reason for your return to society.\nWork with your DM to determine the details of your discovery and its impact on the campaign.
720	716	171	Thanks to your noble birth, people are inclined to think best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to.
734	730	171	You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.
749	746	171	When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.
765	761	171	When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with (perhaps one captained by a former crewmate). Because you're calling in a favor, you can't be certain of a schedule or route that will meet your every need. Your DM will determine how long it takes to get where you need to go. In return for your free passage, you and your companions are expected to assist the crew during the voyage.
779	775	171	You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized.
808	807	171	You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.
811	810	171	Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.
812	810	122	When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd.
935	934	907	vdsfdvsdfvsdfvv`
884	883	171	You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that w on’t set off the alarm. You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.\n
889	888	171	You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. W hile the spell lasts,\nyou can end one option as an action to gain the benefits of a different one. Aquatic Adaptation. You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swim ming speed equal to your walking speed. Change Appearance. You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also can’t appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you can’t use this spell to becom e quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again. Natural Weapons. You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it.
891	890	171	This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast’s Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a W isdom saving throw or be charmed by you for the spell’s duration. If you or one of your companions harms the target, the spells ends. 
892	890	122	W hen you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st.\n
894	893	171	By means of this spell, you use an animal to deliver a message. Choose a Tiny beast you can see within range, such as a squirrel, a blue jay, or a bat. You specify a location, which you must have visited, and a recipient who matches a general description, such as “a man or wom an dressed in the uniform of the town guard” or “a red-haired dwarf wearing a pointed hat.” You also speak a message of up to twenty-five words. The target beast travels for the duration of the spell toward the specified\nlocation, covering about 50 miles per 24 hours for a flying messenger, or 25 miles for other animals. W hen the m essenger arrives, it delivers your m essage to the creature that you described, replicating the sound of your voice. The messenger speaks only to a creature matching the description you gave. If the messenger doesn’t reach its destination before the spell ends, the message is lost, and the beast makes its way back to where you cast this spell. 
895	893	122	If you cast this spell using a spell slot of 3nd level or higher, the duration of the spell increases by 48 hours for each slot level above 2nd.\n
898	897	171	Your magic turns others into beasts. Choose any number of willing creatures that you can see within range. You transform each target into the form of a Large or smaller beast with a challenge rating of 4 or lower. On subsequent turns, you can use your action to transform affected creatures into new forms. The transformation lasts for the duration for each target, or until the target drops to 0 hit points or dies. You can choose a different form for each target. A target’s game statistics are replaced by the statistics of the chosen beast, though the target retains its alignment and Intelligence, W isdom, and Charisma scores. The target assumes the hit points of its new form, and when it reverts to its normal form, it returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn’t reduce the creature’s normal form to 0 hit points, it isn’t knocked unconscious. The creature is limited in the actions it can perform by the nature of its new form, and it can’t speak or cast spells. The target’s gear melds into the new form. The target can’t activate, wield, or otherwise benefit from any of its equipment.
901	900	171	This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becom es a skeleton if you chose bones or a zombie if you chose a corpse (the DM has the creature’s game statistics). On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you\ncontrol multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. The creature is under your control for 24 hours, after which it stops obeying any command you’ve given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one. 
902	900	122	When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot level above 3rd. Each of the creatures must come from a different corpse or pile of bones.\n
915	914	907	'test chart description
920	919	907	'chart desc
925	924	907	'desc
930	929	907	fsasfdfds`
1039	1037	122	<div>&nbsp;If you cast this spell using a spell slot of 4th level or higher, the duration is concentration, up to 10 minutes. If you use a spell slot of 5th level or higher, the duration is 8 hours. If you use a spell slot of 7th level or higher, the duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a duration that doesn’t require concentration.</div>
938	937	171	Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can’t animate any object larger than Huge. Each target animates and becom es a creature under your control until the spell ends or until reduced to 0 hit points. As a bonus action, you can mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.\nAn animated object is a construct with AC, hit points, attacks, Strength, and Dexterity determined by its size. Its Constitution is 10 and its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet; if the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or a larger object, such as a chain bolted to a wall, its speed is 0. It has blindsight with a radius of 30 feet and is blind beyond that distance. W hen the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form. If you command an object to attack, it can make a single melee attack against a creature within 5 feet of it. It makes a slam attack with an attack bonus and bludgeoning damage determined by its size. The DM might rule that a specific object inflicts slashing or piercing damage based on its form. 
939	937	122	If you cast this spell using a spell slot of 6th level or higher, you can animate two additional objects for each slot level above 5th.\n
943	942	171	A shimmering barrier extends out from you in a 10-foot radius and moves with you, remaining centered on you and hedging out creatures other than undead and constructs.The barrier lasts for the duration. The barrier prevents an affected creature from passing or reaching through. An affected creature can cast spells or make attacks with ranged or reach weapons through the barrier.\nIf you move so that an affected creature is forced to pass through the barrier, the spell ends.
1724	1723	171	Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage.
1725	1723	122	When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.
1764	1763	171	<div>You touch a creature. The target’s speed increases by 10 feet until the spell ends.</div>
1765	1763	122	<div>When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.</div>
974	973	171	A 10-foot-radius invisible sphere of antimagic surrounds you. This area is divorced from the magical energy that suffuses the multiverse. Within the sphere, spells can’t be cast, summoned creatures disappear, and even magic items becom e mundane. Until the spell ends, the sphere moves with you, centered on you. Spells and other magical effects, except those created by an artifact or a deity, are suppressed in the sphere and can’t protrude into it. A slot expended to cast a suppressed spell is consumed. While an effect is suppressed, it doesn’t function, but the time it spends suppressed counts against its duration. 
975	973	944	 Spells and other magical effects, such as magic missile and charm person, that target a creature or an object in the sphere have no effect on that target.
976	973	944	The area of another spell or magical effect, such as fireball, can’t extend into the sphere. If the sphere overlaps an area of magic, the part of the area that is covered by the sphere is suppressed. For example, the flames created by a wall of fire are suppressed within the sphere, creating a gap in the wall if the overlap is large enough.
977	973	944	Any active spell or other magical effect on a creature or an object in the sphere is suppressed while the creature or object is in it. 
978	973	944	The properties and powers of magic items are suppressed in the sphere. For example, a +1 longsword in the sphere functions as a nonmagical longsword. A magic weapon’s properties and powers are suppressed if it is used against a target in the sphere or wielded by an attacker in the sphere. If a magic weapon or a piece of magic ammunition fully leaves the sphere (for example, if you fire a magic arrow or throw a magic spear at a target outside the sphere), the magic of the item ceases to be suppressed as soon as it exits. 
979	973	944	Teleportation and planar travel fail to work in the sphere, whether the sphere is the destination or the departure point for such magical travel. A portal to another location, world, or plane of existence, as well as an opening to an extradimensional space such as that created by the rope trick spell, temporarily closes while in the sphere.
980	973	944	A creature or object summoned or created by magic temporarily winks out of existence in the sphere. Such a creature instantly reappears once the space the creature occupied is no longer within the sphere. 
981	973	944	Spells and magical effects such as dispel magic have no effect on the sphere. Likewise, the spheres created by different antimagic field spells don’t nullify each other.
984	983	171	This spell attracts or repels creatures of your choice. You target something within range, either a Huge or smaller object or creature or an area that is no larger than a 200-foot cube. Then specify a kind of intelligent creature, such as red dragons, goblins, or vampires. You invest the target with an aura that either attracts or repels the specified creatures for the duration. Choose antipathy or sympathy as the aura’s effect.
985	983	944	The enchantment causes creatures of the kind you designated to feel an intense urge to leave the area and avoid the target. When such a creature can see the target or com es within 60 feet of it, the creature must succeed on a Wisdom saving throw or become frightened. The creature remains frightened while it can see the target or is within 60 feet of it. W hile frightened by the target, the creature must use its movement to move to the nearest safe spot from which it can’t see the target. If the creature moves more than 60 feet from the target and can’t see it, the creature is no longer frightened, but the creature becomes frightened again if it regains sight of the target or moves within 60 feet of it. 
986	983	944	The enchantment causes the specified creatures to feel an intense urge to approach the target while within 60 feet of it or able to see it. When such a creature can see the target or com es within 60 feet of it, the creature must succeed on a Wisdom saving throw or use its movement on each of its turns to enter the area or move within reach of the target. W hen the creature has done so, it can’t willingly move away from the target. If the target damages or otherwise harms an affected creature, the affected creature can make a Wisdom saving throw to end the effect, as described below. 
987	983	944	 If an affected creature ends its turn while not within 60 feet of the target or able to see it, the creature makes a Wisdom saving throw. On a successful save, the creature is no longer affected by the target and recognizes the feeling of repugnance or attraction as magical. In addition, a creature affected by the spell is allowed another Wisdom saving throw every 24 hours while the spell persists. A creature that successfully saves against this effect is immune to it for 1 minute, after which time it can be affected again.\n
989	988	171	You create an invisible, magical eye within range that hovers in the air for the duration. You mentally receive visual information from the eye, which has normal vision and darkvision out to 30 feet. The eye can look in every direction. As an action, you can move the eye up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it can’t enter another plane of existence. A solid barrier blocks the eye’s movement, but the eye can pass through an opening as small as 1 inch in diameter.
993	992	171	You create linked teleportation portals that remain open for the duration. Choose two points on the ground that you can see, one point within 10 feet of you and one point within 500 feet of you. A circular portal, 10 feet in diameter, opens over each point. If the portal would open in the space occupied by a creature, the spell fails, and the casting is lost. The portals are two-dimensional glowing rings filled with mist, hovering inches from the ground and perpendicular to it at the points you choose. A ring is visible only from one side (your choice), which is the side that functions as a portal. Any creature or object entering the portal exits from the other portal as if the two were adjacent to each other; passing through a portal from the nonportal side has no effect. The mist that fills each portal is opaque and blocks vision through it. On your turn, you can rotate the rings as a bonus action so that the active side faces in a different direction.
996	995	171	A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage.
997	995	122	When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the cold damage increase by 5 for each slot level above 1st.
1000	999	171	You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic damage and can’t take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect.\n
1001	999	122	When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.\n
1004	1003	171	You and up to eight willing creatures within range project your astral bodies into the Astral Plane (the spell fails and the casting is wasted if you are already on that plane). The material body you leave behind is unconscious and in a state of suspended animation; it doesn’t need food or air and doesn’t age. Your astral body resembles your mortal form in almost every way, replicating your game statistics and possessions. The principal difference is the addition of a silvery cord that extends from between your shoulder blades and trails behind you, fading to invisibility after 1 foot. This cord is your tether to your material body. As long as the tether remains intact, you can find your way home. If the cord is cut—something that can happen only when an effect specifically states that it does—your soul and body are separated, killing you instantly. Your astral form can freely travel through the Astral Plane and can pass through portals there leading to any other plane. If you enter a new plane or return to the plane you were on when casting this spell, your body and possessions are transported along the silver cord, allowing you to re-enter your body as you enter the new plane. Your astral form is a separate incarnation. Any damage or other effects that apply to it have no effect on your physical body, nor do they persist when you return to it. The spell ends for you and your companions when you use your action to dismiss it. W hen the spell ends, the affected creature returns to its physical body, and it awakens. The spell might also end early for you or one of your companions. A successful dispel magic spell used against an astral or physical body ends the spell for that creature. If a creature’s original body or its astral form drops to 0 hit points, the spell ends for that creature. If the spell ends and the silver cord is intact, the cord pulls the creature’s astral form back to its body, ending its state of suspended animation. If you are returned to your body prematurely, your companions remain in their astral forms and must find their own way back to their bodies, usually by dropping to 0 hit points.
1449	1448	171	Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration.
1008	1007	171	<div>By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing som e other divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes. The DM chooses from the following possible omens:</div><div>•&nbsp;Weal, for good results&nbsp;</div><div>• Woe, for bad results&nbsp;</div><div>• Weal and woe, for both good and bad results&nbsp;</div><div>• Nothing, for results that aren’t especially good or bad<br></div><div>The spell doesn’t take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion.&nbsp;<br></div><div>If you cast the spell two or more times before completing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret.<br></div>
1011	1010	171	<div>Purifying energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) can’t becom e diseased, has resistance to poison damage, and has advantage on saving throws against effects that cause any of the following conditions: blinded, charmed, deafened, frightened, paralyzed, poisoned, and stunned.</div>
1013	1012	171	<div>Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points.</div>
1016	1015	171	After spending the casting time tracing magical pathways within a precious gemstone, you touch a Huge or smaller beast or plant. The target must have either no Intelligence score or an Intelligence of 3 or less. The target gains an Intelligence of 10. The target also gains the ability to speak one language you know. If the target is a plant, it gains the ability to move its limbs, roots, vines, creepers, and so forth, and it gains senses similar to a human’s. Your DM chooses statistics appropriate for the awakened plant, such as the statistics for the awakened shrub or the awakened tree.<div><div>The awakened beast or plant is charmed by you for 30 days or until you or your companions do anything harmful to it. When the charmed condition ends, the awakened creature chooses whether to remain friendly to you, based on how you treated it while it was charmed.</div></div>
1018	1017	171	Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.
1019	1017	122	When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.
1450	1448	122	<div>When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st.</div>
1023	1022	171	You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a Charisma saving throw or be banished.<div>If the target is native to the plane of existence you’re on, you banish the target to a harmless demiplane. While there, the target is incapacitated. The target remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.&nbsp;<br></div><div>If the target is native to a different plane of existence than the one you’re on, the target is banished with a faint popping noise, returning to its home plane. If the spell ends before 1 minute has passed, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. Otherwise, the target doesn't return.&nbsp;<br></div>
1024	1022	122	<div>When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th.</div>
1512	1511	171	You evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke the blade again as a bonus action.<div>You can use your action to make a melee spell attack with the fiery blade. On a hit, the target takes 3d6 fire damage.<br></div><div>The flaming blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.<br></div>
1030	1029	171	The next time you hit a creature with a w eapon attack before this spell ends, your weapon crackles with force, and the attack deals an extra 5d10 force damage to the target. Additionally, if this attack reduces the target to 50 hit points or fewer, you banish it. If the target is native to a different plane of existence than the one you’re on, the target disappears, returning to its home plane. If the target is native to the plane you’re on, the creature vanishes into a harmless demiplane. While there, the target is incapacitated. It remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied.
1032	1031	171	You touch a willing creature. Until the spell ends, the target’s skin has a rough, bark-like appearance, and the target’s AC can’t be less than 16, regardless of what kind of armor it is wearing.
1034	1033	171	<div>This spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has advantage on W isdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing.</div>
1036	1035	171	You touch a willing beast. For the duration of the spell, you can use your action to see through the beast’s eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses.<div><div>While perceiving through the beast’s senses, you gain the benefits of any special senses possessed by that creature, though you are blinded and deafened to your own surroundings.</div></div><div><br></div>
1038	1037	171	You touch a creature, and that creature must succeed on a Wisdom saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following options:<br><div>• Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score.&nbsp;</div><div>• While cursed, the target has disadvantage on attack rolls against you.&nbsp;</div><div>• While cursed, the target must make a Wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing.&nbsp;</div><div>• While the target is cursed, your attacks and spells deal an extra 1d8 necrotic damage to the target.</div><div>A remove curse spell ends this effect. At the DM ’s option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The DM has final say on such a curse’s effect.<br><div><br></div></div>
1051	1050	171	<div>You create a vertical wall of whirling, razor-sharp blades made of magical energy. The wall appears within range and lasts for the duration. You can make a straight wall up to 100 feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet in diameter, 20 feet high, and 5 feet thick. The wall provides three-quarters cover to creatures behind it, and its space is difficult terrain.&nbsp;</div><div>When a creature enters the wall’s area for the first time on a turn or starts its turn there, the creature must make a Dexterity saving throw. On a failed save, the creature takes 6d10 slashing damage. On a successful save, the creature takes half as much damage.</div><div><br></div>
1055	1054	171	You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.
1057	1056	171	You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.
1058	1056	122	<div>When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.</div><div><br></div>
1513	1511	122	<div>When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for every two slot levels above 2nd.</div><div><br></div>
1070	1069	171	Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a Constitution saving throw. The target takes 8d8 necrotic damage on a failed save, or half as much damage on a successful one. This spell has no effect on undead or constructs.<div>If you target a plant creature or a magical plant, it makes the saving throw with disadvantage, and the spell deals maximum damage to it.<div>If you target a non-magical plant that isn’t a creature, such as a tree or shrub, it doesn’t make a saving throw; it simply withers and dies.</div></div>
1071	1069	122	<div>When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th.</div><div><br></div>
1073	1072	171	The next time you hit a creature with a melee weapon attack during this spell’s duration, your weapon flares with bright light, and the attack deals an extra 3d8 radiant damage to the target. Additionally, the target must succeed on a Constitution saving throw or be blinded until the spell ends.<div><div>A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded.</div></div>
1076	1075	171	You can blind or deafen a foe. Choose one creature that you can see within range to make a Constitution saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends.
1077	1075	122	When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.
1079	1078	171	Roll a d20 at the end of each of your turns for the duration of the spell. On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell fails and the casting is wasted if you were already on that plane). At the start of your next turn, and when the spell ends if you are on the Ethereal Plane, you return to an unoccupied space of your choice that you can see within 10 feet of the space you vanished from. If no unoccupied space is available within that range, you appear in the nearest unoccupied space (chosen at random if more than one space is equally near). You can dismiss this spell as an action.<div><div>While on the Ethereal Plane, you can see and hear the plane you originated from, which is cast in shades of gray, and you can’t see anything there more than 60 feet away. You can only affect and be affected by other creatures on the Ethereal Plane. Creatures that aren’t there can’t perceive you or interact with you, unless they have the ability to do so.</div></div>
1081	1080	171	Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn’t rely on sight, as with blindsight, or can see through illusions, as with truesight
1083	1082	171	The next time you hit a creature with a weapon attack before this spell ends, the weapon gleams with astral radiance as you strike. The attack deals an extra 2d6 radiant damage to the target, which becomes visible if it’s invisible, and the target sheds dim light in a 5-foot radius and can’t become invisible until the spell ends.
1084	1082	122	When you cast this spell using a spell slot of 3rd level or higher, the extra damage increases by 1d6 for each slot level above 2nd.
1087	1086	171	As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.<div>The fire ignites any flammable objects in the area that aren’t being worn or carried.&nbsp;<br></div>
1088	1086	122	When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.
1144	1143	171	<div>For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text.</div><div><div>This spell doesn’t decode secret messages in a text or a glyph, such as an arcane sigil, that isn’t part of a written language.</div></div>
1317	1316	171	For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.<div><div>The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of com m on metal, a thin sheet of lead, or 3 feet of w ood or dirt.</div></div>
1404	1403	171	The next time you hit a creature with a weapon attack before this spell ends, a writhing mass of thorny vines appears at the point of impact, and the target must succeed on a Strength saving throw or be restrained by the magical vines until the spell ends. A Large or larger creature has advantage on this saving throw. If the target succeeds on the save, the vines shrivel away.<div>While restrained by this spell, the target takes 1d6 piercing damage at the start of each of its turns. A creature restrained by the vines or one that can touch the creature can use its action to make a Strength check against your spell save DC. On a success, the target is freed.<br></div>
1405	1403	122	If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.
1407	1406	171	Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within range. For the duration, these plants turn the ground in the area into difficult terrain.<div>A creature in the area when you cast the spell must succeed on a Strength saving throw or be restrained by the entangling plants until the spell ends. A creature restrained by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees itself.</div><div>When the spell ends, the conjured plants wilt away.<br></div>
1409	1408	171	<div>You weave a distracting string of words, causing creatures of your choice that you can see within range and that can hear you to make a Wisdom saving throw. Any creature that can’t be charmed succeeds on this saving throw automatically, and if you or your companions are fighting a creature, it has advantage on the save. On a failed save, the target has disadvantage on Wisdom (Perception) checks made to perceive any creature other than you until the spell ends or until the target can no longer hear you. The spell ends if you are incapacitated or can no longer speak.</div>
1093	1092	171	You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a Charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects.<div>You can suppress any effect causing a target to be charmed or frightened. W hen this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime.&nbsp;<br></div><div><div>Alternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. W hen the spell ends, the creature becomes hostile again, unless the DM rules otherwise.</div></div>
1100	1099	171	You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charm ed by you until the spell ends or until you or your companions do anything harmful to it. The charm ed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.
1101	1099	122	<div>W hen you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.</div><div><br></div>
1524	1523	171	You touch a willing creature. The target gains a flying speed of 60 feet for the duration. W hen the spell ends, the target falls if it is still aloft, unless it can stop the fall.
1105	1104	171	<div>You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can’t regain hit points until the start of your next turn. Until then, the hand clings to the target.</div><div>If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn.</div><div>This spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).</div><div><br></div>
1108	1107	171	You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 damage of the type you chose.
1109	1107	122	<div>When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.</div><div><br></div>
1111	1110	171	A sphere of negative energy ripples out in a 60-foot- radius sphere from a point within range. Each creature in that area must make a Constitution saving throw. A target takes 8d6 necrotic damage on a failed save, or half as much damage on a successful one.
1112	1110	122	<div>When you cast this spell using a spell slot of 7th level or higher, the damage increases by 2d6 for each slot level above 6th.</div><div><br></div>
1115	1114	171	<div>Divine energy radiates from you, distorting and diffusing magical energy within 30 feet of you. Until the spell ends, the sphere moves with you, centered on you. For the duration, each friendly creature in the area (including you) has advantage on saving throws against spells and other magical effects. Additionally, when an affected creature succeeds on a saving throw made against a spell or magical effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw.</div>
1117	1116	171	You create an invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The sensor remains in place for the duration, and it can’t be attacked or otherwise interacted with.<div>When you cast the spell, you choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As your action, you can switch between seeing and hearing.&nbsp;<br></div><div><div>A creature that can see the sensor (such as a creature benefiting from see invisibility or truesight) sees a luminous, intangible orb about the size of your fist.</div></div>
1246	1242	944	You cause flowing water in the area to move in a direction you choose, even if the water has to flow over obstacles, up walls, or in other unlikely directions. The water in the area moves as you direct it, but once it moves beyond the spell’s area, it resumes its flow based on the terrain conditions. The water continues to move in the direction you chose until the spell ends or you choose a different effect.&nbsp;
1319	1318	171	For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case.<div><div>The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of com m on metal, a thin sheet of lead, or 3 feet of w ood or dirt.</div></div>
1119	1118	171	This spell grows an inert duplicate of a living creature as a safeguard against death. This clone forms inside a sealed vessel and grows to full size and maturity after 120 days; you can also choose to have the clone be a younger version of the same creature. It remains inert and endures indefinitely, as long as its vessel remains undisturbed.&nbsp;<div>At any time after the clone matures, if the original creature dies, its soul transfers to the clone, provided that the soul is free and willing to return. The clone is physically identical to the original and has the same personality, memories, and abilities, but none of the original’s equipment. The original creature’s physical remains, if they still exist, become inert and can’t thereafter be restored to life, since the creature’s soul is elsewhere</div>
1121	1120	171	You fill the air with spinning daggers in a cube 5 feet on each side, centered on a point you choose within range. A creature takes 4d4 slashing damage when it enters the spell’s area for the first time on a turn or starts its turn there.
1122	1120	122	<div>When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 2d4 for each slot level above 2nd.</div>
1124	1123	171	You create a 20-foot-radius sphere of poisonous, yellow- green fog centered on a point you choose within range. The fog spreads around corners. It lasts for the duration or until strong wind disperses the fog, ending the spell. Its area is heavily obscured.<div>When a creature enters the spell’s area for the first time on a turn or starts its turn there, that creature must make a Constitution saving throw. The creature takes 5d8 poison damage on a failed save, or half as much damage on a successful one. Creatures are affected even if they hold their breath or don’t need to breathe.<br></div><div>The fog moves 10 feet away from you at the start of each of your turns, rolling along the surface of the ground. The vapors, being heavier than air, sink to the lowest level of the land, even pouring down openings.<br></div>
1125	1123	122	<div>When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.</div>
1127	1126	171	A dazzling array of flashing, colored light springs from your hand. Roll 6d10; the total is how many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can’t see).<div>Starting with the creature that has the lowest current hit points, each creature affected by this spell is blinded until the spell ends. Subtract each creature’s hit points from the total before moving on to the creature with the next lowest hit points. A creature’s hit points must be equal to or less than the remaining total for that creature to be affected.<br></div>
1128	1126	122	<div>When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d10 for each slot level above 1st.</div><div><br></div>
1130	1129	171	You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the com m and on its next turn. The spell has no effect if the target is undead, if it doesn’t understand your language, or if your command is directly harmful to it.<div>Some typical commands and their effects follow. You might issue a command other than one described here. If you do so, the DM determines how the target behaves. If the target can’t follow your command, the spell ends.&nbsp;<br></div>
1131	1129	122	<div>When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.</div><div><br></div>
1132	1129	944	The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you.
1133	1129	944	The target drops whatever it is holding and then ends its turn.&nbsp;
1134	1129	944	The target spends its turn moving away from you by the fastest available means.
1135	1129	944	The target falls prone and then ends its turn.
1136	1129	944	The target doesn’t move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must move to stay aloft, it flies the minimum distance needed to remain in the air.&nbsp;
1138	1137	171	You contact your deity or a divine proxy and ask up to three questions that can be answered with a yes or no. You must ask your questions before the spell ends. You receive a correct answer for each question.<div>Divine beings aren’t necessarily omniscient, so you might receive “unclear” as an answer if a question pertains to information that lies beyond the deity’s knowledge. In a case where a one-word answer could be misleading or contrary to the deity’s interests, the DM might offer a short phrase as an answer instead.<br></div><div>If you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get no answer. The DM makes this roll in secret.<br></div>
1140	1139	171	You briefly become one with nature and gain knowledge of the surrounding territory. In the outdoors, the spell gives you knowledge of the land within 3 miles of you. In caves and other natural underground settings, the radius is limited to 300 feet. The spell doesn’t function where nature has been replaced by construction, such as in dungeons and towns<div>You instantly gain knowledge of up to three facts of your choice about any of the following subjects as they relate to the area:</div><div>• terrain and bodies of water&nbsp;</div><div>• prevalent plants, minerals, animals, or peoples&nbsp;</div><div>• powerful celestials, fey, fiends, elementals, or undead&nbsp;</div><div>• influence from other planes of existence&nbsp;</div><div>• buildings</div><div>For example, you could determine the location of powerful undead in the area, the location of major sources of safe drinking water, and the location of any nearby towns.</div>
1142	1141	171	You attempt to compel a creature into a duel. One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your divine demand. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you; if it succeeds on this saving throw, this spell doesn’t restrict the target’s movement for that turn.<div><div>The spell ends if you attack any other creature, if you cast a spell that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful spell on it, or if you end your turn more than 30 feet away from the target.</div></div>
1281	1279	122	<div>When you cast this spell using a spell slot of 6th level or higher, the cube increases by 5 feet for each slot level above 5th.</div><div><br></div>
1146	1145	171	Creatures of your choice that you can see within range and that can hear you must make a Wisdom saving throw. A target automatically succeeds on this saving throw if it can’t be charmed. On a failed save, a target is affected by this spell. Until the spell ends, you can use a bonus action on each of your turns to designate a direction that is horizontal to you. Each affected target must use as much of its movement as possible to move in that direction on its next turn. It can take its action before it moves. After moving in this way, it can make another Wisdom saving to try to end the effect.<div><div>A target isn’t compelled to move into an obviously deadly hazard, such as a fire or pit, but it will provoke opportunity attacks to move in the designated direction.</div></div>
1149	1148	171	A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one.<div>A creature killed by this spell becomes a frozen statue until it thaws.<br></div>
1150	1148	122	<div>When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.</div>
1179	1178	171	<div>This spell assaults and twists creatures' minds, spawning delusions and provoking uncontrolled action. Each creature in a 10-foot-radius sphere centered on a point you choose within range must succeed on a Wisdom saving throw when you cast this spell or be affected by it.&nbsp;</div><div>An affected target can’t take reactions and must roll a d10 at the start of each of its turns to determine its behavior for that turn.</div><div>At the end of each of its turns, an affected target can make a Wisdom saving throw. If it succeeds, this effect ends for that target.</div>
1180	1178	122	When you cast this spell using a spell slot of 5th level or higher, the radius of the sphere increases by 5 feet for each slot level above 4th.
1184	1183	171	<div>You summon fey spirits that take the form of beasts and appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears:</div><div>• One beast of challenge rating 2 or lower&nbsp;</div><div>• Two beasts of challenge rating 1 or lower&nbsp;</div><div>• Four beasts of challenge rating 1/2 or lower&nbsp;</div><div>• Eight beasts of challenge rating 1/4 or lower</div><div>Each beast is also considered fey, and it disappears when it drops to 0 hit points or when the spell ends.</div><div>The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don’t issue any com m ands to them, they defend themselves from hostile creatures, but otherwise take no actions.&nbsp;</div><div>The DM has the creatures’ statistics.</div>
1185	1183	122	When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 5th-level slot, three times as many with a 7th-level slot, and four times as many with a 9th-level slot.
1187	1186	171	<div>You throw a non-magical weapon or fire a piece of non-magical ammunition into the air to create a cone of identical weapons that shoot forward and then disappear. Each creature in a 60-foot cone must succeed on a Dexterity saving throw. A creature takes 3d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used as a component.</div>
1189	1188	171	You summon a celestial of challenge rating 4 or lower, which appears in an unoccupied space that you can see within range. The celestial disappears when it drops to 0 hit points or when the spell ends.<div>The celestial is friendly to you and your companions for the duration. Roll initiative for the celestial, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don’t violate its alignment. If you don’t issue any commands to the celestial, it defends itself from hostile creatures but otherwise takes no actions.<br></div><div>The DM has the celestial’s statistics.<br></div>
1190	1188	122	<div>When you cast this spell using a 9th-level spell slot, you summon a celestial of challenge rating 5 or lower.</div>
1192	1191	171	You call forth an elemental servant. Choose an area of air, earth, fire, or water that fills a 10-foot cube within range. An elemental of challenge rating 5 or lower appropriate to the area you chose appears in an unoccupied space within 10 feet of it. For example, a fire elemental emerges from a bonfire, and an earth elemental rises up from the ground. The elemental disappears when it drops to 0 hit points or when the spell ends.&nbsp;<div>The elemental is friendly to you and your companions for the duration. Roll initiative for the elemental, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don’t issue any commands to the elemental, it defends itself from hostile creatures but otherwise takes no actions.<br></div><div>If your concentration is broken, the elemental doesn’t disappear. Instead, you lose control of the elemental, it becomes hostile toward you and your companions, and it might attack. An uncontrolled elemental can’t be dismissed by you, and it disappears 1 hour after you summoned it.</div><div>The DM has the elemental’s statistics.&nbsp;<br></div>
1193	1191	122	<div>When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th.</div>
1315	1314	171	For the duration, you know if there is an aberration, celestial, elemental, fey, fiend, or undead within 30 feet of you, as well as where the creature is located. Similarly, you know if there is a place or object within 30 feet of you that has been magically consecrated or desecrated.<div><div>The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of com m on metal, a thin sheet of lead, or 3 feet of wood or dirt.</div></div>
1356	1355	171	Your magic and an offering put you in contact with a god or a god’s servants. You ask a single question concerning a specific goal, event, or activity to occur within 7 days. The DM offers a truthful reply. The reply might be a short phrase, a cryptic rhyme, or an omen.<div>The spell doesn’t take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion.<br></div><div><div>If you cast the spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret.</div></div>
1195	1194	171	You summon a fey creature of challenge rating 6 or lower, or a fey spirit that takes the form of a beast of challenge rating 6 or lower. It appears in an unoccupied space that you can see within range. The fey creature disappears when it drops to 0 hit points or when the spell ends.<div>The fey creature is friendly to you and your companions for the duration. Roll initiative for the creature, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you), as long as they don't violate its alignment. If you don’t issue any commands to the fey creature, it defends itself from hostile creatures but otherwise takes no actions.&nbsp;<br></div><div>If your concentration is broken, the fey creature doesn’t disappear. Instead, you lose control of the fey creature, it becomes hostile toward you and your companions, and it might attack. An uncontrolled fey creature can't be dismissed by you, and it disappears 1 hour after you summoned it.</div><div>The DM has the fey creature’s statistics.<br></div>
1196	1194	122	<div>When you cast this spell using a spell slot of 7th level or higher, the challenge rating increases by 1 for each slot level above 6th.</div>
1198	1197	171	<div>You summon elementals that appear in unoccupied spaces that you can see within range. You choose one the following options for what appears:</div><div><div>• One elemental of challenge rating 2 or lower&nbsp;</div><div>• Two elementals of challenge rating 1 or lower&nbsp;</div><div>• Four elementals of challenge rating 1/2 or lower&nbsp;</div><div>• Eight elementals of challenge rating 1/4 or lower.</div></div><div>An elemental summoned by this spell disappears when it drops to 0 hit points or when the spell ends.<br></div><div>The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don’t issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.</div><div>The DM has the creatures' statistics.&nbsp;<br></div>
1199	1197	122	<div>When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot.</div>
1201	1200	171	<div>You fire a piece of non-magical ammunition from a ranged weapon or throw a non-magical weapon into the air and choose a point within range. Hundreds of duplicates of the ammunition or weapon fall in a volley from above and then disappear. Each creature in a 40-foot-radius. 20-foot-high cylinder centered on that point must make a Dexterity saving throw. A creature takes 8d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the ammunition or weapon.</div>
1203	1202	171	<div>You summon fey creatures that appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears:</div><div><div>• One fey creature of challenge rating 2 or lower&nbsp;</div><div>• Two fey creatures of challenge rating 1 or lower&nbsp;</div><div>• Four fey creatures of challenge rating 1/2 or lower&nbsp;</div><div>• Eight fey creatures of challenge rating 1/4 or lower</div></div><div>A summoned creature disappears when it drops to 0 hit points or when the spell ends.&nbsp;<br></div><div>The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which have their own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions.</div><div>The DM has the creatures’ statistics.<br></div>
1204	1202	122	When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: twice as many with a 6th-level slot and three times as many with an 8th-level slot.
1206	1205	171	You mentally contact a demigod, the spirit of a long-dead sage, or some other mysterious entity from another plane. Contacting this extra-planar intelligence can strain or even break your mind. W hen you cast this spell, make a DC 15 Intelligence saving throw. On a&nbsp;failure, you take 6d6 psychic damage and are insane until you finish a long rest. While insane, you can’t take actions, can’t understand what other creatures say, can’t read, and speak only in gibberish. A <i>greater restoration</i> spell cast on you ends this effect.<div><div>On a successful save, you can ask the entity up to five questions. You must ask your questions before the spell ends. The DM answers each question with one word, such as “yes,” “no,” “maybe,” “never,” “irrelevant,” or “unclear” (if the entity doesn’t know the answer to the question). If a one-word answer would be misleading, the DM might instead offer a short phrase as an answer.</div></div>
1209	1208	171	Your touch inflicts disease. Make a melee spell attack against a creature within your reach. On a hit, you afflict the creature with a disease of your choice from any of the ones described below.<div>At the end of each of the target’s turns, it must make a Constitution saving throw. After failing three of these saving throws, the disease’s effects last for the duration, and the creature stops making these saves. After succeeding on three of these saving throws, the creature recovers from the disease, and the spell ends.&nbsp;<br></div><div>Since this spell induces a natural disease in its target, any effect that removes a disease or otherwise ameliorates a disease’s effects apply to it.&nbsp;<br></div>
1210	1208	944	Pain grips the creature’s mind, and its eyes turn milky white. The creature has disadvantage on Wisdom checks and Wisdom saving throws and is blinded.&nbsp;
1211	1208	944	A raging fever sweeps through the creature’s body. The creature has disadvantage on Strength checks, Strength saving throws, and attack rolls that use Strength.&nbsp;
1212	1208	944	The creature’s flesh decays. The creature has disadvantage on Charisma checks and vulnerability to all damage.&nbsp;
1213	1208	944	The creature’s mind becomes feverish. The creature has disadvantage on Intelligence checks and Intelligence saving throws, and the creature behaves as if under the effects of the confusion spell during combat.&nbsp;
1214	1208	944	The creature is overcome with shaking. The creature has disadvantage on Dexterity checks, Dexterity saving throws, and attack rolls that use Dexterity.&nbsp;
1215	1208	944	<div>The creature begins to bleed uncontrollably. The creature has disadvantage on Constitution checks and Constitution saving throws. In addition, whenever the creature takes damage, it is stunned until the end of its next turn.</div>
1525	1523	122	When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.
1217	1216	171	Choose a spell of 5th level or lower that you can cast, that has a casting time of 1 action, and that can target you. You cast that spell—called the contingent spell—as part of casting contingency, expending spell slots for both, but the contingent spell doesn't com e into effect. Instead, it takes effect when a certain circumstance occurs. You describe that circumstance when you cast the two spells. For example, a contingency cast with water breathing might stipulate that water breathing com es into effect when you are engulfed in water or a similar liquid.<div>The contingent spell takes effect immediately after the circumstance is met for the first time, whether or not you want it to. and then contingency ends.<br></div><div><div>The contingent spell takes effect only on you, even if it can normally target others. You can use only one contingency spell at a time. If you cast this spell again, the effect of another contingency spell on you ends. Also, contingency ends on you if its material component is ever not on your person.</div></div>
1220	1219	171	<div>A flame, equivalent in brightness to a torch, springs forth from an object that you touch. The effect looks like a regular flame, but it creates no heat and doesn’t use oxygen. A continual flame can be covered or hidden but not smothered or quenched.</div>
1425	1424	171	You convert raw materials into products of the same material. For example, you can fabricate a wooden bridge from a clump of trees, a rope from a patch of hemp, and clothes from flax or wool.<div>Choose raw materials that you can see within range. You can fabricate a Large or smaller object (contained within a 10-foot cube, or eight connected 5-foot cubes), given a sufficient quantity of raw material. If you are working with metal, stone, or another mineral substance, however, the fabricated object can be no larger than Medium (contained within a single 5-foot cube). The quality of objects made by the spell is commensurate with the quality of the raw materials.<br></div><div><div>Creatures or magic items can’t be created or transmuted by this spell. You also can’t use it to create items that ordinarily require a high degree of craftsmanship, such as jewelry, weapons, glass, or armor, unless you have proficiency with the type of artisan’s tools used to craft such objects.</div></div>
1453	1452	171	You project a phantasmal image of a creature’s worst fears. Each creature in a 30-foot cone must succeed on a Wisdom saving throw or drop whatever it is holding and become frightened for the duration.<div><div>While frightened by this spell, a creature must take the Dash action and move away from you by the safest available route on each of its turns, unless there is nowhere to move. If the creature ends its turn in a location where it doesn’t have line of sight to you, the creature can make a W isdom saving throw. On a successful save, the spell ends for that creature.</div></div>
1464	1463	171	You summon a spirit that assumes the form of an unusually intelligent, strong, and loyal steed, creating a long-lasting bond with it. Appearing in an unoccupied space within range, the steed takes on a form that you choose, such as a warhorse, a pony, a camel, an elk, or a mastiff. (Your DM might allow other animals to be summoned as steeds.) The steed has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of its normal type. Additionally, if your steed has an Intelligence of 5 or less, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak.<div>Your steed serves you as a mount, both in combat and out, and you have an instinctive bond with it that allows you to fight as a seam less unit. While mounted on your steed, you can make any spell you cast that targets only you also target your steed.<br></div><div>When the steed drops to 0 hit points, it disappears, leaving behind no physical form. You can also dismiss your steed at any time as an action, causing it to disappear. In either case, casting this spell again summons the same steed, restored to its hit point maximum.<br></div><div>While your steed is within 1 mile of you, you can communicate with it telepathically.<br></div><div><div>You can’t have more than one steed bonded by this spell at a time. As an action, you can release the steed from its bond at any time, causing it to disappear.</div></div>
1477	1476	171	A bright streak flashes from your pointing finger to a point you choose within range and then blossom s with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire&nbsp;damage on a failed save, or half as much damage on a successful one.<div>The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.&nbsp;</div>
1478	1476	122	<div>When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.</div>
1507	1506	171	Thin and wispy flames wreathe your body for the duration, shedding bright light in a 10-foot radius and dim light for an additional 10 feet. You can end the spell early by using an action to dismiss it.<div>The flames provide you with a warm shield or a chill shield, as you choose. The warm shield grants you resistance to cold damage, and the chill shield grants you resistance to fire damage.<br></div><div><div>In addition, whenever a creature within 5 feet of you hits you with a melee attack, the shield erupts with flame. The attacker takes 2d8 fire damage from a warm shield, or 2d8 cold damage from a cold shield.</div></div>
1527	1526	171	You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.
1243	1242	171	Until the spell ends, you control any freestanding water inside an area you choose that is a cube up to 100 feet on a side. You can choose from any of the following effects when you cast this spell. As an action on your turn, you can repeat the same effect or choose a different one.
1244	1242	944	<div>You cause the water level of all standing water in the area to rise by as much as 20 feet. If the area includes a shore, the flooding water spills over onto dry land.&nbsp;</div><div>If you choose an area in a large body of water, you instead create a 20-foot tall wave that travels from one side of the area to the other and then crashes down. Any Huge or smaller vehicles in the wave’s path are carried with it to the other side. Any Huge or smaller vehicles struck by the wave have a 25 percent chance of capsizing.&nbsp;</div><div>The water level remains elevated until the spell ends or you choose a different effect. If this effect produced a wave, the wave repeats on the start of your next turn while the flood effect lasts.</div>
1245	1242	944	You cause water in the area to move apart and create a trench. The trench extends across the spell’s area, and the separated water forms a wall to either side. The trench remains until the spell ends or you choose a different effect. The water then slowly fills in the trench over the course of the next round until the normal water level is restored.&nbsp;
1247	1242	944	<div>This effect requires a body of water at least 50 feet square and 25 feet deep. You cause a whirlpool to form in the center of the area. The whirlpool forms a vortex that is 5 feet wide at the base, up to 50 feet wide at the top, and 25 feet tall. Any creature or object in the water and within 25 feet of the vortex is pulled 10 feet toward it. A creature can swim away from the vortex by making a Strength (Athletics) check against your spell save DC.</div><div>When a creature enters the vortex for the first time on a turn or starts its turn there, it must make a Strength saving throw. On a failed save, the creature takes 2d8 bludgeoning damage and is caught in the vortex until the spell ends. On a successful save, the creature takes half damage, and isn’t caught in the vortex. A creature caught in the vortex can use its action to try to swim away from the vortex as described above, but has disadvantage on the Strength (Athletics) check to do so.&nbsp;</div><div>The first time each turn that an object enters the vortex, the object takes 2d8 bludgeoning damage; this damage occurs each round it remains in the vortex.</div>
1427	1426	171	Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius.<div><div>Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can’t benefit from being invisible.</div></div>
1456	1455	171	<div>Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.</div>
1256	1255	171	<div>You take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell. Moving to a place where you don’t have a clear path to the sky ends the spell early.&nbsp;</div><div>When you cast the spell, you change the current weather conditions, which are determined by the DM based on the climate and season. You can change precipitation, temperature, and wind. It takes 1d4 x 10 minutes for the new conditions to take effect. Once they do so, you can change the conditions again. When the spell ends, the weather gradually returns to normal.&nbsp;</div><div>When you change the weather conditions, find a current condition on the following tables and change its stage by one, up or down. W hen changing the wind, you can change its direction.</div>
1265	1264	171	You plant four pieces of non-magical ammunition— arrows or crossbow bolts—in the ground within range and lay magic upon them to protect an area. Until the spell ends, whenever a creature other than you com es within 30 feet of the ammunition for the first time on a turn or ends its turn there, one piece of ammunition flies up to strike it. The creature must succeed on a Dexterity saving throw or take 1d6 piercing damage. The piece of ammunition is then destroyed. The spell ends when no ammunition remains.<div>When you cast this spell, you can designate any creatures you choose, and the spell ignores them.<br></div>
1266	1264	122	<div>When you cast this spell using a spell slot of 3rd level or higher, the amount of ammunition that can be affected increases by two for each slot level above 2nd.</div>
1268	1267	171	You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell’s level. On a success, the creature’s spell fails and has no effect.&nbsp;
1269	1267	122	<div>When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used.</div>
1271	1270	171	<div>You create 45 pounds of food and 30 gallons of water on the ground or in containers within range, enough to sustain up to fifteen humanoids or five steeds for 24 hours. The food is bland but nourishing, and spoils if uneaten after 24 hours. The water is clean and doesn’t go bad.</div>
1273	1272	171	You either create or destroy water.
1274	1272	122	<div>When you cast this spell using a spell slot of 2nd level or higher, you create or destroy 10 additional gallons of water, or the size of the cube increases by 5 feet, for each slot level above 1st.</div>
1275	1272	944	You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot cube within range, extinguishing exposed flames in the area.&nbsp;
1277	1276	171	You can cast this spell only at night. Choose up to three corpses of Medium or Small humanoids within range. Each corpse becomes a ghoul under your control. (The DM has game statistics for these creatures.)<div>As a bonus action on each of your turns, you can mentally com m and any creature you animated with this spell if the creature is within 120 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same comm and to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.<br></div><div><div>The creature is under your control for 24 hours, after which it stops obeying any com m and you have given it. To maintain control of the creature for another&nbsp;24 hours, you must cast this spell on the creature before the current 24-hour period ends. This use of the spell reasserts your control over up to three creatures you have animated with this spell, rather than animating new ones.</div></div>
1278	1276	122	<div>When you cast this spell using a 7th-level spell slot, you can animate or reassert control over four ghouls. W hen you cast this spell using an 8th-level spell slot, you can animate or reassert control over five ghouls or two ghasts or wights. When you cast this spell using a 9th-level spell slot, you can animate or reassert control over six ghouls, three ghasts or wights, or two mummies.</div>
1280	1279	171	You pull wisps of shadow material from the Shadowfell to create a nonliving object of vegetable matter within range: soft goods, rope, wood, or something similar. You can also use this spell to create mineral objects such as stone, crystal, or metal. The object created must be no larger than a 5-foot cube, and the object must be of a form and material that you have seen before.&nbsp;<div>The duration depends on the object’s material. If the object is com posed of multiple materials, use the shortest duration.</div><div>Using any material created by this spell as another spell’s material component causes that spell to fail.&nbsp;<br></div>
1285	1284	171	One humanoid of your choice that you can see within range must succeed on a Wisdom saving throw or become charmed by you for the duration. While the target is charmed in this way, a twisted crown of jagged iron appears on its head, and a madness glows in its eyes.<div><div>The charmed target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose.&nbsp;The target can act normally on its turn if you choose no creature or if none are within its reach.</div></div><div><div>On your subsequent turns, you must use your action to maintain control over the target, or the spell ends. Also, the target can make a W isdom saving throw at the end of each of its turns. On a success, the spell ends.</div></div><div><br></div>
1287	1286	171	<div>Holy power radiates from you in an aura with a 30-foot radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, each non-hostile creature in the aura (including you) deals an extra 1d4 radiant damage when it hits with a weapon attack.</div>
1292	1291	171	You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius.&nbsp;<div><div>As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell’s range.</div></div>
1294	1293	171	<div>Magical darkness spreads from a point you choose within range to fill a 15-foot-radius sphere for the&nbsp;duration. The darkness spreads around corners. A creature with darkvision can’t see through this darkness, and non-magical light can’t illuminate it.&nbsp;</div><div>If the point you choose is on an object you are holding&nbsp;or one that isn’t being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, blocks the darkness.&nbsp;</div><div><div>If any of this spell’s area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled.</div></div>
1296	1295	171	<div>You touch a willing creature to grant it the ability to see in the dark. For the duration, that creature has darkvision out to a range of 60 feet.</div>
1298	1297	171	A 60-foot-radius sphere of light spreads out from a point you choose within range. The sphere is bright light and sheds dim light for an additional 60 feet.&nbsp;<div>If you chose a point on an object you are holding or one that isn’t being worn or carried, the light shines from the object and moves with it. Completely covering the affected object with an opaque object, such as a bowl or a helm, blocks the light.<br></div><div><div>If any of this spell’s area overlaps with an area of darkness created by a spell of 3rd level or lower, the spell that created the darkness is dispelled.</div></div>
1300	1299	171	You touch a creature and grant it a measure of protection from death.&nbsp;<div>The first time the target would drop to 0 hit points as a result of taking damage, the target instead drops to 1 hit point, and the spell ends.<br></div><div><div>If the spell is still in effect when the target is subjected to an effect that would kill it instantaneously without dealing damage, that effect is instead negated against the target, and the spell ends.</div></div>
1306	1305	171	<div>A beam of yellow light flashes from your pointing finger, then condenses to linger at a chosen point within range as a glowing bead for the duration. When the spell ends, either because your concentration is broken or because you decide to end it, the bead blossom s with a low roar into an explosion of flame that spreads around corners. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes fire damage equal to the total accumulated damage on a failed save, or half as much damage on a successful one.</div><div>The spell’s base damage is 12d6. If at the end of your turn the bead has not yet detonated, the damage increases by 1d6.</div><div>If the glowing bead is touched before the interval has expired, the creature touching it must make a Dexterity saving throw. On a failed save, the spell ends immediately, causing the bead to erupt in flame. On a successful save, the creature can throw the bead up to 40 feet. W hen it strikes a creature or a solid object, the spell ends, and the bead explodes.</div><div>The fire damages objects in the area and ignites flammable objects that aren’t being worn or carried.</div>
1307	1305	122	When you cast this spell using a spell slot of 8th level or higher, the base damage increases by 1d6 for each slot level above 7th.
1309	1308	171	You create a shadowy door on a flat solid surface that you can see within range. The door is large enough to allow Medium creatures to pass through unhindered. W hen opened, the door leads to a demiplane that appears to be an empty room 30 feet in each dimension, made of wood or stone. W hen the spell ends, the door disappears, and any creatures or objects inside the demiplane remain trapped there, as the door also disappears from the other side.<div><div>Each time you cast this spell, you can create a new demiplane, or have the shadowy door connect to a demiplane you created with a previous casting of this spell. Additionally, if you know the nature and contents of a demiplane created by a casting of this spell by another creature, you can have the shadowy door connect to its demiplane instead.</div></div>
1458	1457	171	You blast the mind of a creature that you can see within range, attempting to shatter its intellect and personality. The target takes 4d6 psychic damage and must make an Intelligence saving throw.<div>On a failed save, the creature’s Intelligence and Charisma scores become 1. The creature can’t cast spells, activate magic items, understand language, or&nbsp;communicate in any intelligible way. The creature can, however, identify its friends, follow them, and even protect them.<br></div><div>At the end of every 30 days, the creature can repeat its saving throw against this spell. If it succeeds on its saving throw, the spell ends.<br></div><div><div>The spell can also be ended by <i>greater restoration</i>, <i>heal</i>, or <i>wish</i>.</div></div>
1321	1320	171	For the duration, you can read the thoughts of certain creatures. When you cast the spell and as your action on each turn until the spell ends, you can focus your mind on any one creature that you can see within 30 feet of you. If the creature you choose has an Intelligence of 3 or lower or doesn’t speak any language, the creature is unaffected.&nbsp;<div>You initially learn the surface thoughts of the creature—what is most on its mind in that moment. As an action, you can either shift your attention to another creature’s thoughts or attempt to probe deeper into the same creature’s mind. If you probe deeper, the target must make a W isdom saving throw. If it fails, you gain insight into its reasoning (if any), its emotional state, and something that loom s large in its mind (such as something it worries over, loves, or hates). If it succeeds, the spell ends. Either way, the target knows that you are probing into its mind, and unless you shift your attention to another creature’s thoughts, the creature can use its action on its turn to make an Intelligence check contested by your Intelligence check; if it succeeds, the spell ends.&nbsp;<br></div><div>Questions verbally directed at the target creature naturally shape the course of its thoughts, so this spell is particularly effective as part of an interrogation.&nbsp;<br></div><div>You can also use this spell to detect the presence of thinking creatures you can’t see. W hen you cast the spell or as your action during the duration, you can search for thoughts within 30 feet of you. The spell can penetrate barriers, but 2 feet of rock, 2 inches of any metal other than lead, or a thin sheet of lead blocks you. You can’t detect a creature with an Intelligence of 3 or lower or one that doesn’t speak any language.&nbsp;<br></div><div><div>Once you detect the presence of a creature in this way, you can read its thoughts for the rest of the duration as described above, even if you can’t see it, but it must still be within range.</div></div>
1323	1322	171	You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as “200 feet straight downward” or “upward to the northwest at a 45-degree angle, 300 feet.”&nbsp;<div>You can bring along objects as long as their weight doesn’t exceed what you can carry. You can also bring one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell.&nbsp;<br></div><div><div>If you would arrive in a place already occupied by an object or a creature, you and any creature traveling with you each take 4d6 force damage, and the spell fails to teleport you.</div></div>
1325	1324	171	You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can’t change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.<div>The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.<br></div><div><div>To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC.</div></div>
1460	1459	171	You touch a willing creature and put it into a cataleptic state that is indistinguishable from death.<div><div>For the spell’s duration, or until you use an action to touch the target and dismiss the spell, the target appears dead to all outward inspection and to spells used to determine the target’s status. The target is blinded and incapacitated, and its speed drops to 0. The target has resistance to all damage except psychic damage. If the target is diseased or poisoned when you cast the spell, or becomes diseased or poisoned while under the spell’s effect, the disease and poison have no effect until the spell ends.</div></div>
1342	1341	171	A thin green ray springs from your pointing finger to a target that you can see within range. The target can be a creature, an object, or a creation of magical force, such as the wall created by <i>wall of force</i>.<div>A creature targeted by this spell must make a Dexterity saving throw. On a failed save, the target takes 10d6 + 40 force damage. If this damage reduces the target to 0 hit points, it is disintegrated.<br></div><div>A disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust. The creature can be restored to life only by means of a <i>true resurrection</i> or a <i>wish </i>spell.&nbsp;<br></div><div>This spell automatically disintegrates a Large or smaller non-magical object or a creation of magical force. If the target is a Huge or larger object or creation of force, this spell disintegrates a 10-foot-cube portion of it. A magic item is unaffected by this spell.<br></div>
1343	1341	122	<div>When you cast this spell using a spell slot of 7th level or higher, the damage increases by 3d6 for each slot level above 6th.</div>
1346	1345	171	Shimmering energy surrounds and protects you from fey, undead, and creatures originating from beyond the Material Plane. For the duration, celestials, elementals, fey, fiends, and undead have disadvantage on attack rolls against you.&nbsp;<div>You can end the spell early by using either of the following special functions.&nbsp;<br></div>
1347	1345	944	As your action, you touch a creature you can reach that is charmed, frightened, or possessed by a celestial, an elemental, a fey, a fiend, or an undead. The creature you touch is no longer charmed, frightened, or possessed by such creatures.&nbsp;
1348	1345	944	<div>As your action, make a melee spell attack against a celestial, an elemental, a fey, a fiend, or an undead you can reach. On a hit, you attempt to drive the creature back to its home plane. The creature must succeed on a Charisma saving throw or be sent back to its home plane (if it isn't there already). If they aren’t on their home plane, undead are sent to the Shadowfell, and fey are sent to the Feywild.</div>
1350	1349	171	Choose one creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell’s level. On a successful check, the spell ends.&nbsp;
1351	1349	122	<div>When you cast this spell using a spell slot of 4th level or higher, you automatically end the effects of a spell on the target if the spell’s level is equal to or less than the level of the spell slot you used.</div>
1353	1352	171	You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, if available, to move as far as its speed allows away from you. The creature doesn’t move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn’t have to move away. A deafened creature automatically succeeds on the save.&nbsp;
1354	1352	122	<div>When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.</div>
1358	1357	171	Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal an extra 1d4 radiant damage on a hit.
1360	1359	171	You utter a divine word, imbued with the power that shaped the world at the dawn of creation. Choose any number of creatures you can see within range. Each creature that can hear you must make a Charisma saving throw. On a failed save, a creature suffers an effect based on its current hit points:<div><div>• 50 hit points or fewer: deafened for 1 minute</div><div>• 40 hit points or fewer: deafened and blinded for 10 minutes</div><div>• 30 hit points or fewer: blinded, deafened, and stunned for 1 hour</div><div>• 20 hit points or fewer: killed instantly</div></div><div><div>Regardless of its current hit points, a celestial, an elemental, a fey, or a fiend that fails its save is forced back to its plane of origin (if it isn’t there already) and can’t return to your current plane for 24 hours by any means short of a wish spell.</div></div><div><br></div>
1362	1361	171	You attempt to beguile a beast that you can see within range. It must succeed on a Wisdom saving throw or be charm ed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.<div>While the beast is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as “Attack that creature,” “Run over there,” or “Fetch that object.” If the creature completes the order and doesn’t receive further direction from you, it defends and preserves itself to the best of its ability.<br></div><div>You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn’t do anything that you don’t allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.<br></div><div>Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.<br></div>
1363	1361	122	<div>When you cast this spell with a 5th-level spell slot, the duration is concentration, up to 10 minutes. W hen you use a 6th-level spell slot, the duration is concentration, up to 1 hour. W hen you use a spell slot of 7th level or higher, the duration is concentration, up to 8 hours.</div><div><br></div>
1365	1364	171	You attempt to beguile a creature that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.<div>While the creature is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as “Attack that creature,” “Run over there,” or “Fetch that object.” If the creature completes the order and doesn’t receive further direction from you, it defends and preserves itself to the best of its ability.<br></div><div><div>You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn’t do anything that you don’t allow it to do. During this time, you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.</div></div><div>Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.<br></div>
1366	1364	122	<div>When you cast this spell with a 9th-level spell slot, the duration is concentration, up to 8 hours.</div><div><br></div>
1368	1367	171	You attempt to beguile a humanoid that you can see within range. It must succeed on a Wisdom saving throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.<div>While the target is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as “Attack that creature,” “Run over there,” or “Fetch that object.” If the creature completes the order and doesn’t receive further direction from you, it defends and preserves itself to the best of its ability.<br></div><div>You can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn’t do anything that you don’t allow it to do. During this time you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.<br></div><div>Each time the target takes damage, it makes a new Wisdom saving throw against the spell. If the saving throw succeeds, the spell ends.&nbsp;<br></div>
1369	1367	122	<div>When you cast this spell using a 6th-level spell slot, the duration is concentration, up to 10 minutes. W hen you use a 7th-level spell slot, the duration is concentration, up to 1 hour. W hen you use a spell slot of 8th level or higher, the duration is concentration, up to 8 hours.</div>
1371	1370	171	You touch an object weighing 10 pounds or less whose longest dimension is 6 feet or less. The spell leaves an invisible mark on its surface and invisibly inscribes the name of the item on the sapphire you use as the material component. Each time you cast this spell, you must use a different sapphire.<div>At any time thereafter, you can use your action to speak the item’s name and crush the sapphire. The item instantly appears in your hand regardless of physical or planar distances, and the spell ends.<br></div><div>If another creature is holding or carrying the item, crushing the sapphire doesn’t transport the item to you, but instead you learn who the creature possessing the object is and roughly where that creature is located at that moment.<br></div><div><div><i>Dispel magic</i> or a similar effect successfully applied to the sapphire ends this spell’s effect.</div></div>
1401	1399	944	The target’s size doubles in all dimensions, and its weight is multiplied by eight. This growth increases its size by one category—from Medium to Large, for example. If there isn’t enough room for the target to double its size, the creature or object attains the maximum possible size in the space available. Until the spell ends, the target also has advantage on Strength checks and Strength saving throws. The target’s weapons also grow to match its new size. While these weapons are enlarged, the target’s attacks with them deal 1d4 extra damage.
1402	1399	944	<div>The target’s size is halved in all dimensions, and its weight is reduced to one-eighth of normal. This reduction decreases its size by one category—from Medium to Small, for example. Until the spell ends, the target also has disadvantage on Strength checks and Strength saving throws. The target’s weapons also shrink to match its new size. W hile these weapons are reduced, the target’s attacks with them deal 1d4 less damage (this can’t reduce the damage below 1).</div>
1374	1373	171	This spell shapes a creature’s dreams. Choose a creature known to you as the target of this spell. The target must be on the same plane of existence as you. Creatures that don’t sleep, such as elves, can’t be contacted by this spell. You, or a willing creature you touch, enters a trance state, acting as a messenger. While in the trance, the messenger is aware of his or her surroundings, but can’t take actions or move.<div>If the target is asleep, the messenger appears in the target’s dream s and can converse with the target as long as it remains asleep, through the duration of the spell. The messenger can also shape the environment of the dream, creating landscapes, objects, and other images. The messenger can emerge from the trance at any time, ending the effect of the spell early. The target recalls the dream perfectly upon waking. If the target is awake when you cast the spell, the messenger knows it, and can either end the trance (and the spell) or wait for the target to fall asleep, at which point the messenger appears in the target’s dreams.&nbsp;<br></div><div>You can make the messenger appear monstrous and terrifying to the target. If you do, the messenger can deliver a message of no more than ten words and then the target must make a Wisdom saving throw. On a failed save, echoes of the phantasmal monstrosity spawn a nightmare that lasts the duration of the target’s sleep and prevents the target from gaining any benefit from that rest. In addition, when the target wakes up, it takes 3d6 psychic damage.<br></div><div><div>If you have a body part, lock of hair, clipping from a nail, or similar portion of the target’s body, the target makes its saving throw with disadvantage.</div></div>
1376	1375	171	Whispering to the spirits of nature, you create one of the following effects within range:<div>• You create a tiny, harmless sensory effect that predicts what the weather will be at your location for the next 24 hours. The effect might manifest as a golden orb&nbsp;for clear skies, a cloud for rain, falling snowflakes for snow, and so on. This effect persists for 1 round.<div><div>• You instantly make a flower blossom, a seed pod open, or a leaf bud bloom.</div><div>• You create an instantaneous, harmless sensory effect, such as falling leaves, a puff of wind, the sound of a small animal, or the faint odor of skunk. The effect must fit in a 5-foot cube.</div><div>• You instantly light or snuff out a candle, a torch, or a small campfire.</div></div></div>
1378	1377	171	You create a seismic disturbance at a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot-radius circle centered on that point and shakes creatures and structures in contact with the ground in that area.<div>The ground in the area becomes difficult terrain. Each creature on the ground that is concentrating must make a Constitution saving throw. On a failed save, the creature’s concentration is broken.<br></div><div>When you cast this spell and at the end of each turn you spend concentrating on it, each creature on the ground in the area must make a Dexterity saving throw. On a failed save, the creature is knocked prone.<br></div><div>This spell can have additional effects depending on the terrain in the area, as determined by the DM.<br></div>
1379	1377	944	Fissures open throughout the spell’s area at the start of your next turn after you cast the spell. A total of 1d6 such fissures open in locations chosen by the DM. Each is 1d10 x 10 feet deep, 10 feet wide, and extends from one edge of the spell’s area to the opposite side. A creature standing on a spot where a fissure opens must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure’s edge as it opens.<div>A fissure that opens beneath a structure causes it to automatically collapse (see below).<br></div>
1380	1377	944	The tremor deals 50 bludgeoning damage to any structure in contact with the ground in the area when you cast the spell and at the start of each of your turns until the spell ends. If a structure drops to 0 hit points, it collapses and potentially damages nearby creatures. A creature within half the distance of a structure’s height must make a Dexterity saving throw. On a failed save, the creature takes 5d6 bludgeoning damage, is knocked prone, and is buried in the rubble, requiring a DC 20 Strength (Athletics) check as an action to escape. The DM can adjust the DC higher or lower, depending on the nature of the rubble. On a successful save, the creature takes half as much damage and doesn’t fall prone or become buried.
1386	1385	171	<div>A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage.</div><div>The spell creates more than one beam when you reach higher levels: two beam s at 5th level, three beam s at 11th level, and four beams at 17th level. You can direct the beam s at the same target or at different ones. Make a separate attack roll for each beam.</div>
1388	1387	171	A non-magical weapon you touch becomes a magic weapon. Choose one of the following damage types: acid, cold, fire, lightning, or thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits.
1389	1387	122	<div>W hen you cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage increases to 2d4. W hen you use a spell slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to 3d4.</div>
1391	1390	171	You touch a creature and bestow upon it a magical enhancement. Choose one of the following effects; the target gains that effect until the spell ends.
1392	1390	122	<div>When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.</div>
1393	1390	944	The target has advantage on Constitution checks. It also gains 2d6 temporary hit points, which are lost when the spell ends.&nbsp;
1394	1390	944	The target has advantage on Strength checks, and his or her carrying capacity doubles.
1395	1390	944	The target has advantage on Dexterity checks. It also doesn’t take damage from falling 20 feet or less if it isn’t incapacitated.
1396	1390	944	The target has advantage on Charisma checks.
1397	1390	944	The target has advantage on Intelligence checks.
1398	1390	944	The target has advantage on Wisdom checks.
1400	1399	171	You cause a creature or an object you can see within range to grow larger or smaller for the duration. Choose either a creature or an object that is neither worn nor carried. If the target is unwilling, it can make a Constitution saving throw. On a success, the spell has no effect.<div>If the target is a creature, everything it is wearing and carrying changes size with it. Any item dropped by an affected creature returns to normal size at once.<br></div>
1412	1411	171	You step into the border regions of the Ethereal Plane, in the area where it overlaps with your current plane. You remain in the Border Ethereal for the duration or until you use your action to dismiss the spell. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. You can see and hear the plane you originated from, but everything there looks gray, and you can’t see anything more than 60 feet away.<div>While on the Ethereal Plane, you can only affect and be affected by other creatures on that plane. Creatures that aren't on the Ethereal Plane can’t perceive you and can’t interact with you, unless a special ability or magic has given them the ability to do so.&nbsp;<br></div><div><div>You ignore all objects and effects that aren’t on the Ethereal Plane, allowing you to move through objects you perceive on the plane you originated from.</div></div><div>When the spell ends, you immediately return to the plane you originated from in the spot you currently occupy. If you occupy the same spot as a solid object or creature when this happens, you are immediately shunted to the nearest unoccupied space that you can occupy and take force damage equal to twice the number of feet you are moved.<br></div><div>This spell has no effect if you cast it while you are on the Ethereal Plane or a plane that doesn’t border it, such as one of the Outer Planes.<br></div>
1413	1411	122	<div>&nbsp;When you cast this spell using a spell slot of 8th level or higher, you can target up to three willing creatures (including you) for each slot level above 7th. The creatures must be within 10 feet of you when you cast the spell.</div>
1415	1414	171	Squirming, ebony tentacles fill a 20-foot square on ground that you can see within range. For the duration, these tentacles turn the ground in the area into difficult terrain.<div>W hen a creature enters the affected area for the first time on a turn or starts its turn there, the creature must succeed on a Dexterity saving throw or take 3d6 bludgeoning damage and be restrained by the tentacles until the spell ends. A creature that starts its turn in the area and is already restrained by the tentacles takes 3d6 bludgeoning damage.<br></div><div><div>A creature restrained by the tentacles can use its action to make a Strength or Dexterity check (its choice) against your spell save DC. On a success, it frees itself.</div></div>
1462	1461	171	You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of a beast.<div>Your familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can’t attack, but it can take other actions as normal.<br></div><div>When the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again.<br></div><div>While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar’s eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses.<br></div><div><div>As an action, you can temporarily dismiss your familiar. It disappears into a pocket dimension where it awaits your summons. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed,&nbsp;you can cause it to reappear in any unoccupied space within 30 feet of you.&nbsp;</div></div><div>You can’t have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature.<br></div><div><div>Finally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your attack modifier for the roll.</div></div>
1467	1466	171	This spell allows you to find the shortest, most direct physical route to a specific fixed location that you are familiar with on the same plane of existence. If you&nbsp;name a destination on another plane of existence, a destination that moves (such as a mobile fortress), or a destination that isn’t specific (such as “a green dragon’s lair”), the spell fails.<div><div>For the duration, as long as you are on the same plane of existence as the destination, you know how far it is and in what direction it lies. While you are traveling there, whenever you are presented with a choice of paths along the way, you automatically determine which path is the shortest and most direct route (but not necessarily the safest route) to the destination.</div></div>
1471	1470	171	You send negative energy coursing through a creature that you can see within range, causing it searing pain. The target must make a Constitution saving throw. It takes 7d8+30 necrotic damage on a failed save, or half as much damage on a successful one.<div><div>A humanoid killed by this spell rises at the start of your next turn as a zombie that is permanently under your command, following your verbal orders to the best of its ability.</div></div>
1505	1504	171	You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn't being worn or carried.<div><div>This spell’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).</div></div>
1509	1508	171	A storm made up of sheets of roaring flame appears in a location you choose within range. The area of the storm consists of up to ten 10-foot cubes, which you can arrange as you wish. Each cube must have at least one face adjacent to the face of another cube. Each creature in the area must make a Dexterity saving throw. It takes 7d10 fire damage on a failed save, or half as much damage on a successful one.<div><div>The fire damages objects in the area and ignites flammable objects that aren't being worn or carried. If you choose, plant life in the area is unaffected by this spell.</div></div>
1519	1518	171	A 5-foot-diameter sphere of fire appears in an unoccupied space of your choice within range and lasts for the duration. Any creature that ends its turn within 5 feet of the sphere must make a Dexterity saving throw. The creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one.<div>As a bonus action, you can move the sphere up to 30 feet. If you ram the sphere into a creature, that creature must make the saving throw against the sphere’s damage, and the sphere stops moving this turn.<br></div><div>When you move the sphere, you can direct it over barriers up to 5 feet tall and jump it across pits up to 10 feet wide. The sphere ignites flammable objects not being worn or carried, and it sheds bright light in a 20-foot radius and dim light for an additional 20 feet.<br></div><div><br></div>
1520	1518	122	<div>When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.</div><div><br></div>
1528	1526	122	<div>&nbsp;W hen you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st.</div>
1554	1553	171	<div>Until the spell ends, when you make a Charisma check, you can replace the number you roll with a 15. Additionally, no matter what you say, magic that would determine if you are telling the truth indicates that you are being truthful.</div>
1531	1530	171	You create a ward against magical travel that protects up to 40,000 square feet of floor space to a height of 30 feet above the floor. For the duration, creatures can’t teleport into the area or use portals, such as those created by the gate spell, to enter the area. The spell proofs the area against planar travel, and therefore prevents creatures from accessing the area by way of the Astral Plane, Ethereal Plane, Feywild, Shadowfell, or the <i>plane shift</i> spell.<div>In addition, the spell damages types of creatures that you choose when you cast it. Choose one or more of the following: celestials, elementals, fey, fiends, and undead. W hen a chosen creature enters the spell’s area for the first time on a turn or starts its turn there, the creature takes 5d10 radiant or necrotic damage (your choice when you cast this spell)<br></div><div>When you cast this spell, you can designate a password. A creature that speaks the password as it enters the area takes no damage from the spell.<br></div><div><div>The spell’s area can't overlap with the area of another <i>forbiddance</i> spell. If you cast <i>forbiddance</i> every day for 30 days in the same location, the spell lasts until it is dispelled, and the material components are consumed on the last casting.</div></div><div><br></div>
1534	1533	171	An immobile, invisible, cube-shaped prison com posed of magical force springs into existence around an area you choose within range. The prison can be a cage or a solid box, as you choose.<div>A prison in the shape of a cage can be up to 20 feet on a side and is made from 1/2-inch diameter bars spaced 1/2 inch apart.<br></div><div>A prison in the shape of a box can be up to 10 feet on a side, creating a solid barrier that prevents any matter from passing through it and blocking any spells cast into or out from the area.<br></div><div>When you cast the spell, any creature that is completely inside the cage's area is trapped. Creatures only partially within the area, or those too large to fit inside the area, are pushed away from the center of the area until they are completely outside the area.<br></div><div>A creature inside the cage can’t leave it by non-magical means. If the creature tries to use teleportation or interplanar travel to leave the cage, it must first make a Charisma saving throw. On a success, the creature can&nbsp;use that magic to exit the cage. On a failure, the creature can't exit the cage and wastes the use of the spell or effect. The cage also extends into the Ethereal Plane, blocking ethereal travel.<br></div><div><div>This spell can’t be dispelled by <i>dispel magic</i>.</div></div>
1536	1535	171	<div>You touch a willing creature and bestow a limited ability to see into the immediate future. For the duration, the target can’t be surprised and has advantage on attack rolls, ability checks, and saving throws. Additionally, other creatures have disadvantage on attack rolls against the target for the duration.</div><div>This spell immediately ends if you cast it again before its duration ends.</div>
1538	1537	171	You touch a willing creature. For the duration, the target’s movement is unaffected by difficult terrain, and spells and other magical effects can neither reduce the target’s speed nor cause the target to be paralyzed or restrained.<div><div>The target can also spend 5 feet of movement to automatically escape from non-magical restraints, such as manacles or a creature that has it grappled. Finally, being underwater imposes no penalties on the target's movement or attacks.</div></div>
1540	1539	171	<div>For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn’t hostile toward you. W hen the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM’s discretion), depending on the nature of your interaction with it.</div>
1542	1541	171	You transform a willing creature you touch, along with everything it’s wearing and carrying, into a misty cloud for the duration. The spell ends if the creature drops to 0 hit points. An incorporeal creature isn’t affected.<div>W hile in this form, the target’s only method of movement is a flying speed of 10 feet. The target can enter and occupy the space of another creature. The target has resistance to non-magical damage, and it has advantage on Strength, Dexterity, and Constitution saving throws. The target can pass through small holes, narrow openings, and even mere cracks, though it treats liquids as though they were solid surfaces. The target can't fall and remains hovering in the air even when stunned or otherwise incapacitated.<br></div><div><div>While in the form of a misty cloud, the target can’t talk or manipulate objects, and any objects it was carrying or holding can’t be dropped, used, or otherwise interacted with. The target can’t attack or cast spells.</div></div>
1544	1543	171	You conjure a portal linking an unoccupied space you can see within range to a precise location on a different plane of existence. The portal is a circular opening, which you can make 5 to 20 feet in diameter. You can orient the portal in any direction you choose. The portal lasts for the duration.<div>The portal has a front and a back on each plane where it appears. Travel through the portal is possible only by moving through its front. Anything that does so is instantly transported to the other plane, appearing in the unoccupied space nearest to the portal.<br></div><div>Deities and other planar rulers can prevent portals created by this spell from opening in their presence or anywhere within their domains.<br></div><div><div>W hen you cast this spell, you can speak the name of a specific creature (a pseudonym, title, or nickname doesn’t work). If that creature is on a plane other than the one you are on, the portal opens in the named creature’s immediate vicinity and draws the creature through it to the nearest unoccupied space on your side of the portal. You gain no special power over the creature, and it is free to act as the DM deems appropriate. It might leave, attack you, or help you.</div></div>
1550	1549	171	You touch a corpse or other remains. For the duration, the target is protected from decay and can’t become undead.<div><div>The spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell don’t count against the time limit of spells such as raise dead.</div></div>
1547	1546	171	You place a magical command on a creature that you can see within range, forcing it to carry out some&nbsp;service or refrain from some action or course of activity as you decide. If the creature can understand you, it must succeed on a Wisdom saving throw or become charmed by you for the duration. While the creature is charmed by you, it takes 5d10 psychic damage each time it acts in a manner directly counter to your instructions, but no more than once each day. A creature that can't understand you is unaffected by the spell.<div>You can issue any command you choose, short of an activity that would result in certain death. Should you issue a suicidal command, the spell ends.<br></div><div>You can end the spell early by using an action to dismiss it. A remove curse, greater restoration, or wish spell also ends it.<br></div>
1548	1546	122	<div>When you cast this spell using a spell slot of 7th or 8th level, the duration is 1 year. W hen you cast this spell using a spell slot of 9th level, the spell lasts until it is ended by one of the spells mentioned above.</div><div><br></div>
1552	1551	171	You transform up to ten centipedes, three spiders, five wasps, or one scorpion within range into giant versions of their natural forms for the duration. A centipede becomes a giant centipede, a spider becomes a giant spider, a wasp becomes a giant wasp, and a scorpion becomes a giant scorpion.<div>Each creature obeys your verbal commands, and in combat, they act on your turn each round. The DM has the statistics for these creatures and resolves their actions and movement.<br></div><div>A creature remains in its giant size for the duration, until it drops to 0 hit points, or until you use an action to dismiss the effect on it.<br></div><div><div>The DM might allow you to choose different targets. For example, if you transform a bee, its giant version might have the same statistics as a giant wasp.</div></div>
1556	1555	171	An immobile, faintly shimmering barrier springs into existence in a 10-foot radius around you and remains for the duration.<div>Any spell of 5th level or lower cast from outside the barrier can't affect creatures or objects within it, even if the spell is cast using a higher level spell slot. Such a spell can target creatures and objects within the barrier, but the spell has no effect on them. Similarly, the area within the barrier is excluded from the areas affected by such spells.<br></div>
1557	1555	122	<div>When you cast this spell using a spell slot of 7th level or higher, the barrier blocks spells of one level higher for each slot level above 6th.</div>
1560	1559	171	When you cast this spell, you inscribe a glyph that harms other creatures, either upon a surface (such as a table or a section of floor or wall) or within an object that can be closed (such as a book, a scroll, or a treasure chest) to conceal the glyph. If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.<div>The glyph is nearly invisible and requires a successful Intelligence (Investigation) check against your spell save DC to be found.<br></div><div>You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or standing on the glyph, removing another object covering the glyph, approaching within a certain distance of the glyph, or manipulating the object on which the glyph is inscribed. For glyphs inscribed within an object, the most comm on&nbsp;triggers include opening that object, approaching within a certain distance of the object, or seeing or reading the glyph. Once a glyph is triggered, this spell ends.<br></div><div>You can further refine the trigger so the spell activates only under certain circumstances or according to physical characteristics (such as height or weight), creature kind (for example, the ward could be set to affect aberrations or drow), or alignment. You can also set conditions for creatures that don’t trigger the glyph, such as those who say a certain password.<br></div><div>When you inscribe the glyph, choose <i>explosive runes</i> or a <i>spell glyph</i>.<br></div>
1561	1559	122	<div>When you cast this spell using a spell slot of 4th level or higher, the damage of an explosive runes glyph increases by 1d8 for each slot level above 3rd. If you create a spell glyph, you can store any spell of up to the same level as the slot you use for the glyph of warding.</div>
1562	1559	944	When triggered, the glyph erupts with magical energy in a 20-foot-radius sphere centered on the glyph. The sphere spreads around corners. Each creature in the area must make a Dexterity saving throw. A creature takes 5d8 acid, cold, fire, lightning, or thunder damage on a failed saving throw (your choice when you create the glyph), or half as much damage on a successful one.
1563	1559	944	You can store a prepared spell of 3rd level or lower in the glyph by casting it as part of creating the glyph. The spell must target a single creature or an area. The spell being stored has no immediate effect when cast in this way. When the glyph is triggered, the stored spell is cast. If the spell has a target, it targets the creature that triggered the glyph. If the spell affects an area, the area is centered on that creature. If the spell summ ons hostile creatures or creates harmful objects or traps, they appear as close as possible to the intruder and attack it. If the spell requires concentration, it lasts until the end of its full duration.
1565	1564	171	Up to ten berries appear in your hand and are infused with magic for the duration. A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for one day.<div><div>The berries lose their potency if they have not been consumed within 24 hours of the casting of this spell.</div></div>
1567	1566	171	You conjure a vine that sprouts from the ground in an unoccupied space of your choice that you can see within range. When you cast this spell, you can direct the vine to lash out at a creature within 30 feet of it that you can see. That creature must succeed on a Dexterity saving throw or be pulled 20 feet directly toward the vine.<div><div>Until the spell ends, you can direct the vine to lash out at the same creature or another one as a bonus action on each of your turns.</div></div>
1569	1568	171	Slick grease covers the ground in a 10-foot square centered on a point within range and turns it into difficult terrain for the duration.<div><div>When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall prone.</div></div>
1571	1570	171	<div>You or a creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target’s person.</div>
1573	1572	171	<div>You imbue a creature you touch with positive energy to undo a debilitating effect. You can reduce the target’s exhaustion level by one, or end one of the following effects on the target:</div><div><div>• One effect that charmed or petrified the target</div><div>• One curse, including the target’s attunement to a cursed magic item</div><div>• Any reduction to one of the target’s ability scores</div><div>• One effect reducing the target’s hit point maximum</div></div><div><br></div>
1579	1577	944	Fog fills all the warded corridors, making them heavily obscured. In addition, at each intersection or branching passage offering a choice of direction, there is a 50 percent chance that a creature other than you will believe it is go.
1580	1577	944	All doors in the warded area are magically locked, as if sealed by an arcane lock spell. In addition, you can cover up to ten doors with an illusion (equivalent to the illusory object function of the minor illusion spell) to make them appear as plain sections of wall.
1581	1577	944	Webs fill all stairs in the warded area from top to bottom, as the web spell. These strands regrow in 10 minutes if they are burned or torn away while guards and wards lasts.
1582	1577	944	<div>You can place your choice of one of the following magical effects within the warded area of the stronghold.</div><div>•&nbsp;Place dancing lights in four corridors. You can designate a simple program that the lights repeat as long as guards and wards lasts.</div><div>• Place magic mouth in two locations.</div><div>• Place stinking cloud in two locations. The vapors appear in the places you designate; they return within 10 minutes if dispersed by wind while guards and wards lasts.</div><div>• Place a constant gust of wind in one corridor or room.<br></div><div><div>• Place a suggestion in one location. You select an area of up to 5 feet square, and any creature that enters or passes through the area receives the suggestion mentally.</div></div><div>The whole warded area radiates magic. A dispel magic cast on a specific effect, if successful, removes only that effect.<br></div><div><div>You can create a permanently guarded and warded structure by casting this spell there every day for one year.</div></div>
1578	1577	171	You create a ward that protects up to 2,500 square feet of floor space (an area 50 feet square, or one hundred 5-foot squares or twenty-five 10-foot squares). The warded area can be up to 20 feet tall, and shaped as you desire. You can ward several stories of a stronghold by dividing the area among them, as long as you can walk into each contiguous area while you are casting the spell.<div>When you cast this spell, you can specify individuals that are unaffected by any or all of the effects that you choose. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects.<br></div><div>Guards and wards creates the following effects within the warded area.<br></div>
1584	1583	171	<div>You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.</div>
1586	1585	171	A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then.
1587	1585	122	<div>When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.</div>
1592	1591	171	A line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the spell’s duration. Each creature that starts its turn in the line must succeed on a Strength saving throw or be pushed 15 feet away from you in a direction following the line.<div>Any creature in the line must spend 2 feet of movement for every 1 foot it moves when moving closer to you.<br></div><div>The gust disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them.<br></div><div>As a bonus action on each of your turns before the spell ends, you can change the direction in which the line blasts from you.<br></div>
1598	1597	171	You touch a point and infuse an area around it with holy (or unholy) power. The area can have a radius up to 60 feet, and the spell fails if the radius includes an area already under the effect a <i>hallow </i>spell. The affected area is subject to the following effects.<div>First, celestials, elementals, fey, fiends, and undead can’t enter the area, nor can such creatures charm, frighten, or possess creatures within it. Any creature charmed, frightened, or possessed by such a creature is no longer charmed, frightened, or possessed upon entering the area. You can exclude one or more of those types of creatures from this effect.<br></div><div>Second, you can bind an extra effect to the area. Choose the effect from the following list, or choose an effect offered by the DM. Som e of these effects apply to creatures in the area; you can designate whether the effect applies to all creatures, creatures that follow a specific deity or leader, or creatures of a specific sort, such as ores or trolls. When a creature that would be affected enters the spell’s area for the first time on a turn or starts its turn there, it can make a Charisma saving throw. On a success, the creature ignores the extra effect until it leaves the area.<br></div>
1599	1597	944	Affected creatures can’t be frightened while in the area.
1600	1597	944	Darkness fills the area. Normal light, as well as magical light created by spells of a lower level than the slot you used to cast this spell, can’t illuminate the area.&nbsp;
1601	1597	944	Bright light fills the area. Magical darkness created by spells of a lower level than the slot you used to cast this spell can’t extinguish the light.
1602	1597	944	<div>Affected creatures in the area have resistance to one damage type of your choice, except for bludgeoning, piercing, or slashing.</div>
1603	1597	944	Affected creatures in the area have vulnerability to one damage type of your choice, except for bludgeoning, piercing, or slashing.
1604	1597	944	Dead bodies interred in the area can’t be turned into undead.
1605	1597	944	Affected creatures can’t move or travel using teleportation or by extradimensional or interplanar means.
1606	1597	944	Affected creatures are frightened while in the area.
1607	1597	944	No sound can emanate from within the area, and no sound can reach into it.
1608	1597	944	<div>Affected creatures can communicate with any other creature in the area, even if they don’t share a comm on language.</div>
1610	1609	171	You make natural terrain in a 150-foot cube in range look, sound, and smell like some other sort of natural terrain. Thus, open fields or a road can be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road. Manufactured structures, equipment, and creatures within the area aren’t changed in appearance.<div><div>The tactile characteristics of the terrain are unchanged, so creatures entering the area are likely to see through the illusion. If the difference isn’t obvious by touch, a creature carefully examining the illusion can attempt an Intelligence (Investigation) check against your spell save DC to disbelieve it. A creature who discerns the illusion for what it is, sees it as a vague image superimposed on the terrain.</div></div>
1612	1611	171	You unleash a virulent disease on a creature that you can see within range. The target must make a Constitution saving throw. On a failed save, it takes 14d6 necrotic damage, or half as much damage on a successful save. The damage can’t reduce the target’s hit points below 1. If the target fails the saving throw, its hit point maximum is reduced for 1 hour by an amount equal to the necrotic damage it took. Any effect that removes a disease allows a creature’s hit point maximum to return to normal before that time passes.
1619	1618	171	Choose a willing creature that you can see within range. Until the spell ends, the target’s speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action.<div><div>When the spell ends, the target can’t move or take actions until after its next turn, as a wave of lethargy sweeps over it.</div></div>
1627	1626	171	<div>Choose a manufactured metal object, such as a metal weapon or a suit of heavy or mediummetal armor, that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 2d8 fire damage when you cast the spell. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this damage again.</div><div>If a creature is holding or wearing the object and takes the damage from it, the creature must succeed on a Constitution saving throw or drop the object if it can. If it doesn’t drop the object, it has disadvantage on attack rolls and ability checks until the start of your next turn.<br></div>
1628	1626	122	<div>When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.</div>
1630	1629	171	You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 2d10 fire damage on a failed save, or half as much damage on a successful one.
1631	1629	122	<div>When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.</div>
1697	1695	122	<div>If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st (to a maximum of 6d10).</div>
1730	1729	171	A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target’s person. The spell ends for a target that attacks or casts a spell.
1731	1729	122	<div>When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.</div>
1789	1788	171	<div>A flood of healing energy flows from you into injured creatures around you. You restore up to 700 hit points, divided as you choose among any number of creatures that you can see within range. Creatures healed by this spell are also cured of all diseases and any effect making them blinded or deafened. This spell has no effect on undead or constructs.</div>
1633	1632	171	You bring forth a great feast, including magnificent food and drink. The feast takes 1 hour to consum e and disappears at the end of that time, and the beneficial effects don’t set in until this hour is over. Up to twelve other creatures can partake of the feast.<div><div>A creature that partakes of the feast gains several benefits. The creature is cured of all diseases and poison, becomes immune to poison and being frightened, and makes all Wisdom saving throws with advantage. Its hit point maximum also increases by 2d10, and it gains the same number of hit points. These benefits last for 24 hours.</div></div>
1638	1637	171	You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability.<div>If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature.<br></div><div>A <i>remove curse</i> cast on the target ends this spell early.<br></div>
1639	1637	122	<div>When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. W hen you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours.</div><div><br></div>
1641	1640	171	Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. This spell has no effect on undead. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.
1642	1640	122	<div>When you cast this spell using a spell slot of 6th level or higher, you can target one additional creature for each slot level above 5th. The creatures must be within 30 feet of each other when you target them.</div>
1644	1643	171	Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.
1645	1643	122	<div>When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them.</div><div><br></div>
1647	1646	171	<div>Divine light washes out from you and coalesces in a soft radiance in a 30-foot radius around you. Creatures of your choice in that radius when you cast this spell shed dim light in a 5-foot radius and have advantage on all saving throws, and other creatures have disadvantage on attack rolls against them until the spell ends. In addition, when a fiend or an undead hits an affected creature with a melee attack, the aura flashes with brilliant light. The attacker must succeed on a Constitution saving throw or be blinded until the spell ends.</div>
1651	1650	171	You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it. If the target drops to 0 hit points before this spell ends, you can use a bonus action&nbsp;
1652	1650	122	When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours.
1654	1653	171	You create a twisting pattern of colors that weaves through the air inside a 30-foot cube within range. The pattern appears for a moment and vanishes. Each creature in the area who sees the pattern must make a Wisdom saving throw. On a failed save, the creature becomes charmed for the duration. While charmed by this spell, the creature is incapacitated and has a speed of 0.<div><div>The spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor.</div></div>
1658	1657	171	A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.&nbsp;
1659	1657	122	<div>When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.</div>
1665	1664	171	Choose a creature that you can see within range. A surge of positive energy washes through the creature, causing it to regain 70 hit points. This spell also ends blindness, deafness, and any diseases affecting the target. This spell has no effect on constructs or undead.
1666	1664	122	<div>When you cast this spell using a spell slot of 7th level or higher, the amount of healing increases by 10 for each slot level above 6th.</div><div><br></div>
1670	1669	171	A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.
1671	1669	122	<div>When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st.</div>
1691	1690	171	A vertical column of divine fire roars down from the heavens in a location you specify. Each creature in a 10-foot-radius, 40-foot-high cylinder centered on a point within range must make a Dexterity saving throw. A creature takes 4d6 fire damage and 4d6 radiant damage on a failed save, or half as much damage on a successful one.
1692	1690	122	<div>When you cast this spell using a spell slot of 6th level or higher, the fire damage or the radiant damage (your choice) increases by 1d6 for each slot level above 5th.</div>
1694	1693	171	A Large spectral guardian appears and hovers for the duration in an unoccupied space of your choice that you&nbsp;can see within range. The guardian occupies that space and is indistinct except for a gleaming sword and shield emblazoned with the symbol of your deity.<div><div>Any creature hostile to you that moves to a space within 10 feet of the guardian for the first time on a turn must succeed on a Dexterity saving throw. The creature takes 20 radiant damage on a failed save, or half as much damage on a successful one. The guardian vanishes when it has dealt a total of 60 damage.</div></div>
1696	1695	171	The next time you hit a creature with a ranged weapon attack before the spell ends, this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition. In addition to the normal effect of the attack, the target of the attack and each creature within 5 feet of it must make a Dexterity saving throw. A creature takes 1d10 piercing damage on a failed save, or half as much damage on a successful one.
1707	1706	171	A hail of rock-hard ice pounds to the ground in a 20-foot-radius, 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a Dexterity saving throw. A creature takes 2d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much damage on a successful one.<div>Hailstones turn the storm's area of effect into difficult terrain until the end of your next turn.<br></div>
1708	1706	122	<div>When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by 1d8 for each slot level above 4th.</div>
1710	1709	171	You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it.<div><div>If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.</div></div>
1712	1711	171	You write on parchment, paper, or some other suitable writing material and imbue it with a potent illusion that lasts for the duration.<div>To you and any creatures you designate when you cast the spell, the writing appears normal, written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, you can cause the writing to appear to be an entirely different message, written in a different hand and language, though the language must be one you know.<br></div><div><div>Should the spell be dispelled, the original script and the illusion both disappear.&nbsp;</div><div>A creature with truesight can read the hidden message.</div></div>
1714	1713	171	You create a magical restraint to hold a creature that you can see within range. The target must succeed on a Wisdom saving throw or be bound by the spell; if it succeeds, it is immune to this spell if you cast it again. While affected by this spell, the creature doesn't need to breathe, eat, or drink, and it doesn’t age. Divination spells can’t locate or perceive the target.<div><div>When you cast the spell, you choose one of the following forms of imprisonment.<br></div></div>
1715	1713	944	The target is entombed far beneath the earth in a sphere of magical force that is just large enough to contain the target. Nothing can pass through the sphere, nor can any creature teleport or use planar travel to get into or out of it.<div>The special component for this version of the spell is a small mithral orb.&nbsp;<br></div>
1716	1713	944	Heavy chains, firmly rooted in the ground, hold the target in place. The target is restrained until the spell ends, and it can’t move or be moved by any means until then.<div>The special component for this version of the spell is a fine chain of precious metal.&nbsp;</div>
1717	1713	944	The spell transports the target into a tiny demiplane that is warded against teleportation and planar travel. The demiplane can be a labyrinth, a cage, a tower, or any similar confined structure or area of your choice.<div>The special component for this version of the spell is a miniature representation of the prison made from jade.&nbsp;</div>
1718	1713	944	The target shrinks to a height of 1 inch and is imprisoned inside a gemstone or similar&nbsp;object. Light can pass through the gemstone normally (allowing the target to see out and other creatures to see in), but nothing else can pass through, even by means of teleportation or planar travel. The gemstone can’t be cut or broken while the spell remains in effect.<div>The special component for this version of the spell is a large, transparent gemstone, such as a corundum, diamond, or ruby.</div>
1719	1713	944	The target falls asleep and can’t be awoken. The special component for this version of the spell consists of rare soporific herbs.
1720	1713	944	During the casting of the spell, in any of its versions, you can specify a condition that will cause the spell to end and release the target. The condition can be as specific or as elaborate as you choose, but the DM must agree that the condition is reasonable and has a likelihood of coming to pass. The conditions can be based on a creature’s name, identity, or deity but otherwise must be based on observable actions or qualities and not based on intangibles such as level, class, or hit points.<div><br></div><div><div>A&nbsp;<i>dispel magic</i>&nbsp;spell can end the spell only if it is cast as a 9th-level spell, targeting either the prison or the special component used to create it.</div><div>You can use a particular special component to create only one prison at a time. If you cast the spell again using the same component, the target of the first casting is immediately freed from its binding.</div></div>
1722	1721	171	A swirling cloud of sm oke shot through with white-hot embers appears in a 20-foot-radius sphere centered on a point within range. The cloud spreads around corners and is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.<div>When the cloud appears, each creature in it must make a Dexterity saving throw. A creature takes 10d8 fire damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell’s area for the first time on a turn or ends its turn there.<br></div><div><div>The cloud moves 10 feet directly away from you in a direction that you choose at the start of each of your turns.</div></div>
1727	1726	171	Swarming, biting locusts fill a 20-foot-radius sphere centered on a point you choose within range. The sphere spreads around corners. The sphere remains for the duration, and its area is lightly obscured. The sphere’s area is difficult terrain.<div>When the area appears, each creature in it must make a Constitution saving throw. A creature takes 4d10 piercing damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell’s area for the first time on a turn or ends its turn there.<br></div><div><br></div>
1728	1726	122	<div>When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d10 for each slot level above 5th.</div>
1734	1733	171	<div>You touch a creature. The creature’s jump distance is tripled until the spell ends.</div>
1736	1735	171	Choose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access.<div><div>A target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or&nbsp;unbarred. If the object has multiple locks, only one of them is unlocked.</div></div><div>If you choose a target that is held shut with arcane lock, that spell is suppressed for 10 minutes, during which time the target can be opened and shut normally.<br></div><div><div>When you cast the spell, a loud knock, audible from as far away as 300 feet, emanates from the target object.</div></div>
1738	1737	171	Name or describe a person, place, or object. The spell brings to your mind a brief summary of the significant lore about the thing you named. The lore might consist of current tales, forgotten stories, or even secret lore that has never been widely known. If the thing you named isn’t of legendary importance, you gain no information. The more information you already have about the thing, the more precise and detailed the information you receive is.<div><div>The information you learn is accurate but might be couched in figurative language. For example, if you have a mysterious magic axe on hand, the spell might yield this information: “Woe to the evildoer whose hand touches the axe, for even the haft slices the hand of the evil ones. Only a true Child of Stone, lover and beloved of Moradin, may awaken the true powers of the axe, and only with the sacred word Rudnogg on the lips.”</div></div>
1740	1739	171	You hide a chest, and all its contents, on the Ethereal Plane. You must touch the chest and the miniature replica that serves as a material component for the spell. The chest can contain up to 12 cubic feet of nonliving material (3 feet by 2 feet by 2 feet).<div>While the chest remains on the Ethereal Plane, you can use an action and touch the replica to recall the chest. It appears in an unoccupied space on the ground within 5 feet of you. You can send the chest back to the Ethereal Plane by using an action and touching both the chest and the replica.<br></div><div>After 60 days, there is a cumulative 5 percent chance per day that the spell's effect ends. This effect ends if you cast this spell again, if the smaller replica chest is destroyed, or if you choose to end the spell as an action. If the spell ends and the larger chest is on the Ethereal Plane, it is irretrievably lost.<br></div>
1743	1742	171	A 10-foot-radius immobile dome of force springs into existence around and above you and remains stationary for the duration. The spell ends if you leave its area.<div>Nine creatures of Medium size or smaller can fit inside the dome with you. The spell fails if its area includes a larger creature or more than nine creatures. Creatures and objects within the dome when you cast this spell can move through it freely. All other creatures and objects are barred from passing through it. Spells and other magical effects can’t extend through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, regardless of the weather outside.<br></div><div><div>Until the spell ends, you can comm and the interior to become dimly lit or dark. The dome is opaque from the outside, of any color you choose, but it is transparent from the inside.</div></div>
1745	1744	171	<div>You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.</div>
1747	1746	171	One creature or object of your choice that you can see within range rises vertically, up to 20 feet, and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected.<div>The target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. You can change the target’s altitude by up to 20 feet in either direction on your turn. If you are the target, you can move up or down as part of your move. Otherwise, you can use your action to move the target, which must remain within the spell’s range.<br></div><div><div>When the spell ends, the target floats gently to the ground if it is still aloft.</div></div>
1749	1748	171	You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.<div><div>If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.</div></div>
1751	1750	171	The next time you make a ranged weapon attack during the spell’s duration, the weapon’s ammunition, or the weapon itself if it’s a thrown weapon, transforms into a bolt of lightning. Make the attack roll as normal. The target takes 4d8 lightning damage on a hit, or half as much damage on a miss, instead of the weapon’s normal damage.<div>Whether you hit or miss, each creature within 10 feet of the target must make a Dexterity saving throw. Each of these creatures takes 2d8 lightning damage on a failed save, or half as much damage on a successful one.<br></div><div>The piece of ammunition or weapon then returns to its normal form.<br></div>
1752	1750	122	<div>When you cast this spell using a spell slot of 4th level or higher, the damage for both effects of the spell increases by 1d8 for each slot level above 3rd.</div>
1755	1754	171	A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one.<div>The lightning ignites flammable objects in the area that aren’t being worn or carried.<br></div>
1756	1754	122	When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.
1758	1757	171	<div>Describe or name a specific kind of beast or plant. Concentrating on the voice of nature in your surroundings, you learn the direction and distance to the closest creature or plant of that kind within 5 miles, if any are present.</div>
1760	1759	171	Describe or name a creature that is familiar to you. You sense the direction to the creature’s location, as long as that creature is within 1,000 feet of you. If the creature is moving, you know the direction of its movement.<div>The spell can locate a specific creature known to you, or the nearest creature of a specific kind (such as a human or a unicorn), so long as you have seen such a creature up close—within 30 feet—at least once. If the creature you described or named is in a different form, such as being under the effects of a <i>polymorph </i>spell, this spell doesn’t locate the creature.<br></div><div><div>This spell can’t locate a creature if running water at least 10 feet wide blocks a direct path between you and the creature.</div></div>
1762	1761	171	Describe or name an object that is familiar to you. You sense the direction to the object’s location, as long as that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement.<div>The spell can locate a specific object known to you, as long as you have seen it up close—within 30 feet—at least once. Alternatively, the spell can locate the nearest object of a particular kind, such as a certain kind of apparel, jewelry, furniture, tool, or weapon.<br></div><div><div>This spell can’t locate an object if any thickness of lead, even a thin sheet, blocks a direct path between you and the object.</div></div>
1793	1791	122	<div>When you cast this spell using a spell slot of 4th level or higher, the healing increases by 1d4 for each slot level above 3rd.</div>
1767	1766	171	A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.<div>You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.<br></div><div><div>The hand can’t attack, activate magic items, or carry more than 10 pounds.</div></div>
1769	1768	171	You create a 10-foot-radius, 20-foot-tall cylinder of magical energy centered on a point on the ground that you can see within range. Glowing runes appear wherever the cylinder intersects with the floor or other surface.<div><div>Choose one or more of the following types of creatures: celestials, elementals, fey, fiends, or undead. The circle affects a creature of the chosen type in the following ways:</div></div><div>• The creature can’t willingly enter the cylinder by non-magical means. If the creature tries to use teleportation or interplanar travel to do so, it must first succeed on a Charisma saving throw.</div><div>• The creature has disadvantage on attack rolls against targets within the cylinder.</div><div>• Targets within the cylinder can’t be charmed, frightened, or possessed by the creature.<br></div><div>When you cast this spell, you can elect to cause its magic to operate in the reverse direction, preventing a creature of the specified type from leaving the cylinder and protecting targets outside it.<br></div>
1770	1768	122	<div>When you cast this spell using a spell slot of 4th level or higher, the duration increases by 1 hour for each slot level above 3rd.</div>
1772	1771	171	Your body falls into a catatonic state as your soul leaves it and enters the container you used for the spell’s material component. While your soul inhabits the container, you are aware of your surroundings as if you were in the container’s space. You can’t move or use reactions. The only action you can take is to project your soul up to 100 feet out of the container, either returning to your living body (and ending the&nbsp;spell) or attempting to possess a humanoids body.<div>You can attempt to possess any humanoid within 100 feet of you that you can see (creatures warded by a <i>protection from evil and good</i> or <i>magic circle</i> spell can’t be possessed). The target must make a Charisma saving throw. On a failure, your soul moves into the target’s body, and the target’s soul becomes trapped in the container. On a success, the target resists your efforts to possess it, and you can’t attempt to possess it again for 24 hours.<br></div><div>Once you possess a creature’s body, you control it. Your game statistics are replaced by the statistics of the creature, though you retain your alignment and your Intelligence, Wisdom, and Charisma scores. You retain the benefit of your own class features. If the target has any class levels, you can’t use any of its class features.<br></div><div>Meanwhile, the possessed creature’s soul can perceive from the container using its own senses, but it can’t move or take actions at all.<br></div><div>While possessing a body, you can use your action to return from the host body to the container if it is within 100 feet of you, returning the host creature’s soul to its body. If the host body dies while you’re in it, the creature dies, and you must make a Charisma saving throw against your own spellcasting DC. On a success, you return to the container if it is within 100 feet of you. Otherwise, you die.<br></div><div>If the container is destroyed or the spell ends, your soul immediately returns to your body. If your body is more than 100 feet away from you or if your body is dead when you attempt to return to it, you die. If another creature’s soul is in the container when it is destroyed, the creature’s soul returns to its body if the body is alive and within 100 feet. Otherwise, that creature dies.<br></div><div>When the spell ends, the container is destroyed.<br></div>
1778	1777	171	You implant a message within an object in range, a message that is uttered when a trigger condition is met. Choose an object that you can see and that isn’t being worn or carried by another creature. Then speak the message, which must be 25 words or less, though it can be delivered over as long as 10 minutes. Finally, determine the circumstance that will trigger the spell to deliver your message.<div>When that circumstance occurs, a magical mouth appears on the object and recites the message in your voice and at the same volume you spoke. If the object you chose has a mouth or something that looks like a mouth (for example, the mouth of a statue), the magical mouth appears there so that the words appear to com e from the object’s mouth. When you cast this spell, you can have the spell end after it delivers its message, or it can remain and repeat its message whenever the trigger occurs.<br></div><div><div>The triggering circumstance can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the object. For example, you could instruct the mouth to speak when any creature moves within 30 feet of the object or when a silver bell rings within 30 feet of it.</div></div>
1780	1779	171	You touch a non-magical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack rolls and damage rolls.
1781	1779	122	When you cast this spell using a spell slot of 4th level or higher, the bonus increases to +2. When you use a spell slot of 6th level or higher, the bonus increases to +3.
1783	1782	171	You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot cube. The image appears at a spot that you can see within range and lasts for the duration. It seem s completely real, including sounds, smells, and temperature appropriate to the thing depicted. You can’t create sufficient heat or cold to cause damage, a sound loud enough to deal thunder damage or deafen a creature, or a smell that might sicken a creature (like a troglodyte’s stench).<div>As long as you are within range of the illusion, you can use your action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illusion to make different sounds at different times, even making it carry on a conversation, for example.<br></div><div>Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature.<br></div>
1784	1782	122	<div>When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled, without requiring your concentration.</div>
1786	1785	171	A wave of healing energy washes out from a point of your choice within range. Choose up to six creatures in a 30-foot-radius sphere centered on that point. Each target regains hit points equal to 3d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.
1787	1785	122	<div>When you cast this spell using a spell slot of 6th level or higher, the healing increases by 1d8 for each slot level above 5th.</div>
1792	1791	171	As you call out words of restoration, up to six creatures of your choice that you can see within range regain hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.
1798	1797	171	You suggest a course of activity (limited to a sentence or two) and magically influence up to twelve creatures of your choice that you can see within range and that can hear and understand you. Creatures that can’t be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act automatically negates the effect of the spell.<div>Each target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.<br></div><div>You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a group of soldiers give all their money to the first beggar they meet. If the condition isn’t met before the spell ends, the activity isn’t performed.<br></div><div>If you or any of your companions damage a creature affected by this spell, the spell ends for that creature.<br></div>
1799	1797	122	<div>When you cast this spell using a 7th-level spell slot, the duration is 10 days. W hen you use an 8th-level spell slot, the duration is 30 days. W hen you use a 9th-level spell slot, the duration is a year and a day.</div>
1801	1800	171	You banish a creature that you can see within range into a labyrinthine demiplane. The target remains there for the duration or until it escapes the maze.<div>The target can use its action to attempt to escape. When it does so, it makes a DC 20 Intelligence check. If it succeeds, it escapes, and the spell ends (a minotaur or goristro demon automatically succeeds).<br></div><div><div>When the spell ends, the target reappears in the space it left or, if that space is occupied, in the nearest unoccupied space.</div></div>
1803	1802	171	You step into a stone object or surface large enough to fully contain your body, melding yourself and all the equipment you carry with the stone for the duration. Using your movement, you step into the stone at a point you can touch. Nothing of your presence remains visible or otherwise detectable by non-magical senses.<div>While merged with the stone, you can’t see what occurs outside it, and any Wisdom (Perception) checks you make to hear sounds outside it are made with disadvantage. You remain aware of the passage of time and can cast spells on yourself while merged in the stone. You can use your movement to leave the stone where you entered it, which ends the spell. You otherwise can’t move.<br></div><div><div>Minor physical damage to the stone doesn’t harm you, but its partial destruction or a change in its shape (to the extent that you no longer fit within it) expels you and deals 6d6 bludgeoning damage to you. The stone’s complete destruction (or transmutation into a different substance) expels you and deals 50 bludgeoning damage to you. If expelled, you fall prone in an unoccupied space closest to where you first entered.</div></div>
1805	1804	171	A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.
1806	1804	122	<div>When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.</div>
1808	1807	171	This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it. leaving no trace of the former damage.<div><div>This spell can physically repair a magic item or construct, but the spell can’t restore magic to such an object.</div></div>
1810	1809	171	You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.<div><div>You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence. 1 foot of stone, 1 inch of comm on metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn’t have to follow a straight line and can travel freely around corners or through openings.</div></div>
1812	1811	171	Blazing orbs of fire plummet to the ground at four different points you can see within range. Each creature in a 40-foot-radius sphere centered on each point you choose must make a Dexterity saving throw. The sphere spreads around corners. A creature takes 20d6 fire damage and 20d6 bludgeoning damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one fiery burst is affected only once.<div><div>The spell damages objects in the area and ignites flammable objects that aren’t being worn or carried.</div></div>
1815	1814	171	Until the spell ends, one willing creature you touch is immune to psychic damage, any effect that would sense its emotions or read its thoughts, divination spells, and the charmed condition. The spell even foils wish spells and spells or effects of similar power used to affect the target’s mind or to gain information about the target.
1826	1825	171	Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see.
1817	1816	171	You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.<div>If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else’s voice, a lion’s roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.<br></div><div>If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot cube. The image can’t create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.<br></div><div><div>If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature.</div></div>
1820	1819	171	You make terrain in an area up to 1 mile square look, sound, smell, and even feel like some other sort of terrain. The terrain’s general shape remains the same, however. Open fields or a road could be made to resemble a swamp, hill, crevasse, or some other difficult or impassable terrain. A pond can be made to seem like a grassy meadow, a precipice like a gentle slope, or a rock-strewn gully like a wide and smooth road.<div>Similarly, you can alter the appearance of structures, or add them where none are present. The spell doesn’t disguise, conceal, or add creatures.<br></div><div>The illusion includes audible, visual, tactile, and olfactory elements, so it can turn clear ground into difficult terrain (or vice versa) or otherwise impede movement through the area. Any piece of the illusory terrain (such as a rock or stick) that is removed from the spell’s area disappears immediately.<br></div><div><div>Creatures with truesight can see through the illusion to the terrain’s true form; however, all other elements of the illusion remain, so while the creature is aware of the illusion’s presence, the creature can still physically interact with the illusion.</div></div>
1822	1821	171	Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting position so it’s impossible to track which image is real. You can use your action to dismiss the illusory duplicates.<div>Each time a creature targets you with an attack during the spell’s duration, roll a d20 to determine whether the attack instead targets one of your duplicates.<br></div><div>If you have three duplicates, you must roll a 6 or higher to change the attack’s target to a duplicate. With two duplicates, you must roll an 8 or higher. With one duplicate, you must roll an 11 or higher.<br></div><div>A duplicate’s AC equals 10 + your Dexterity modifier. If an attack hits a duplicate, the duplicate is destroyed. A duplicate can be destroyed only by an attack that hits it. It ignores all other damage and effects. The spell ends when all three duplicates are destroyed.<br></div><div><div>A creature is unaffected by this spell if it can’t see, if it relies on senses other than sight, such as blindsight, or if it can perceive illusions as false, as with truesight.</div></div>
1824	1823	171	You become invisible at the same time that an illusory double of you appears where you are standing. The double lasts for the duration, but the invisibility ends if you attack or cast a spell.<div>You can use your action to move your illusory double up to twice your speed and make it gesture, speak, and behave in whatever way you choose.<br></div><div><div>You can see through its eyes and hear through its ears as if you were located where it is. On each of your turns as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surroundings.</div></div>
1828	1827	171	You attempt to reshape another creature’s memories. One creature that you can see must make a Wisdom saving throw. If you are fighting the creature, it has advantage on the saving throw. On a failed save, the target becomes charmed by you for the duration. The charmed target is incapacitated and unaware of its surroundings, though it can still hear you. If it takes any damage or is targeted by another spell, this spell ends, and none of the target’s memories are modified.<div>While this charm lasts, you can affect the target’s memory of an event that it experienced within the last 24 hours and that lasted no more than 10 minutes. You can permanently eliminate all memory of the event, allow the target to recall the event with perfect clarity and exacting detail, change its memory of the details of the event, or create a memory of some other event.</div><div>You must speak to the target to describe how its m emories are affected, and it must be able to understand your language for the modified memories to take root. Its mind fills in any gaps in the details of your description. If the spell ends before you have finished describing the modified memories, the creature’s memory isn’t altered. Otherwise, the modified memories take hold when the spell ends.</div><div>A modified memory doesn’t necessarily affect how a creature behaves, particularly if the memory contradicts the creature’s natural inclinations, alignment, or beliefs. An illogical modified memory, such as implanting a memory of how much the creature enjoyed dousing itself in acid, is dismissed, perhaps as a bad dream. The DM might deem a modified memory too nonsensical to affect a creature in a significant manner.</div><div>A <i>remove curse</i> or<i> greater restoration</i> spell cast on the target restores the creature’s true memory.&nbsp;<br><div><br></div></div>
1829	1827	122	<div>If you cast this spell using a spell slot of 6th level or higher, you can alter the target’s memories of an event that took place up to 7 days ago (6th level), 30 days ago (7th level), 1 year ago (8th level), or any time in the creature’s past (9th level).</div>
1831	1830	171	A silvery beam of pale light shines down in a 5-foot- radius, 40-foot-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder.<div><div>When a creature enters the spell’s area for the first time on a turn or starts its turn there, it is engulfed in ghostly flames that cause searing pain, and it must make a Constitution saving throw. It takes 2d10 radiant&nbsp;damage on a failed save, or half as much damage on a successful one.</div></div><div>A shapechanger makes its saving throw with disadvantage. If it fails, it also instantly reverts to its original form and can’t assume a different form until it leaves the spell’s light.<br></div><div>On each of your turns after you cast this spell, you can use an action to move the beam 60 feet in any direction.<br></div>
1832	1830	122	<div>When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd.</div><div><br></div>
1834	1833	171	You conjure a phantom watchdog in an unoccupied space that you can see within range, where it remains for the duration, until you dismiss it as an action, or until you move more than 100 feet away from it.<div>The hound is invisible to all creatures except you and can't be harmed. When a Small or larger creature com es within 30 feet of it without first speaking the password that you specify when you cast this spell, the hound starts barking loudly. The hound sees invisible creatures and can see into the Ethereal Plane. It ignores illusions.<br></div><div><div>At the start of each of your turns, the hound attempts to bite one creature within 5 feet of it that is hostile to you. The hound’s attack bonus is equal to your spellcasting ability modifier + your proficiency bonus. On a hit, it deals 4d8 piercing damage.</div></div>
1836	1835	171	You conjure an extradimensional dwelling in range that lasts for the duration. You choose where its one entrance is located. The entrance shimmers faintly and is 5 feet wide and 10 feet tall. You and any creature you designate when you cast the spell can enter the extradimensional dwelling as long as the portal remains open. You can open or close the portal if you are within 30 feet of it. While closed, the portal is invisible.<div>Beyond the portal is a magnificent foyer with numerous chambers beyond. The atmosphere is clean, fresh, and warm.You can create any floor plan you like, but the space can’t exceed 50 cubes, each cube being 10 feet on each side. The place is furnished and decorated as you choose. It contains sufficient food to serve a nine- course banquet for up to 100 people. A staff of 100 near-transparent servants attends all who enter. You&nbsp;decide the visual appearance of these servants and their attire. They are completely obedient to your orders. Each servant can perform any task a normal human servant could perform, but they can’t attack or take any action that would directly harm another creature. Thus the servants can fetch things, clean, mend, fold clothes, light fires, serve food, pour wine, and so on. The servants can go anywhere in the mansion but can’t leave it. Furnishings and other objects created by this spell dissipate into smoke if removed from the mansion. When the spell ends, any creatures inside the extradimensional space are expelled into the open spaces nearest to the entrance.</div>
1838	1837	171	You make an area within range magically secure. The area is a cube that can be as small as 5 feet to as large as 100 feet on each side. The spell lasts for the duration or until you use an action to dismiss it.<div><div>When you cast the spell, you decide what sort of security the spell provides, choosing any or all of the following properties:</div></div><div>• Sound can't pass through the barrier at the edge of the warded area.</div><div>• The barrier of the warded area appears dark and foggy, preventing vision (including darkvision) through it.</div><div>• Sensors created by divination spells can’t appear inside the protected area or pass through the barrier at its perimeter.</div><div>• Creatures in the area can’t be targeted by divination spells.</div><div>• Nothing can teleport into or out of the warded area.</div><div>• Planar travel is blocked within the warded area.<br></div><div>Casting this spell on the same spot every day for a year makes this effect permanent.<br></div>
1839	1837	122	<div>When you cast this spell using a spell slot of 5th level or higher, you can increase the size of the cube by 100 feet for each slot level beyond 4th. Thus you could protect a cube that can be up to 200 feet on one side by using a spell slot of 5th level.</div>
1842	1841	171	You create a sword-shaped plane of force that hovers within range. It lasts for the duration.<div><div>When the sword appears, you make a melee spell attack against a target of your choice within 5 feet of the sword. On a hit. the target takes 3d10 force damage.</div></div><div><div>Until the spell ends, you can use a bonus action on each of your turns to move the sword up to 20 feet to a spot you can see and repeat this attack against the same target or a different one.</div></div>
1845	1844	171	Choose an area of terrain no larger than 40 feet on a side within range. You can reshape dirt, sand, or clay in the area in any manner you choose for the duration. You can raise or lower the area’s elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can’t exceed half the area’s largest dimension. So, if you affect a 40-foot square, you can create a pillar up to 20 feet high, raise or lower the square’s elevation by up to 20 feet, dig a trench up to 20 feet deep, and so on. It takes 10 minutes for these changes to complete.<div>At the end of every 10 minutes you spend concentrating on the spell, you can choose a new area of terrain to affect.<br></div><div>Because the terrain’s transformation occurs slowly, creatures in the area can’t usually be trapped or injured by the ground’s movement.&nbsp;<br></div><div>This spell can’t manipulate natural stone or stone construction. Rocks and structures shift to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse.<br></div><div>Similarly, this spell doesn’t directly affect plant growth. The moved earth carries any plants along with it.<br></div>
1847	1846	171	<div>For the duration, you hide a target that you touch from divination magic. The target can be a willing creature or a place or an object no larger than 10 feet in any dimension. The target can’t be targeted by any divination magic or perceived through magical scrying sensors.</div>
1849	1848	171	You place an illusion on a creature or an object you touch so that divination spells reveal false information about it. The target can be a willing creature or an object that isn’t being carried or worn by another creature.<div>When you cast the spell, choose one or both of the following effects. The effect lasts for the duration. If you cast this spell on the same creature or object every day for 30 days, placing the same effect on it each time, the illusion lasts until it is dispelled.<br></div>
1850	1848	944	You change the way the target appears to spells and magical effects, such as detect magic, that detect magical auras. You can make a non-magical object appear magical, a magical object appear non-magical, or change the object’s magical aura so that it appears to belong to a specific school of magic that you choose. When you use this effect on an object, you can make the false magic apparent to any creature that handles the item.&nbsp;
1851	1848	944	<div>You change the way the target appears to spells and magical effects that detect creature types, such as a paladin’s Divine Sense or the trigger of a symbol spell. You choose a creature type and other spells and magical effects treat the target as if it were a creature of that type or of that alignment.</div>
1890	1889	171	You speak a word of power that can overwhelm the mind of one creature you can see within range, leaving it dumbfounded. If the target has 150 hit points or fewer, it is stunned. Otherwise, the spell has no effect.<div><div>The stunned target must make a Constitution saving throw at the end of each of its turns. On a successful save, this stunning effect ends.</div></div>
1853	1852	171	A frigid globe of cold energy streaks from your fingertips to a point of your choice within range, where it explodes in a 60-foot-radius sphere. Each creature within the area must make a Constitution saving throw. On a failed save, a creature takes 10d6 cold damage. On a successful save, it takes half as much damage.<div>If the globe strikes a body of water or a liquid that is principally water (not including water-based creatures), it freezes the liquid to a depth of 6 inches over an area 30 feet square. This ice lasts for 1 minute. Creatures that were swimming on the surface of frozen water are trapped in the ice. A trapped creature can use an action to make a Strength check against your spell save DC to break free.<br></div><div>You can refrain from firing the globe after completing the spell, if you wish. A small globe about the size of a sling stone, cool to the touch, appears in your hand. At any time, you or a creature you give the globe to can throw the globe (to a range of 40 feet) or hurl it with a sling (to the sling’s normal range). It shatters on impact, with the same effect as the normal casting of the spell. You can also set the globe down without shattering it. After 1 minute, if the globe hasn’t already shattered, it explodes.<br></div>
1854	1852	122	When you cast this spell using a spell slot of 7th level or higher, the damage increases by 1d6 for each slot level above 6th.
1857	1856	171	A sphere of shimmering force encloses a creature or object of Large size or smaller within range. An unwilling creature must make a Dexterity saving throw. On a failed save, the creature is enclosed for the duration.<div>Nothing—not physical objects, energy, or other spell effects—can pass through the barrier, in or out, though a creature in the sphere can breathe there. The sphere is immune to all damage, and a creature or object inside can’t be damaged by attacks or effects originating from outside, nor can a creature inside the sphere damage anything outside it.<br></div><div>The sphere is weightless and just large enough to contain the creature or object inside. An enclosed creature can use its action to push against the sphere’s walls and thus roll the sphere at up to half the creature’s speed. Similarly, the globe can be picked up and moved by other creatures.<br></div><div><div>A <i>disintegrate </i>spell targeting the globe destroys it without harming anything inside it.</div></div>
1859	1858	171	Choose one creature that you can see within range. The target begins a comic dance in place: shuffling, tapping its feet, and capering for the duration. Creatures that can’t be charmed are immune to this spell.<div><div>A dancing creature must use all its movement to dance without leaving its space and has disadvantage on Dexterity saving throws and attack rolls. While the target is affected by this spell, other creatures have advantage on attack rolls against it. As an action, a dancing creature makes a Wisdom saving throw to regain control of itself. On a successful save, the spell ends.</div></div>
1861	1860	171	<div>A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can’t be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage.</div>
1863	1862	171	A passage appears at a point of your choice that you can see on a wooden, plaster, or stone surface (such as a wall, a ceiling, or a floor) within range, and lasts for the duration. You choose the opening’s dimensions: up to 5 feet wide, 8 feet tall, and 20 feet deep. The passage creates no instability in a structure surrounding it.<div><div>When the opening disappears, any creatures or objects still in the passage created by the spell are safely ejected to an unoccupied space nearest to the surface on which you cast the spell.</div></div>
1865	1864	171	You craft an illusion that takes root in the mind of a creature that you can see within range. The target must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible phenomenon of your choice that is no larger than a 10-foot cube and that is perceivable only to the target for the duration. This spell has no effect on undead or constructs.<div>The phantasm includes sound, temperature, and other stimuli, also evident only to the creature.<br></div><div>The target can use its action to examine the phantasm with an Intelligence (Investigation) check against your spell save DC. If the check succeeds, the target realizes that the phantasm is an illusion, and the spell ends.<br></div><div>While a target is affected by the spell, the target treats the phantasm as if it were real. The target rationalizes any illogical outcomes from interacting with the phantasm. For example, a target attempting to walk across a phantasmal bridge that spans a chasm falls once it steps onto the bridge. If the target survives the fall, it still believes that the bridge exists and com es up with some other explanation for its fall—it was pushed, it slipped, or a strong wind might have knocked it off.<br></div><div>An affected target is so convinced of the phantasm’s reality that it can even take damage from the illusion. A phantasm created to appear as a creature can attack the target. Similarly, a phantasm created to appear as fire, a pool of acid, or lava can burn the target. Each round on your turn, the phantasm can deal 1d6 psychic damage to the target if it is in the phantasm’s area or within 5 feet of the phantasm, provided that the illusion is of a creature or hazard that could logically deal damage, such as by attacking. The target perceives the damage as a type appropriate to the illusion.<br></div>
1867	1866	171	You tap into the nightmares of a creature you can see within range and create an illusory manifestation of its deepest fears, visible only to that creature. The target must make a Wisdom saving throw. On a failed save, the target becomes frightened for the duration. At the start of each of the target’s turns before the spell ends, the target must succeed on a Wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends.
1868	1866	122	<div>When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th.</div>
1870	1869	171	A Large quasi-real, horse-like creature appears on the ground in an unoccupied space of your choice within range. You decide the creature’s appearance, but it is equipped with a saddle, bit, and bridle. Any of the equipment created by the spell vanishes in a puff of smoke if it is carried more than 10 feet away from the steed.<div><div>For the duration, you or a creature you choose can ride the steed. The creature uses the statistics for a riding horse, except it has a speed of 100 feet and can travel 10 miles in an hour, or 13 miles at a fast pace. When the spell ends, the steed gradually fades, giving the rider 1 minute to dismount. The spell ends if you use an action to dismiss it or if the steed takes any damage.</div></div>
1893	1891	122	<div>When you cast this spell using a spell slot of 3rd level or higher, the healing increases by 1d8 for each slot level above 2nd.</div>
1872	1871	171	You beseech an otherworldly entity for aid. The being must be known to you: a god, a primordial, a demon prince, or some other being of cosmic power. That entity sends a celestial, an elemental, or a fiend loyal to it to aid you, making the creature appear in an unoccupied space within range. If you know a specific creature’s name, you can speak that name when you cast this spell to request that creature, though you might get a different creature anyway (DM ’s choice).<div><div>When the creature appears, it is under no compulsion to behave in any particular way. You can ask the creature to perform a service in exchange for payment, but it isn’t obliged to do so. The requested task could range from simple (fly us across the chasm, or help us fight a battle) to complex (spy on our enemies, or protect&nbsp;us during our foray into the dungeon). You must be able to communicate with the creature to bargain for its services.</div></div><div>Payment can take a variety of forms. A celestial might require a sizable donation of gold or magic items to an allied temple, while a fiend might demand a living sacrifice or a gift of treasure. Some creatures might exchange their service for a quest undertaken by you.<br></div><div>As a rule of thumb, a task that can be measured in minutes requires a payment worth 100 gp per minute. A task measured in hours requires 1,000 gp per hour. And a task measured in days (up to 10 days) requires 10,000 gp per day. The DM can adjust these payments based on the circumstances under which you cast the spell. If the task is aligned with the creature’s ethos, the payment might be halved or even waived. Nonhazardous tasks typically require only half the suggested payment, while especially dangerous tasks might require a greater gift. Creatures rarely accept tasks that seem suicidal.<br></div><div>After the creature completes the task, or when the agreed-upon duration of service expires, the creature returns to its home plane after reporting back to you, if appropriate to the task and if possible. If you are unable to agree on a price for the creature’s service, the creature immediately returns to its home plane.<br></div><div><div>A creature enlisted to join your group counts as a member of it, receiving a full share of experience points awarded.</div></div>
1874	1873	171	With this spell, you attempt to bind a celestial, an elemental, a fey, or a fiend to your service. The creature must be within range for the entire casting of the spell. (Typically, the creature is first summoned into the center of an inverted magic circle in order to keep it trapped while this spell is cast.) At the completion of the casting, the target must make a Charisma saving throw. On a failed save, it is bound to serve you for the duration. If the creature was summoned or created by another spell, that spell’s duration is extended to match the duration of this spell.<div>A bound creature must follow your instructions to the best of its ability. You might command the creature to accompany you on an adventure, to guard a location, or to deliver a message. The creature obeys the letter of your instructions, but if the creature is hostile to you, it strives to twist your words to achieve its own objectives. If the creature carries out your instructions completely before the spell ends, it travels to you to report this fact if you are on the same plane of existence. If you are on a different plane of existence, it returns to the place where you bound it and remains there until the spell ends.<br></div>
1875	1873	122	When you cast this spell using a spell slot of a higher level, the duration increases to 10 days with a 6th-level slot, to 30 days with a 7th-level slot, to 180 days with an 8th-level slot, and to a year and a day with a 9th-level spell slot.
1877	1876	171	You and up to eight willing creatures who link hands in a circle are transported to a different plane of existence. You can specify a target destination in general terms, such as the City of Brass on the Elemental Plane of Fire or the palace of Dispater on the second level of the Nine Hells, and you appear in or near that destination. If you are trying to reach the City of Brass, for example, you might arrive in its Street of Steel, before its Gate of Ashes, or looking at the city from across the Sea of Fire, at the DM’s discretion.<div>Alternatively, if you know the sigil sequence of a teleportation circle on another plane of existence, this spell can take you to that circle. If the teleportation circle is too small to hold all the creatures you transported, they appear in the closest unoccupied spaces next to the circle.<br></div><div><div>You can use this spell to banish an unwilling creature to another plane. Choose a creature within your reach and make a melee spell attack against it. On a hit, the creature must make a Charisma saving throw. If the creature fails this save, it is transported to a random location on the plane of existence you specify. A creature so transported must find its own way back to your current plane of existence.</div></div>
1880	1879	171	This spell channels vitality into plants within a specific area. There are two possible uses for the spell, granting either immediate or long-term benefits.<div>If you cast this spell using 1 action, choose a point within range. All normal plants in a 100-foot radius centered on that point become thick and overgrown. A creature moving through the area must spend 4 feet of movement for every 1 foot it moves.<br></div><div>You can exclude one or more areas of any size within the spell’s area from being affected.<br></div><div><div>If you cast this spell over 8 hours, you enrich the land. All plants in a half-mile radius centered on a point within range become enriched for 1 year. The plants yield twice the normal amount of food when harvested.</div></div>
1882	1881	171	You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage.<div><div>This spell’s damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12).</div></div>
1884	1883	171	This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a Wisdom saving throw to avoid the effect. A shapechanger automatically succeeds on this saving throw.<div>The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast whose challenge rating is equal to or less than the target’s (or the target’s level, if it doesn't have a challenge rating). The target’s game statistics, including mental ability scores, are replaced by the statistics of the chosen beast. It retains its alignment and personality.<br></div><div>The target assumes the hit points of its new form. When it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn’t reduce the creature’s normal form to 0 hit points, it isn’t knocked unconscious.<br></div><div><div>The creature is limited in the actions it can perform by the nature of its new form, and it can’t speak, cast spells, or take any other action that requires hands or speech.</div><div>The target’s gear melds into the new form. The creature can’t activate, use, wield, or otherwise benefit from any of its equipment.</div></div>
1886	1885	171	<div>A wave of healing energy washes over the creature you touch. The target regains all its hit points. If the creature is charmed, frightened, paralyzed, or stunned, the condition ends. If the creature is prone, it can use its reaction to stand up. This spell has no effect on undead or constructs.</div>
1888	1887	171	<div>You utter a word of power that can compel one creature you can see within range to die instantly. If the creature you choose has 100 hit points or fewer, it dies. Otherwise, the spell has no effect.</div>
1892	1891	171	Up to six creatures of your choice that you can see within range each regain hit points equal to 2d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.
1896	1895	171	This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:<div><div>• You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.</div><div>• You instantaneously light or snuff out a candle, a torch, or a small campfire.</div><div>• You instantaneously clean or soil an object no larger than 1 cubic foot.</div><div>• You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.</div><div>• You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.</div><div>• You create a non-magical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.<br></div></div><div><div>If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.</div></div>
1898	1897	171	Eight multicolored rays of light flash from your hand. Each ray is a different color and has a different power and purpose. Each creature in a 60-foot cone must make a Dexterity saving throw. For each target, roll a d8 to determine which color ray affects it.
1899	1897	944	The target takes 10d6 fire damage on a failed save, or half as much damage on a successful one.
1900	1897	944	The target takes 10d6 acid damage on a failed save, or half as much damage on a successful one.
1901	1897	944	The target takes 10d6 lightning damage on a failed save, or half as much damage on a successful one.
1902	1897	944	The target takes 10d6 poison damage on a failed save, or half as much damage on a successful one.
1903	1897	944	The target takes 10d6 cold damage on a failed save, or half as much damage on a successful one.
1904	1897	944	On a failed save, the target is restrained. It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures don’t need to be consecutive; keep track of both until the target collects three of a kind.
1905	1897	944	On a failed save, the target is blinded. It must then make a Wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of existence of the DM’s choosing and is no longer blinded. (Typically, a creature that is on a plane that isn’t its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.)
1906	1897	944	<div>The target is struck by two rays. Roll twice more, rerolling any 8.</div>
1909	1908	171	A shimmering, multicolored plane of light forms a vertical opaque wall—up to 90 feet long, 30 feet high, and 1 inch thick—centered on a point you can see within range. Alternatively, you can shape the wall into a sphere up to 30 feet in diameter centered on a point you choose within range. The wall remains in place for the duration. If you position the wall so that it passes through a space occupied by a creature, the spell fails, and your action and the spell slot are wasted.<div>The wall sheds bright light out to a range of 100 feet and dim light for an additional 100 feet. You and creatures you designate at the time you cast the spell can pass through and remain near the wall without harm. If another creature that can see the wall moves to within 20 feet of it or starts its turn there, the creature&nbsp;must succeed on a Constitution saving throw or become blinded for 1 minute.<br></div><div>The wall consists of seven layers, each with a different color. When a creature attempts to reach into or pass through the wall, it does so one layer at a time through all the wall’s layers. As it passes or reaches through each layer, the creature must make a Dexterity saving throw or be affected by that layer’s properties as described below.<br></div><div>The wall can be destroyed, also one layer at a time, in order from red to violet, by means specific to each layer. Once a layer is destroyed, it remains so for the duration of the spell. A <i>rod of cancellation</i> destroys a prismatic wall, but an <i>antimagic field</i> has no effect on it.<br></div>
1910	1908	944	The creature takes 10d6 fire damage on a failed save, or half as much damage on a successful one. While this layer is in place, non-magical ranged attacks can’t pass through the wall. The layer can be destroyed by dealing at least 25 cold damage to it.
1911	1908	944	The creature takes 10d6 acid damage on a failed save, or half as much damage on a successful one. While this layer is in place, magical ranged attacks can’t pass through the wall. The layer is destroyed by a strong wind.&nbsp;
1912	1908	944	The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 60 force damage to it.
1913	1908	944	The creature takes 10d6 poison damage on a failed save, or half as much damage on a successful one. A <i>passwall </i>spell, or another spell of equal or greater level that can open a portal on a solid surface, destroys this layer.
1914	1908	944	The creature takes 10d6 cold damage on a failed save, or half as much damage on a successful one. This layer can be destroyed by dealing at least 25 fire damage to it.
1915	1908	944	On a failed save, the creature is restrained. It must then make a Constitution saving throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrified condition. The successes and failures don’t need to be consecutive; keep track of both until the creature collects three of a kind.<div>While this layer is in place, spells can’t be cast through the wall. The layer is destroyed by bright light shed by a <i>daylight </i>spell or a similar spell of equal or higher level.<br></div>
1916	1908	944	<div>On a failed save, the creature is blinded. It must then make a Wisdom saving throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of the DM’s choosing and is no longer blinded. (Typically, a creature that is on a plane that isn’t its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal planes.) This layer is destroyed by a <i>dispel magic</i> spell or a similar spell of equal or higher level that can end spells and magical effects.</div>
1944	1943	171	You touch a creature and stimulate its natural healing ability. The target regains 4d8 + 15 hit points. For the duration of the spell, the target regains 1 hit point at the start of each of its turns (10 hit points each minute).<div><div>The target’s severed body members (fingers, legs, tails, and so on), if any, are restored after 2 minutes. If you have the severed part and hold it to the stump, the spell instantaneously causes the limb to knit to the stump.</div></div>
1918	1917	171	A flickering flame appears in your hand. The flame remains there for the duration and harms neither you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The spell ends if you dismiss it as an action or if you cast it again.<div>You can also attack with the flame, although doing so ends the spell. When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you. Make a ranged spell attack. On a hit, the target takes 1d8 fire damage.<br></div><div><div>This spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).</div></div>
1920	1919	171	You create an illusion of an object, a creature, or some other visible phenomenon within range that activates when a specific condition occurs. The illusion is imperceptible until then. It must be no larger than a 30-foot cube, and you decide when you cast the spell how the illusion behaves and what sounds it makes. This scripted performance can last up to 5 minutes.<div>When the condition you specify occurs, the illusion springs into existence and performs in the manner you described. Once the illusion finishes performing, it disappears and remains dormant for 10 minutes. After this time, the illusion can be activated again.<br></div><div>The triggering condition can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the area. For example, you could create an illusion of yourself to appear and warn off others who attempt to open a trapped door, or you could set the illusion to trigger only when a creature says the correct word or phrase.<br></div><div>Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature.<br></div>
1923	1922	171	You create an illusory copy of yourself that lasts for the duration. The copy can appear at any location within range that you have seen before, regardless of intervening obstacles. The illusion looks and sounds like you but is intangible. If the illusion takes any damage, it disappears, and the spell ends.<div>You can use your action to move this illusion up to twice your speed, and make it gesture, speak, and behave in whatever way you choose. It mimics your mannerisms perfectly.<br></div><div>You can see through its eyes and hear through its ears as if you were in its space. On your turn as a bonus action, you can switch from using its senses to using your own, or back again. While you are using its senses, you are blinded and deafened in regard to your own surroundings.<br></div><div><div>Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and any noise it makes sounds hollow to the creature.</div></div>
1925	1924	171	<div>For the duration, the willing creature you touch has resistance to one damage type of your choice: acid, cold, fire, lightning, or thunder.</div>
1927	1926	171	Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead.<div><div>The protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can’t be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect.</div></div>
1929	1928	171	You touch a creature. If it is poisoned, you neutralize the poison. If more than one poison afflicts the target, you neutralize one poison that you know is present, or you neutralize one at random.<div><div>For the duration, the target has advantage on saving throws against being poisoned, and it has resistance to poison damage.</div></div>
1931	1930	171	<div>All non-magical food and drink within a 5-foot-radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease.</div>
1933	1932	171	You return a dead creature you touch to life, provided that it has been dead no longer than 10 days. If the creature’s soul is both willing and at liberty to rejoin the body, the creature returns to life with 1 hit point.<div>This spell also neutralizes any poisons and cures non-magical diseases that affected the creature at the time it died. This spell doesn’t, however, remove magical diseases, curses, or similar effects; if these aren’t first removed prior to casting the spell, they take effect when the creature returns to life. The spell can’t return an undead creature to life.<br></div><div>This spell closes all mortal wounds, but it doesn’t restore missing body parts. If the creature is lacking body parts or organs integral for its survival—its head, for instance—the spell automatically fails.<br></div><div><div>Coming back from the dead is an ordeal. The target takes a - 4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears.</div></div>
1935	1934	171	You forge a telepathic link among up to eight willing creatures of your choice within range, psychically&nbsp;linking each creature to all the others for the duration. Creatures with Intelligence scores of 2 or less aren’t affected by this spell.<div><div>Until the spell ends, the targets can communicate telepathically through the bond whether or not they have a comm on language. The communication is possible over any distance, though it can’t extend to other planes of existence.</div></div>
1937	1936	171	A black beam of enervating energy springs from your finger toward a creature within range. Make a ranged spell attack against the target. On a hit, the target deals only half damage with weapon attacks that use Strength until the spell ends.<div><div>At the end of each of the target’s turns, it can make a Constitution saving throw against the spell. On a success, the spell ends.</div></div>
1939	1938	171	A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn.<div><div>The spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).</div></div>
1941	1940	171	A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution saving throw. On a failed save, it is also poisoned until the end of your next turn.
1942	1940	122	<div>When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.</div>
1950	1949	171	At your touch, all curses affecting one creature or object end. If the object is a cursed magic item, its curse remains, but the spell breaks its owner’s attunement to the object so it can be removed or discarded.
1952	1951	171	<div>You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after making the saving throw. The spell then ends.</div>
1954	1953	171	You touch a dead creature that has been dead for no more than a century, that didn’t die of old age, and that isn’t undead. If its soul is free and willing, the target returns to life with all its hit points.<div>This spell neutralizes any poisons and cures normal diseases afflicting the creature when it died. It doesn’t, however, remove magical diseases, curses, and the like; if such effects aren't removed prior to casting the spell, they afflict the target on its return to life.<br></div><div>This spell closes all mortal wounds and restores any missing body parts.<br></div><div>Coming back from the dead is an ordeal. The target takes a - 4 penalty to all attack rolls, saving throws, and ability checks. Every time the target finishes a long rest, the penalty is reduced by 1 until it disappears.<br></div><div><div>Casting this spell to restore life to a creature that has been dead for one year or longer taxes you greatly. Until you finish a long rest, you can’t cast spells again, and you have disadvantage on all attack rolls, ability checks, and saving throws.</div></div>
1956	1955	171	This spell reverses gravity in a 50-foot-radius, 100- foot high cylinder centered on a point within range. All creatures and objects that aren’t somehow anchored to the ground in the area fall upward and reach the top of the area when you cast this spell. A creature can make a Dexterity saving throw to grab onto a fixed object it can reach, thus avoiding the fall.<div>If some solid object (such as a ceiling) is encountered in this fall, falling objects and creatures strike it just as they would during a normal downward fall. If an object or creature reaches the top of the area without striking anything, it remains there, oscillating slightly, for the duration.<br></div><div><div>At the end of the duration, affected objects and creatures fall back down.</div></div>
1958	1957	171	<div>You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can’t return to life a creature that has died of old age, nor can it restore any missing body parts.</div>
1960	1959	171	You touch a length of rope that is up to 60 feet long. One end of the rope then rises into the air until the whole rope hangs perpendicular to the ground. At the upper end of the rope, an invisible entrance opens to an extradimensional space that lasts until the spell ends.<div>The extradimensional space can be reached by climbing to the top of the rope. The space can hold as many as eight Medium or smaller creatures. The rope can be pulled into the space, making the rope disappear from view outside the space.<br></div><div>Attacks and spells can’t cross through the entrance into or out of the extradimensional space, but those inside can see out of it as if through a 3-foot-by-5-foot window centered on the rope.<br></div><div><div>Anything inside the extradimensional space drops out when the spell ends.</div></div>
1962	1961	171	<div>Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.</div><div>The spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).</div>
1964	1963	171	You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn’t protect the warded creature from area effects, such as the explosion of a fireball.<div>If the warded creature makes an attack or casts a spell that affects an enemy creature, this spell ends.</div>
1966	1965	171	The next time you hit a creature with a melee weapon attack during the spell’s duration, your weapon flares with white-hot intensity, and the attack deals an extra 1d6 fire damage to the target and causes the target to ignite in flames. At the start of each of its turns until the spell ends, the target must make a Constitution saving throw. On a failed save, it takes 1d6 fire damage. On a successful save, the spell ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the spell ends.
1967	1965	122	<div>When you cast this spell using a spell slot of 2nd level or higher, the initial extra damage dealt by the attack increases by 1d6 for each slot level above 1st.</div>
1969	1968	171	<div>For the duration, you see invisible creatures and objects as if they were visible, and you can see into the Ethereal Plane. Ethereal creatures and objects appear ghostly and translucent.</div>
1996	1995	171	You shape an illusory duplicate of one beast or humanoid that is within range for the entire casting time of the spell. The duplicate is a creature, partially real and formed from ice or snow, and it can take actions and otherwise be affected as a normal creature. It appears to be the same as the original, but it has half the creature’s hit point maximum and is formed without any equipment. Otherwise, the illusion uses all the statistics of the creature it duplicates.<div><div>The simulacrum is friendly to you and creatures you designate. It obeys your spoken commands, moving and acting in accordance with your wishes and acting on your turn in combat. The simulacrum lacks the ability to learn or become more powerful, so it never increases its level or other abilities, nor can it regain expended spell slots.</div></div><div>If the simulacrum is damaged, you can repair it in an alchemical laboratory, using rare herbs and minerals worth 100 gp per hit point it regains. The simulacrum lasts until it drops to 0 hit points, at which point it reverts to snow and melts instantly.<br></div><div><div>If you cast this spell again, any currently active duplicates you created with this spell are instantly destroyed.</div></div>
1971	1970	171	This spell allows you to change the appearance of any number of creatures that you can see within range. You give each target you choose a new, illusory appearance. An unwilling target can make a Charisma saving throw, and if it succeeds, it is unaffected by this spell.<div>The spell disguises physical appearance as well as clothing, armor, weapons, and equipment. You can make each creature seem 1 foot shorter or taller and appear thin, fat, or in between. You can’t change a target’s body type, so you must choose a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you. The spell lasts for the duration, unless you use your action to dismiss it sooner.<br></div><div><div>The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to a creature’s outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel the creature’s head and hair. If you use this spell to appear thinner than you are, the hand of&nbsp;someone w ho reaches out to touch you would bump into you while it was seemingly still in midair.</div></div><div><div>A creature can use its action to inspect a target and make an Intelligence (Investigation) check against your spell save DC. If it succeeds, it becomes aware that the target is disguised.</div></div>
1974	1973	171	You send a short message of twenty-five words or less to a creature with which you are familiar. The creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately. The spell enables creatures with Intelligence scores of at least 1 to understand the meaning of your message.<div><div>You can send the message across any distance and even to other planes of existence, but if the target is on a different plane than you, there is a 5 percent chance that the message doesn’t arrive.</div></div>
1976	1975	171	By means of this spell, a willing creature or an object can be hidden away, safe from detection for the duration. When you cast the spell and touch the target, it becomes invisible and can’t be targeted by divination spells or perceived through scrying sensors created by divination spells.<div>If the target is a creature, it falls into a state of suspended animation. Time ceases to flow for it, and it doesn’t grow older.<br></div><div><div>You can set a condition for the spell to end early. The condition can be anything you choose, but it must occur or be visible within 1 mile of the target. Examples include “after 1,000 years” or “when the tarrasque awakens.” This spell also ends if the target takes any damage.</div></div>
1978	1977	171	You assume the form of a different creature for the duration. The new form can be of any creature with a challenge rating equal to your level or lower. The&nbsp;creature can’t be a construct or an undead, and you must have seen the sort of creature at least once. You transform into an average example of that creature, one without any class levels or the Spellcasting trait.<div>Your game statistics are replaced by the statistics of the chosen creature, though you retain your alignment and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus listed in its statistics is higher than yours, use the creature’s bonus in place of yours. You can’t use any legendary actions or lair actions of the new form.<br></div><div>You assume the hit points and Hit Dice of the new form. When you revert to your normal form, you return to the number of hit points you had before you transformed. If you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. As long as the excess damage doesn’t reduce your normal form to 0 hit points, you aren’t knocked unconscious.<br></div><div>You retain the benefit of any features from your class, race, or other source and can use them, provided that your new form is physically capable of doing so. You can’t use any special senses you have (for example, darkvision) unless your new form also has that sense. You can only speak if the creature can normally speak.<br></div><div>When you transform, you choose whether your equipment falls to the ground, merges into the new form, or is worn by it. Worn equipment functions as normal. The DM determines whether it is practical for the new form to wear a piece of equipment, based on the creature’s shape and size. Your equipment doesn’t change shape or size to match the new form, and any equipment that the new form can’t wear must either fall to the ground or merge into your new form. Equipment that merges has no effect in that state.<br></div><div><div>During this spell’s duration, you can use your action to assume a different form following the same restrictions and rules for the original form, with one exception: if your new form has more hit points than your current one, your hit points remain at their current value.</div></div>
1980	1979	171	A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw.<div>A non-magical object that isn’t being worn or carried also takes the damage if it’s in the spell's area.<br></div>
1981	1979	122	<div>When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.</div>
1983	1982	171	<div>An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from <i>magic missile</i>.</div>
1985	1984	171	<div>A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.</div>
1987	1986	171	<div>The wood of a club or quarterstaff you are holding is imbued with nature’s power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon's damage die becomes a d8. The weapon also becomes magical, if it isn’t already. The spell ends if you cast it again or if you let go of the weapon.</div>
1989	1988	171	<div>Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can’t take reactions until the start of its next turn.</div><div>The spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).</div>
1991	1990	171	<div>For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there.</div>
1993	1992	171	You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn't accompanied by sound, smell, or other sensory effects.<div>You can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.<br></div><div><div>Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image.</div></div>
1998	1997	171	This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures).<div>Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature’s hit points from the total before moving on to the creature with the next lowest hit points. A creature’s hit points must be equal to or less than the remaining total for that creature to be affected.&nbsp;<br></div><div>Undead and creatures immune to being charmed aren’t affected by this spell.&nbsp;<br></div>
1999	1997	122	<div>When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st.</div>
2001	2000	171	Until the spell ends, freezing rain and sleet fall in a 20-foot-tall cylinder with a 40-foot radius centered on a point you choose within range. The area is heavily obscured, and exposed flames in the area are doused.<div>The ground in the area is covered with slick ice, making it difficult terrain. When a creature enters the spell’s area for the first time on a turn or starts its turn there, it must make a Dexterity saving throw. On a failed save, it falls prone.<br></div><div>If a creature is concentrating in the spell’s area, the creature must make a successful Constitution saving throw against your spell save DC or lose concentration.<br></div>
2005	2004	171	<div>You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs.</div>
2007	2006	171	<div>You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM ’s discretion.</div>
2009	2008	171	<div>You grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a&nbsp;mouth and can’t be undead. The spell fails if the corpse was the target of this spell within the last 10 days.</div><div><div>Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are hostile to it or it recognizes you as an enemy. This spell doesn’t return the creature’s soul to its body, only its animating spirit. Thus, the corpse can’t learn new information, doesn’t comprehend anything that has happened since it died, and can’t speculate about future events.</div></div>
2011	2010	171	You imbue plants within 30 feet of you with limited sentience and animation, giving them the ability to communicate with you and follow your simple commands. You can question plants about events in the spell’s area within the past day, gaining information about creatures that have passed, weather, and other circumstances.<div>You can also turn difficult terrain caused by plant growth (such as thickets and undergrowth) into ordinary terrain that lasts for the duration. Or you can turn ordinary terrain where plants are present into difficult terrain that lasts for the duration, causing vines and branches to hinder pursuers, for example.<br></div><div>Plants might be able to perform other tasks on your behalf, at the DM’s discretion. The spell doesn’t enable plants to uproot themselves and move about, but they can freely move branches, tendrils, and stalks.<br></div><div>If a plant creature is in the area, you can communicate with it as if you shared a comm on language, but you gain no magical ability to influence it.<br></div><div><div>This spell can cause the plants created by the <i>entangle</i> spell to release a restrained creature.</div></div>
2013	2012	171	<div>Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a climbing speed equal to its walking speed.</div>
2015	2014	171	The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels.<div><div>The transformation of the ground is camouflaged to look natural. Any creature that can’t see the area at the time the spell is cast must make a Wisdom (Perception) check against your spell save DC to recognize the terrain as hazardous before entering it.</div></div>
2018	2017	171	You call forth spirits to protect you. They flit around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish.<div>When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. An affected creature’s speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a Wisdom saving throw. On a failed save, the creature takes 3d8 radiant damage (if you are good or neutral) or 3d8 necrotic damage (if you are evil). On a successful save, the creature takes half as much damage.<br></div>
2019	2017	122	<div>When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.</div>
2022	2021	171	<div>You create a floating, spectral weapon within range that lasts for the duration or until you cast this spell again. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes force damage equal to 1d8 + your spellcasting ability modifier.</div><div>As a bonus action on your turn, you can move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it.</div><div>The weapon can take whatever form you choose. Clerics of deities who are associated with a particular weapon (as St. Cuthbert is known for his mace and Thor for his hammer) make this spell’s effect resemble that weapon.</div>
2023	2021	122	When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for every two slot levels above the 2nd.
2030	2029	171	<div>The next time you hit a creature with a melee weapon attack during this spell’s duration, your weapon pierces both body and mind, and the attack deals an extra 4d6 psychic damage to the target. The target must make a Wisdom saving throw. On a failed save, it has disadvantage on attack rolls and ability checks, and can't take reactions, until the end of its next turn.</div>
2032	2031	171	You create a 20-foot-radius sphere of yellow, nauseating gas centered on a point within range. The cloud spreads around corners, and its area is heavily obscured. The cloud lingers in the air for the duration.<div>Each creature that is completely within the cloud at the start of its turn must make a Constitution saving throw against poison. On a failed save, the creature spends its action that turn retching and reeling. Creatures that don’t need to breathe or are immune to poison automatically succeed on this saving throw.<br></div><div><div>A moderate wind (at least 10 miles per hour) disperses the cloud after 4 rounds. A strong wind (at least 20 miles per hour) disperses it after 1 round.</div></div>
2034	2033	171	<div>You touch a stone object of Medium size or smaller or a section of stone no more than 5 feet in any dimension and form it into any shape that suits your purpose. So, for example, you could shape a large rock into a weapon, idol, or coffer, or make a small passage through a wall, as long as the wall is less than 5 feet thick. You could also shape a stone door or its frame to seal the door shut. The object you create can have up to two hinges and a latch, but finer mechanical detail isn’t possible.</div>
2038	2037	171	A churning storm cloud forms, centered on a point you can see and spreading to a radius of 360 feet. Lightning flashes in the area, thunder boom s, and strong winds roar. Each creature under the cloud (no more than 5,000 feet beneath the cloud) when it appears must make a Constitution saving throw. On a failed save, a creature takes 2d6 thunder damage and becomes deafened for 5 minutes.<div>Each round you maintain concentration on this spell, the storm produces additional effects on your turn.<br></div>
2039	2037	944	Acidic rain falls from the cloud. Each creature and object under the cloud takes 1d6 acid damage.
2040	2037	944	You call six bolts of lightning from the cloud to strike six creatures or objects of your choice beneath the cloud. A given creature or object can’t be struck by more than one bolt. A struck creature must make a Dexterity saving throw. The creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one.
2041	2037	944	Hailstones rain down from the cloud. Each creature under the cloud takes 2d6 bludgeoning damage.
2042	2037	944	<div>Gusts and freezing rain assail the area under the cloud. The area becomes difficult terrain and is heavily obscured. Each creature there takes 1d6 cold damage. Ranged weapon attacks in the area are impossible. The wind and rain count as a severe distraction for the purposes of maintaining concentration on spells. Finally, gusts of strong wind (ranging from 20 to 50 miles per hour) automatically disperse fog, mists, and similar phenomena in the area, whether mundane or magical.</div>
2048	2047	171	<div>This spell turns the flesh of a willing creature you touch as hard as stone. Until the spell ends, the target has resistance to non-magical bludgeoning, piercing, and slashing damage.</div>
2050	2049	171	<div>You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can’t be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell.</div><div>The target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.<br></div><div><div>You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a knight give her warhorse to the first beggar she meets. If the condition isn’t met before the spell expires, the activity isn’t performed.</div><div>If you or any of your companions damage the target, the spell ends.</div></div>
2052	2051	171	A beam of brilliant light flashes out from your hand in a 5-foot-wide, 60-foot-long line. Each creature in the line must make a Constitution saving throw. On a failed save, a creature takes 6d8 radiant damage and is blinded until your next turn. On a successful save, it takes half as much damage and isn’t blinded by this spell. Undead and oozes have disadvantage on this saving throw.<div><div>You can create a new line of radiance as your action on any turn until the spell ends.</div><div>For the duration, a mote of brilliant radiance shines in your hand. It sheds bright light in a 30-foot radius and dim light for an additional 30 feet. This light is sunlight.</div></div>
2055	2054	171	Brilliant sunlight flashes in a 60-foot radius centered on a point you choose within range. Each creature in that light must make a Constitution saving throw. On a failed save, a creature takes 12d6 radiant damage and is blinded for 1 minute. On a successful save, it takes half as much damage and isn’t blinded by this spell. Undead and oozes have disadvantage on this saving throw.&nbsp;<div><div>A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded.</div><div>This spell dispels any darkness in its area that was created by a spell.</div></div>
2057	2056	171	You transmute your quiver so it produces an endless supply of non-magical ammunition, which seem s to leap into your hand when you reach for it.<div><div>On each of your turns until the spell ends, you can use a bonus action to make two attacks with a weapon that uses ammunition from the quiver. Each time you make such a ranged attack, your quiver magically replaces the piece of ammunition you used with a similar piece of non-magical ammunition. Any pieces of ammunition created by this spell disintegrate when the spell ends. If the quiver leaves your possession, the spell ends.</div></div>
2102	2101	171	Choose one creature or non-magical object that you can see within range. You transform the creature into a different creature, the creature into an object, or the object into a creature (the object must be neither worn nor carried by another creature). The transformation lasts for the duration, or until the target drops to 0 hit points or dies. If you concentrate on this spell for the full duration, the transformation becomes permanent.<div>Shapechangers aren’t affected by this spell. An unwilling creature can make a Wisdom saving throw, and if it succeeds, it isn’t affected by this spell.<br></div>
2059	2058	171	When you cast this spell, you inscribe a harmful glyph either on a surface (such as a section of floor, a wall, or a table) or within an object that can be closed to conceal the glyph (such as a book, a scroll, or a treasure chest). If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.<div>The glyph is nearly invisible, requiring an Intelligence (Investigation) check against your spell save DC to find it.<br></div><div>You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or stepping on the glyph, removing another object covering it, approaching within a certain distance of it, or manipulating the object that holds it. For glyphs inscribed within an object, the most comm on triggers are opening the object, approaching within a certain distance of it, or seeing or reading the glyph.<br></div><div>You can further refine the trigger so the spell is activated only under certain circumstances or according to a creature’s physical characteristics (such as height or weight), or physical kind (for example, the ward could be set to affect hags or shapechangers). You can also specify creatures that don’t trigger the glyph, such as those who say a certain password.<br></div><div>When you inscribe the glyph, choose one of the options below for its effect. Once triggered, the glyph glows, filling a 60-foot-radius sphere with dim light for 10 minutes, after which time the spell ends. Each creature in the sphere when the glyph activates is targeted by its effect, as is a creature that enters the sphere for the first time on a turn or ends its turn there.<br></div>
2060	2058	944	Each target must make a Constitution saving throw, taking 10d10 necrotic damage on a failed save, or half as much damage on a successful save.&nbsp;
2061	2058	944	<div>Each target must make a Constitution saving throw. On a failed save, a target bickers and argues with other creatures for 1 minute. During this time,&nbsp;it is incapable of meaningful communication and has disadvantage on attack rolls and ability checks.</div>
2062	2058	944	Each target must make a Wisdom saving throw and becomes frightened for 1 minute on a failed save. W hile frightened, the target drops whatever it is holding and must move at least 30 feet away from the glyph on each of its turns, if able.&nbsp;
2063	2058	944	Each target must make a Charisma saving throw. On a failed save, the target is overwhelmed with despair for 1 minute. During this time, it can’t attack or target any creature with harmful abilities, spells, or other magical effects.&nbsp;
2064	2058	944	Each target must make an Intelligence saving throw. On a failed save, the target is driven insane for 1 minute. An insane creature can’t take actions, can't understand what other creatures say, can’t read, and speaks only in gibberish. The DM controls its movement, which is erratic.&nbsp;
2065	2058	944	Each target must make a Constitution saving throw and becomes incapacitated with excruciating pain for 1 minute on a failed save.&nbsp;
2066	2058	944	Each target must make a Wisdom saving throw and falls unconscious for 10 minutes on a failed save. A creature awakens if it takes damage or if someone uses an action to shake or slap it awake.
2067	2058	944	<div>Each target must make a Wisdom saving throw and becomes stunned for 1 minute on a failed save.</div>
2069	2068	171	A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a Wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 4 or less isn’t affected.<div><div>At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw. The target has advantage on the saving throw if it’s triggered by damage. On a success, the spell ends.</div></div>
2071	2070	171	You gain the ability to move or manipulate creatures or objects by thought. When you cast the spell, and as your action each round for the duration, you can exert your will on one creature or object that you can see within range, causing the appropriate effect below. You can affect the same target round after round, or choose a new one at any time. If you switch targets, the prior target is no longer affected by the spell.
2072	2070	944	You can try to move a Huge or smaller creature. Make an ability check with your spellcasting ability contested by the creature’s Strength check. If you win the contest, you move the creature up to 30 feet in any direction, including upward but not beyond the range of this spell. Until the end of your next turn, the creature is restrained in your telekinetic grip. A creature lifted upward is suspended in mid-air.<div>On subsequent rounds, you can use your action to attempt to maintain your telekinetic grip on the creature by repeating the contest.<br></div>
2073	2070	944	You can try to move an object that weighs up to 1,000 pounds. If the object isn’t being worn or carried, you automatically move it up to 30 feet in any direction, but not beyond the range of this spell.&nbsp;<div>If the object is worn or carried by a creature, you must make an ability check with your spellcasting ability contested by that creature’s Strength check. If you succeed, you pull the object away from that creature and can move it up to 30 feet in any direction but not beyond the range of this spell.<br></div><div><div>You can exert fine control on objects with your telekinetic grip, such as manipulating a simple tool, opening a door or a container, stowing or retrieving an item from an open container, or pouring the contents from a vial.</div></div>
2075	2074	171	You create a telepathic link between yourself and a willing creature with which you are familiar. The creature can be anywhere on the same plane of existence as you. The spell ends if you or the target are no longer on the same plane.<div><div>Until the spell ends, you and the target can instantaneously share words, images, sounds, and other sensory messages with one another through the link, and the target recognizes you as the creature it is communicating with. The spell enables a creature with an Intelligence score of at least 1 to understand the meaning of your words and take in the scope of any sensory messages you send to it.</div></div>
2145	2144	171	<div>Drawing on the deepest fears of a group of creatures, you create illusory creatures in their minds, visible only to them. Each creature in a 30-foot-radius sphere centered on a point of your choice within range must make a Wisdom saving throw. On a failed save, a creature becomes frightened for the duration. The illusion calls on the creature’s deepest fears, manifesting its worst nightmares as an implacable threat. At the start of each of the frightened creature’s turns, it must succeed on a Wisdom saving throw or take 4d10 psychic damage. On a successful save, the spell ends for that creature.</div>
2077	2076	171	As you cast the spell, you draw a 10-foot-diameter circle on the ground inscribed with sigils that link your location to a permanent teleportation circle of your choice w hose sigil sequence you know and that is on the same plane of existence as you. A shimmering portal opens within the circle you drew and remains open until the end of your next turn. Any creature that enters the portal instantly appears within 5 feet of the destination circle or in the nearest unoccupied space if that space is occupied.<div>Many major temples, guilds, and other important places have permanent teleportation circles inscribed somewhere within their confines. Each such circle includes a unique sigil sequence—a string of magical runes arranged in a particular pattern. When you first gain the ability to cast this spell, you learn the sigil sequences for two destinations on the Material Plane, determined by the DM. You can learn additional sigil sequences during your adventures. You can commit a new sigil sequence to memory after studying it for 1 minute.<br></div><div><div>You can create a permanent teleportation circle by casting this spell in the same location every day for one year. You need not use the circle to teleport when you cast the spell in this way.</div></div>
2079	2078	171	This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground.<div>The disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. It can move across uneven terrain, up or down stairs, slopes and the like, but it can’t cross an elevation change of 10 feet or more. For example, the disk can’t move across a 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom.<br></div><div><div>If you move more than 100 feet from the disk (typically because it can’t move around an obstacle to follow you), the spell ends.</div></div>
2082	2081	171	<div>You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range:</div><div>• Your voice boom s up to three times as loud as normal for 1 minute.</div><div>• You cause flames to flicker, brighten, dim, or change color for 1 minute.</div><div>• You cause harmless tremors in the ground for 1 minute.</div><div>• You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.</div><div>• You instantaneously cause an unlocked door or window to fly open or slam shut.</div><div>• You alter the appearance of your eyes for 1 minute.</div><div>If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action.<br></div>
2086	2085	171	<div>You create a long, vine-like whip covered in thorns that lashes out at your comm and toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you.</div><div>This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).</div>
2088	2087	171	<div>The first time you hit with a melee weapon attack during this spell’s duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra 2d6 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone.</div>
2091	2090	171	A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn’t pushed.<div>In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell’s effect, and the spell emits a thunderous boom audible out to 300 feet.<br></div>
2092	2090	122	<div>When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.</div>
2094	2093	171	You briefly stop the flow of time for everyone but yourself. No time passes for other creatures, while you take 1d4 + 1 turns in a row, during which you can use actions and move as normal.<div><div>This spell ends if one of the actions you use during this period, or any effects that you create during this period, affects a creature other than you or an object being worn or carried by someone other than you. In addition, the spell ends if you move to a place more than 1,000 feet from the location where you cast it.</div></div>
2096	2095	171	<div>This spell grants the creature you touch the ability to understand any spoken language it hears. Moreover, when the target speaks, any creature that knows at least one language and can hear the target understands what it says.</div>
2098	2097	171	<div>This spell creates a magical link between a Large or larger inanimate plant within range and another plant, at any distance, on the same plane of existence. You must have seen or touched the destination plant at least once before. For the duration, any creature can step into the target plant and exit from the destination plant by using 5 feet of movement.</div>
2100	2099	171	You gain the ability to enter a tree and move from inside it to inside another tree of the sam e kind within 500 feet. Both trees must be living and at least the same size as you. You must use 5 feet of movement to enter a tree. You instantly know the location of all other trees of the same kind within 500 feet and, as part of the move used to enter the tree, can either pass into one of those trees or step out of the tree you’re in. You appear in a spot of your choice within 5 feet of the destination tree, using another 5 feet of movement. If you have no movement left, you appear within 5 feet of the tree you entered.<div><div>You can use this transportation ability once per round for the duration. You must end each turn outside a tree.</div></div>
2103	2101	944	If you turn a creature into another kind of creature, the new form can be any kind you choose whose challenge rating is equal to or less than the target’s (or its level, if the target doesn’t have a challenge rating). The target’s game statistics, including mental ability scores, are replaced by the statistics of the new form. It retains its alignment and personality.<div>The target assumes the hit points of its new form, and when it reverts to its normal form, the creature returns to the number of hit points it had before it transformed. If it reverts as a result of dropping to 0 hit points, any excess damage carries over to its normal form. As long as the excess damage doesn’t reduce the creature’s normal form to 0 hit points, it isn’t knocked unconscious.<br></div><div>The creature is limited in the actions it can perform by the nature of its new form, and it can’t speak, cast spells, or take any other action that requires hands or speech unless its new form is capable of such actions.<br></div><div>The target’s gear melds into the new form. The creature can’t activate, use, wield, or otherwise benefit from any of its equipment.<br></div>
2104	2101	944	You can turn an object into any kind of creature, as long as the creature’s size is no larger than the object’s size and the creature’s challenge rating is 9 or lower. The creature is friendly to you and your companions. It acts on each of your turns. You decide what action it takes and how it moves. The DM has the creature’s statistics and resolves all of its actions and movement.<div>If the spell becomes permanent, you no longer control the creature. It might remain friendly to you, depending on how you have treated it.<br></div>
2105	2101	944	<div>If you turn a creature into an object, it transforms along with whatever it is wearing and carrying into that form. The creature’s statistics become those of the object, and the creature has no memory of time spent in this form, after the spell ends and it returns to its normal form.</div>
2107	2106	171	You touch a creature that has been dead for no longer than 200 years and that died for any reason except old age. If the creature’s soul is free and willing, the creature is restored to life with all its hit points.<div>This spell closes all wounds, neutralizes any poison, cures all diseases, and lifts any curses affecting the creature when it died. The spell replaces damaged or missing organs and limbs.<br></div><div><div>The spell can even provide a new body if the original no longer exists, in which case you must speak the creature’s name. The creature then appears in an unoccupied space you choose within 10 feet of you.</div></div>
2109	2108	171	<div>This spell gives the willing creature you touch the ability to see things as they actually are. For the duration, the creature has truesight, notices secret doors hidden by magic, and can see into the Ethereal Plane, all out to a range of 120 feet.</div>
2112	2111	171	<div>You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target’s defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn’t ended.</div>
2115	2114	171	A wall of water springs into existence at a point you choose within range. You can make the wall up to 300 feet long, 300 feet high, and 50 feet thick. The wall lasts for the duration.<div>When the wall appears, each creature within its area must make a Strength saving throw. On a failed save, a creature takes 6d10 bludgeoning damage, or half as much damage on a successful save.<br></div><div>At the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 50 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take 5d10 bludgeoning damage. A creature can take this damage only once per round. At the end of the turn, the wall’s height is reduced by 50 feet, and the damage creatures take from the spell on subsequent rounds is reduced by 1d10. When the wall reaches 0 feet in height, the spell ends.<br></div><div><div>A creature caught in the wall can move by swimming. Because of the force of the wave, though, the creature must make a successful Strength (Athletics) check against your spell save DC in order to move at all. If it fails the check, it can’t move. A creature that moves out of the area falls to the ground.</div></div>
2117	2116	171	This spell creates an invisible, mindless, shapeless force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can’t attack. If it drops to 0 hit points, the spell ends.<div>Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wine. Once you give the command, the servant perform s the task to the best of its ability until it completes the task, then waits for your next command.<br></div><div>If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends.<br></div>
2119	2118	171	The touch of your shadow-wreathed hand can siphon life force from others to heal your wounds. Make a melee spell attack against a creature within your reach. On a hit, the target takes 3d6 necrotic damage, and you regain hit points equal to half the amount of necrotic damage dealt. Until the spell ends, you can make the attack again on each of your turns as an action.
2120	2118	122	<div>When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.</div>
2122	2121	171	<div>You unleash a string of insults laced with subtle enchantments at a creature you can see within range. If the target can hear you (though it need not understand you), it must succeed on a Wisdom saving throw or take 1d4 psychic damage and have disadvantage on the next attack roll it makes before the end of its next turn.</div><div>This spell’s damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).</div>
2124	2123	171	You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot thick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration.<div>When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 fire damage, or half as much damage on a successful save.<br></div><div>One side of the wall, selected by you when you cast this spell, deals 5d8 fire damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage.&nbsp;<br></div><div><br></div>
2125	2123	122	<div>When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th.</div>
2127	2126	171	An invisible wall of force springs into existence at a point you choose within range. The wall appears in any orientation you choose, as a horizontal or vertical barrier or at an angle. It can be free floating or resting on a solid surface. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-by- 10-foot panels. Each panel must be contiguous with another panel. In any form, the wall is 1/4 inch thick. It lasts for the duration. If the wall cuts through a creature’s space when it appears, the creature is pushed to one side of the wall (your choice which side).<div><div>Nothing can physically pass through the wall. It is immune to all damage and can’t be dispelled by dispel magic. A disintegrate spell destroys the wall instantly, however. The wall also extends into the Ethereal Plane, blocking ethereal travel through the wall.</div></div>
2129	2128	171	You create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-square panels. Each panel must be contiguous with another panel. In any form, the wall is 1 foot thick and lasts for the duration.<div>If the wall cuts through a creature’s space when it appears, the creature within its area is pushed to one side of the wall and must make a Dexterity saving throw. On a failed save, the creature takes 10d6 cold damage, or half as much damage on a successful save.<br></div><div>The wall is an object that can be damaged and thus breached. It has AC 12 and 30 hit points per 10-foot section, and it is vulnerable to fire damage. Reducing a 10-foot section of wall to 0 hit points destroys it and leaves behind a sheet of frigid air in the space the wall occupied. A creature moving through the sheet of frigid air for the first time on a turn must make a Constitution saving throw. That creature takes 5d6 cold damage on a failed save, or half as much damage on a successful one.&nbsp;<br></div>
2130	2128	122	When you cast this spell using a spell slot of 7th level or higher, the damage the wall deals when it appears increases by 2d6, and the damage from passing through the sheet of frigid air increases by 1d6, for each slot level above 6th.
2132	2131	171	A non-magical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is com posed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with at least one other panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick.<div>If the wall cuts through a creature’s space when it appears, the creature is pushed to one side of the wall (your choice). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its reaction to move up to its speed so that it is no longer enclosed by the wall.<br></div><div>The wall can have any shape you desire, though it can’t occupy the same space as a creature or object. The wall doesn’t need to be vertical or rest on any firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus, you can use this spell to bridge a chasm or create a ramp.<br></div><div>If you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create crenellations, battlements, and so on.<br></div><div>The wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 hit points per inch of thickness. Reducing a panel to 0 hit points destroys it and might cause connected panels to collapse at the DM’s discretion.<br></div><div>If you maintain your concentration on this spell for its whole duration, the wall becomes permanent and can’t be dispelled. Otherwise, the wall disappears when the spell ends.<br></div>
2134	2133	171	You create a wall of tough, pliable, tangled brush bristling with needle-sharp thorns. The wall appears within range on a solid surface and lasts for the duration. You choose to make the wall up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20-foot diameter and is up to 20 feet high and 5 feet thick. The wall blocks line of sight.<div>When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 7d8 piercing damage, or half as much damage on a successful save.<br></div><div><div>A creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature moves through the wall, it must spend 4 feet of movement. Furthermore, the first time a creature enters the wall on a turn or ends its turn there, the creature must&nbsp;make a Dexterity saving throw. It takes 7d8 slashing damage on a failed save, or half as much damage on a successful one.</div></div>
2135	2133	122	<div>When you cast this spell using a spell slot of 7th level or higher, both types of damage increase by 1d8 for each slot level above 6th.</div>
2137	2136	171	This spell wards a willing creature you touch and creates a mystic connection between you and the target until the spell ends. While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has resistance to all damage. Also, each time it takes damage, you take the same amount of damage.<div><div>The spell ends if you drop to 0 hit points or if you and the target become separated by more than 60 feet. It also ends if the spell is cast again on either of the connected creatures. You can also dismiss the spell as an action.</div></div>
2139	2138	171	<div>This spell grants up to ten willing creatures you can see within range the ability to breathe underwater until the spell ends. Affected creatures also retain their normal mode of respiration.</div>
2141	2140	171	This spell grants the ability to move across any liquid surface—such as water, acid, mud, snow, quicksand, or lava—as if it were harmless solid ground (creatures crossing molten lava can still take damage from the heat). Up to ten willing creatures you can see within range gain this ability for the duration.<div><div>If you target a creature submerged in a liquid, the spell carries the target to the surface of the liquid at a rate of 60 feet per round.</div></div>
2143	2142	171	You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are difficult terrain and lightly obscure their area.<div>If the webs aren’t anchored between two solid m asses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet.<br></div><div>Each creature that starts its turn in the webs or that enters them during its turn must make a Dexterity saving throw. On a failed save, the creature is restrained as long as it remains in the webs or until it breaks free.<br></div><div>A creature restrained by the webs can use its action to make a Strength check against your spell save DC. If it succeeds, it is no longer restrained.<br></div><div><div>The webs are flammable. Any 5-foot cube of webs exposed to fire burns away in 1 round, dealing 2d4 fire damage to any creature that starts its turn in the fire.</div></div>
2147	2146	171	You and up to ten willing creatures you can see within range assume a gaseous form for the duration, appearing as wisps of cloud. While in this cloud form, a creature has a flying speed of 300 feet and has resistance to damage from non-magical weapons. The only actions a creature can take in this form are the Dash action or to revert to its normal form. Reverting takes 1 minute, during which time a creature is incapacitated and can’t move. Until the spell ends, a creature can revert to cloud form, which also requires the 1-minute transformation.<div><div>If a creature is in cloud form and flying when the effect ends, the creature descends 60 feet per round for 1 minute until it lands, which it does safely. If it can’t land after 1 minute, the creature falls the remaining distance.</div></div>
2149	2148	171	A wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 50 feet long, 15 feet high, and 1 foot thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration.<div>When the wall appears, each creature within its area must make a Strength saving throw. A creature takes 3d8 bludgeoning damage on a failed save, or half as much damage on a successful one.<br></div><div><div>The strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects can’t pass through the wall. Loose, lightweight materials brought into the wall fly upward. Arrows, bolts, and other ordinary projectiles launched at targets behind the wall are deflected upward and automatically miss. (Boulders hurled by giants or siege engines, and similar projectiles, are unaffected.) Creatures in gaseous form can’t pass through it.</div></div>
2151	2150	171	<i>Wish</i> is the mightiest spell a mortal creature can cast. By simply speaking aloud, you can alter the very foundations of reality in accord with your desires.<div>The basic use of this spell is to duplicate any other spell of 8th level or lower. You don’t need to meet any requirements in that spell, including costly components. The spell simply takes effect.<br></div><div><div>Alternatively, you can create one of the following effects of your choice:</div><div>• You create one object of up to 25,000 gp in value that isn’t a magic item. The object can be no more than 300 feet in any dimension, and it appears in an unoccupied space you can see on the ground.</div><div>• You allow up to twenty creatures that you can see to regain all hit points, and you end all effects on them described in the greater restoration spell.</div><div>• You grant up to ten creatures that you can see resistance to a damage type you choose.</div><div>• You grant up to ten creatures you can see immunity to a single spell or other magical effect for 8 hours. For instance, you could make yourself and all your companions immune to a lich’s life drain attack.</div><div>• You undo a single recent event by forcing a reroll of any roll made within the last round (including your last turn). Reality reshapes itself to accommodate the new result. For example, a wish spell could undo an opponent’s successful save, a foe’s critical hit, or a friend’s failed save. You can force the reroll to be made with advantage or disadvantage, and you can choose whether to use the reroll or the original roll.</div></div><div>You might be able to achieve something beyond the scope of the above examples. State your wish to the DM as precisely as possible. The DM has great latitude in ruling what occurs in such an instance; the greater the wish, the greater the likelihood that something goes wrong. This spell might simply fail, the effect you desire might only be partly achieved, or you might suffer some unforeseen consequence as a result of how you worded the wish. For example, wishing that a villain were dead might propel you forward in time to a period when that villain is no longer alive, effectively removing you from the game. Similarly, wishing for a legendary magic item or artifact might instantly transport you to the presence of the item’s current owner.<br></div><div><div>The stress of casting this spell to produce any effect other than duplicating another spell weakens you. After enduring that stress, each time you cast a spell until you finish a long rest, you take 1d10 necrotic damage per level of that spell. This damage can’t be reduced or prevented in any way. In addition, your Strength drops to 3, if it isn’t 3 or lower already, for 2d4 days. For each of those days that you spend resting and doing nothing more than light activity, your remaining recovery time decreases by 2 days. Finally, there is a 33 percent chance that you are unable to cast wish ever again if you suffer this stress.</div></div>
2153	2152	171	<div>A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target. Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell’s range or if it has total cover from you.</div>
2154	2152	122	<div>When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot level above 1st.</div>
2156	2155	171	You and up to five willing creatures within 5 feet of you instantly teleport to a previously designated sanctuary. You and any creatures that teleport with you appear in the nearest unoccupied space to the spot you designated when you prepared your sanctuary (see below). If you cast this spell without first preparing a sanctuary, the spell has no effect.<div><div>You must designate a sanctuary by casting this spell within a location, such as a temple, dedicated to or strongly linked to your deity. If you attempt to cast the spell in this manner in an area that isn’t dedicated to your deity, the spell has no effect.</div></div>
2158	2157	171	<div>The next time you hit with a melee weapon attack during this spell’s duration, your attack deals an extra 1d6 psychic damage. Additionally, if the target is a creature, it must make a Wisdom saving throw or be frightened of you until the spell ends. As an action, the creature can make a Wisdom check against your spell save DC to steel its resolve and end this spell.</div>
2160	2159	171	You create a magical zone that guards against deception in a 15-foot-radius sphere centered on a point of your choice within range. Until the spell ends, a creature that enters the spell’s area for the first time on a turn or starts its turn there must make a Charisma saving throw. On a failed save, a creature can’t speak a deliberate lie while in the radius. You know whether each creature succeeds or fails on its saving throw.<div>An affected creature is aware of the spell and can thus avoid answering questions to which it would normally respond with a lie. Such a creature can be evasive in its answers as long as it remains within the boundaries of the truth.<br></div>
2171	2170	171	You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.
2172	2170	122	When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot level above 1st.
2174	2173	171	You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range. The hand lasts for the spell’s duration, and it moves at your command, mimicking the movements of your own hand.<div>The hand is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0). The hand doesn’t fill its space.<br></div><div>When you cast the spell and as a bonus action on your subsequent turns, you can move the hand up to 60 feet and then cause one of the following effects with it.<br></div>
2175	2173	122	<div>When you cast this spell using a spell slot of 6th level or higher, the damage from the clenched fist option increases by 2d8 and the damage from the grasping hand increases by 2d6 for each slot level above 5th.</div>
2176	2173	944	<div>The hand strikes one creature or object within 5 feet of it. Make a melee spell attack for&nbsp;the hand using your game statistics. On a hit, the target takes 4d8 force damage.</div>
2177	2173	944	The hand attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the hand’s Strength contested by the Strength (Athletics) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target to remain within 5 feet of it.
2178	2173	944	The hand attempts to grapple a Huge or smaller creature within 5 feet of it. You use the hand’s Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the hand is grappling the target, you can use a bonus action to have the hand crush it. W hen you do so, the target takes bludgeoning damage equal to 2d6 + your spellcasting ability modifier.
2179	2173	944	The hand interposes itself between you and a creature you choose until you give the hand a different command. The hand moves to stay between you and the target, providing you with half cover against the target. The target can't move through the hand’s space if its Strength score is less than or equal to the hand’s Strength score. If its Strength score is higher than the hand’s Strength score, the target can move toward you through the hand’s space, but that space is difficult terrain for the target.&nbsp;
2181	2180	171	A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see 100 feet directly above you. The spell fails if you can’t see a point in the air where the storm cloud could appear (for example, if you are in a room that can’t accommodate the cloud).<div>When you cast the spell, choose a point you can see within range. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a Dexterity saving throw. A creature takes 3d10 lightning damage on a failed save, or half as much damage on a successful one. On each of your turns until the spell ends, you can use your action to call down lightning in this way again, targeting the same point or a different one.<br></div><div>If you are outdoors in stormy conditions when you cast this spell, the spell gives you control over the existing storm instead of creating a new one. Under such conditions, the spell’s damage increases by 1d10.<br></div>
2182	2180	122	When you cast this spell using a spell slot of 4th or higher level, the damage increases by 1d10 for each slot level above 3rd.
2184	2183	171	You create a bolt of lightning that arcs toward a target of your choice that you can see within range. Three bolts then leap from that target to as many as three other targets, each of which must be within 30 feet of the first target. A target can be a creature or an object and can be targeted by only one of the bolts.<div>A target must make a Dexterity saving throw. The target takes 10d8 lightning damage on a failed save, or half as much damage on a successful one.<br></div>
2185	2183	122	<div>When you cast this spell using a spell slot of 7th level or higher, one additional bolt leaps from the first target to another target for each slot level above 6th.</div>
2187	2186	171	<div>You strike the ground, creating a burst of divine energy that ripples outward from you. Each creature you choose within 30 feet of you must succeed on a Constitution saving throw or take 5d6 thunder damage, as well as 5d6 radiant or necrotic damage (your choice), and be knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn’t knocked prone.</div>
2189	2188	171	You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several.<div>Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage.</div>
2190	2188	122	When you cast this spell using a spell slot of 3rd level or higher, you create one additional ray for each slot level above 2nd.
2192	2191	171	You attempt to turn one creature that you can see within range into stone. If the target’s body is made of flesh, the creature must make a Constitution saving throw. On a failed save, it is restrained as its flesh begins to harden. On a successful save, the creature isn’t affected.<div>A creature restrained by this spell must make another Constitution saving throw at the end of each of its turns. If it successfully saves against this spell three times, the spell ends. If it fails its saves three times, it is turned to stone and subjected to the petrified condition for the duration. The successes and failures don’t need to be consecutive; keep track of both until the target collects three of a kind.<br></div><div>If the creature is physically broken while petrified, it suffers from similar deformities if it reverts to its original state.<br></div><div><div>If you maintain your concentration on this spell for the entire possible duration, the creature is turned to stone until the effect is removed.</div></div>
2194	2193	171	<div>You touch a willing creature who isn’t wearing armor, and a protective magical force surrounds it until the spell ends. The target’s base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action.</div>
2196	2195	171	You open a gateway to the dark between the stars, a region infested with unknown horrors. A 20-foot-radius sphere of blackness and bitter cold appears, centered on a point with range and lasting for the duration. This void is filled with a cacophony of soft whispers and slurping noises that can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within the area are blinded.<div><div>The void creates a warp in the fabric of space, and the area is difficult terrain. Any creature that starts its turn in the area takes 2d6 cold damage. Any creature that ends its turn in the area must succeed on a Dexterity saving throw or take 2d6 acid damage as milky, otherworldly tentacles rub against it.</div></div>
2198	2197	171	You alter time around up to six creatures of your choice in a 40-foot cube within range. Each target must succeed on a Wisdom saving throw or be affected by this spell for the duration.<div>An affected target’s speed is halved, it takes a -2 penalty to AC and Dexterity saving throws, and it can’t use reactions. On its turn, it can use either an action or a bonus action, not both. Regardless of the creature’s abilities or magic items, it can’t make more than one melee or ranged attack during its turn.<br></div><div>If the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or higher, the spell doesn’t take effect until the creature’s next turn, and the creature must use its action on that turn to complete the spell. If it can’t, the spell is wasted.<br></div><div><div>A creature affected by this spell makes another Wisdom saving throw at the end of its turn. On a successful save, the effect ends for it.</div></div>
2201	2200	171	A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell.
2202	2200	122	<div>When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.</div>
2211	2210	171	<div>You touch a dead humanoid or a piece of a dead humanoid. Provided that the creature has been dead no longer than 10 days, the spell forms a new adult body for it and then calls the soul to enter that body. If the target’s soul isn’t free or willing to do so, the spell fails.</div><div>The magic fashions a new body for the creature to inhabit, which likely causes the creature’s race to change. The DM rolls a d100 and consults the following table to determine what form the creature takes when restored to life, or the DM chooses a form.</div><div>The reincarnated creature recalls its former life and experiences. It retains the capabilities it had in its original form, except it exchanges its original race for the new one and changes its racial traits accordingly.</div>
2215	2214	171	<div>You can see and hear a particular creature you choose that is on the same plane of existence as you. The target must make a Wisdom saving throw, which is modified by how well you know the target and the sort of physical connection you have to it. If a target knows you're casting this spell, it can fail the saving throw voluntarily if it wants to be observed.</div><div>On a successful save, the target isn’t affected, and you can’t use this spell against it again for 24 hours.</div><div>On a failed save, the spell creates an invisible sensor within 10 feet of the target. You can see and hear through the sensor as if you were there. The sensor moves with the target, remaining within 10 feet of it for the duration. A creature that can see invisible objects sees the sensor as a luminous orb about the size of your fist.</div><div>Instead of targeting a creature, you can choose a location you have seen before as the target of this spell. When you do, the sensor appears at that location and doesn’t move.</div>
2221	2220	171	This spell instantly transports you and up to eight willing creatures of your choice that you can see within range, or a single object that you can see within range, to a destination you select. If you target an object, it must be able to fit entirely inside a 10-foot cube, and it can’t be held or carried by an unwilling creature.<div><div>The destination you choose must be known to you, and it must be on the same plane of existence as you. Your familiarity with the destination determines whether you arrive there successfully. The DM rolls d 100 and consults the table.</div></div>
2224	2220	944	<div>“Permanent circle” means a permanent teleportation circle whose sigil sequence you know. “Associated object” means that you possess an object taken from the desired destination within the last six months, such as a book from a wizard’s library, bed linen from a royal suite, or a chunk of marble from a lich’s secret tomb.</div><div>“Very familiar” is a place you have been very often, a place you have carefully studied, or a place you can see when you cast the spell. “Seen casually” is someplace you have seen more than once but with which you aren’t very familiar. “Viewed once” is a place you have seen once, possibly using magic. “Description” is a place whose location and appearance you know through someone else’s description, perhaps from a map.</div><div>“False destination” is a place that doesn’t exist. Perhaps you tried to scry an enemy’s sanctum but instead viewed an illusion, or you are attempting to teleport to a familiar location that no longer exists.</div>
2225	2220	944	You and your group (or the target object) appear where you want to.
2226	2220	944	You and your group (or the target object) appear a random distance away from the destination in a random direction. Distance off target is 1d10 x 1d10 percent of the distance that was to be traveled. For example, if you tried to travel 120 miles, landed off target, and rolled a 5 and 3 on the two d 10s, then you would be off target by 15 percent, or 18 miles. The DM determines the direction off target randomly by rolling a d8 and designating 1 as north, 2 as northeast, 3 as east, and so on around the points of the compass. If you were teleporting to a coastal city and wound up 18 miles out at sea, you could be in trouble.
2227	2220	944	You and your group (or the target object) wind up in a different area that’s visually or thematically similar to the target area. If you are heading for your home laboratory, for example, you might wind up in another wizard’s laboratory or in an alchemical supply shop that has many of the same tools and implements as your laboratory. Generally, you appear in the closest similar place, but since the spell has no range limit, you could conceivably wind up anywhere on the plane.
2228	2220	944	The spell’s unpredictable magic results in a difficult journey. Each teleporting creature (or the target object) takes 3d10 force damage, and the DM rerolls on the table to see where you wind up (multiple mishaps can occur, dealing damage each time).
2244	2243	171	<div>Purifying energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. Each non-hostile creature in the aura (including you) can’t become diseased, has resistance to poison damage, and has advantage on saving throws against effects that cause any of the following conditions: blinded, charmed, deafened, frightened, paralyzed, poisoned, and stunned.</div>
2250	2249	171	You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it is broken or the spell is dispelled or suppressed. Casting <i>knock</i> on the object suppresses <i>arcane lock</i> for 10 minutes.<div><div>While affected by this spell, the object is more difficult to break or force open; the DC to break it or pick any locks on it increases by 10.</div></div>
\.


--
-- TOC entry 2553 (class 0 OID 16422)
-- Dependencies: 188
-- Data for Name: adm_core_dice; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_core_dice (id, "dieCount", "dieType", multiplier, modifier, divisor) FROM stdin;
124	1	4	1	0	1
127	1	8	1	0	1
129	1	6	1	0	1
141	1	10	1	0	1
145	1	12	1	0	1
147	2	6	1	0	1
535	1	2	1	0	1
536	1	3	1	0	1
537	1	20	1	0	1
538	1	100	1	0	1
539	3	6	1	0	1
540	2	4	1	0	1
541	2	8	1	0	1
542	2	10	1	0	1
543	2	12	1	0	1
544	2	20	1	0	1
545	3	4	1	0	1
546	3	8	1	0	1
547	3	10	1	0	1
548	3	12	1	0	1
549	3	20	1	0	1
551	4	4	1	0	1
552	4	6	1	0	1
553	4	8	1	0	1
554	4	10	1	0	1
555	4	12	1	0	1
556	5	4	1	0	1
557	5	6	1	0	1
558	5	8	1	0	1
559	5	10	1	0	1
560	5	12	1	0	1
561	2	1	1	0	1
562	3	1	1	0	1
563	4	1	1	0	1
162	0	0	1	0	1
495	1	1	1	0	1
848	2	4	10	0	1
1052	6	10	1	0	1
1062	8	8	1	0	1
1098	10	8	1	0	1
1113	8	6	1	0	1
1304	12	6	1	0	1
1340	3	4	10	0	1
1344	10	6	1	40	1
1439	1	4	1	4	1
1442	1	6	1	3	1
1472	7	8	1	30	1
1510	7	10	1	0	1
1576	20	1	1	0	1
1613	14	6	1	0	1
1667	10	1	1	0	1
1668	40	1	1	0	1
1776	1	4	1	1	1
1790	700	1	1	0	1
1813	20	6	1	0	1
1855	10	6	1	0	1
1945	4	8	1	15	1
2053	6	8	1	0	1
\.


--
-- TOC entry 2552 (class 0 OID 16413)
-- Dependencies: 187
-- Data for Name: adm_core_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_core_item (id, "itemName", "itemTypeId", "resourceId") FROM stdin;
1723	Inflict Wounds	119	2
114	Minor Items	50	2
123	Club	85	2
125	Dagger	85	2
126	Greatclub	85	2
128	Handaxe	85	2
2	Player's Handbook	1	0
3	Dungeon Master's Guide	1	0
4	Monster Manual	1	0
5	Volo's Guide to Monsters	1	0
7	Bludgeoning	6	2
8	Piercing	6	2
9	Slashing	6	2
10	Acid	6	2
11	Cold	6	2
12	Fire	6	2
13	Force	6	2
14	Lightning	6	2
15	Necrotic	6	2
16	Poison	6	2
17	Psychic	6	2
18	Radiant	6	2
19	Thunder	6	2
25	Strength	24	2
26	Dexterity	24	2
27	Constitution	24	2
28	Intelligence	24	2
29	Wisdom	24	2
30	Charisma	24	2
31	Light	20	2
32	Medium	20	2
33	Heavy	20	2
34	Shield	20	2
35	Melee	22	2
36	Ranged	22	2
37	Martial	21	2
38	Simple	21	2
39	Ammunition	23	2
40	Finesse	23	2
41	Heavy	23	2
42	Light	23	2
43	Loading	23	2
44	Reach	23	2
45	Special	23	2
46	Thrown	23	2
47	Two-Handed	23	2
48	Versatile	23	2
56	General	50	2
57	Ammunition	50	2
58	Arcane Focus	50	2
59	Druidic Focus	50	2
60	Holy Symbol	50	2
61	Tool	50	2
62	Artisan's Tool	50	2
63	Gaming Set	50	2
64	Musical Instrument	50	2
75	Arrow	67	2
76	Bolt	67	2
77	Blowgun Dart	67	2
78	Sling Bullet	67	2
79	Assign List	66	2
80	Select from Category	66	2
81	Select from List	66	2
82	Common	68	2
83	Exotic	68	2
84	Secret	68	2
85	Common	69	2
86	Dwarvish	69	2
87	Elvish	69	2
88	Draconic	69	2
89	Infernal	69	2
90	Celestial	69	2
91	None	69	2
92	Armor	65	2
93	Artisan's Tool	65	2
94	Gaming Set	65	2
95	Language	65	2
96	Musical Instrument	65	2
97	Saving Throw	65	2
98	Skill	65	2
99	Tool	65	2
100	Vehicle	65	2
101	Weapon	65	2
102	Weapon: Specific	65	2
103	Material	72	2
104	Verbal	72	2
105	Somatic	72	2
106	Abjuration	70	2
107	Conjuration	70	2
108	Divination	70	2
109	Enchantment	70	2
110	Evocation	70	2
111	Illusion	70	2
112	Necromancy	70	2
113	Transmutation	70	2
130	Javelin	85	2
131	Light Hammer	85	2
132	Mace	85	2
133	Quarterstaff	85	2
134	Sickle	85	2
135	Spear	85	2
136	Crossbow, Light	85	2
137	Dart	85	2
138	Shortbow	85	2
139	Sling	85	2
140	Battleaxe	85	2
142	Flail	85	2
143	Glaive	85	2
144	Greataxe	85	2
146	Greatsword	85	2
148	Halberd	85	2
149	Lance	85	2
150	Longsword	85	2
151	Maul	85	2
152	Morningstar	85	2
153	Pike	85	2
154	Rapier	85	2
155	Scimitar	85	2
156	Shortsword	85	2
157	Trident	85	2
158	War Pick	85	2
159	Warhammer	85	2
160	Whip	85	2
161	Blowgun	85	2
1706	Ice Storm	119	2
1726	Insect Plague	119	2
164	Crossbow, Hand	85	2
165	Crossbow, Heavy	85	2
166	Longbow	85	2
167	None	6	2
168	Net	85	2
1737	Legend Lore	119	2
172	Padded	88	2
174	Leather	88	2
176	Studded Leather	88	2
178	Hide	88	2
180	Chain Shirt	88	2
184	Breastplate	88	2
182	Scale Mail	88	2
186	Half Plate	88	2
188	Ring Mail	88	2
190	Chain Mail	88	2
192	Splint	88	2
194	Plate	88	2
196	Shield	88	2
198	Abacus	90	2
199	Improvised	21	2
1746	Levitate	119	2
1754	Lightning Bolt	119	2
204	Acid	90	2
206	Alchemist's Fire	90	2
208	Arrows	90	2
209	Blowgun Needles	90	2
210	Crossbow Bolts	90	2
211	Sling Bullets	90	2
212	Antitoxin	90	2
214	Crystal	90	2
215	Orb	90	2
216	Rod	90	2
217	Staff	90	2
218	Wand	90	2
219	Backpack	90	2
220	Ball Bearings	90	2
222	Barrel	90	2
223	Basket	90	2
224	Bedroll	90	2
225	Bell	90	2
226	Blanket	90	2
227	Block and Tackle	90	2
228	Book	90	2
230	Bottle, Glass	90	2
231	Bucket	90	2
232	Caltrops	90	2
234	Candle	90	2
236	Case, Crossbow Bolt	90	2
238	Case, Map/Scroll	90	2
240	Chain	90	2
242	Chalk	90	2
243	Chest	90	2
244	Climber's Kit	90	2
246	Clothes, Common	90	2
247	Clothes, Costume	90	2
248	Clothes, Fine	90	2
249	Clothes, Traveler's	90	2
250	Component Pouch	90	2
252	Crowbar	90	2
254	Sprig of Mistletoe	90	2
255	Totem	90	2
256	Wooden Staff	90	2
257	Yew Wand	90	2
258	Fishing Tackle	90	2
260	Flask	90	2
261	Tankard	90	2
262	Grappling Hook	90	2
263	Hammer	90	2
264	Hammer, Sledge	90	2
265	Healer's Kit	90	2
267	Amulet	90	2
268	Emblem	90	2
269	Reliquary	90	2
270	Holy Water	90	2
272	Hourglass	90	2
273	Hunting Trap	90	2
275	Ink	90	2
276	Ink Pen	90	2
277	Jug	90	2
278	Pitcher	90	2
279	Ladder	90	2
280	Lamp	90	2
282	Lantern, Bullseye	90	2
284	Lantern, Hooded	90	2
286	Lock	90	2
288	Magnifying Glass	90	2
290	Manacles	90	2
292	Mess Kit	90	2
294	Mirror, Steel	90	2
295	Oil	90	2
297	Paper	90	2
298	Parchment	90	2
299	Perfume	90	2
300	Pick, Miner's	90	2
301	Piton	90	2
302	Poison, Basic	90	2
304	Pole	90	2
305	Pot, Iron	90	2
306	Potion of Healing	90	2
308	Pouch	90	2
310	Quiver	90	2
312	Ram, Portable	90	2
314	Rations	90	2
316	Robes	90	2
317	Rope, Hempen	90	2
319	Rope, Silk	90	2
321	Sack	90	2
322	Scale, Merchant's	90	2
324	Sealing Wax	90	2
325	Shovel	90	2
326	Signal Wistle	90	2
327	Signet Ring	90	2
328	Soap	90	2
329	Spellbook	90	2
331	Spikes, Iron	90	2
332	Spyglass	90	2
334	Tent, Two-Person	90	2
336	Tinderbox	90	2
338	Torch	90	2
1763	Longstrider	119	2
1788	Mass Heal	119	2
340	Vial	90	2
341	Waterskin	90	2
342	Whetstone	90	2
350	Alchemist's Supplies	90	2
351	Brewer's Supplies	90	2
352	Calligrapher's Supplies	90	2
353	Carpenter's Tools	90	2
354	Cartographer's Tools	90	2
355	Cobbler's Tools	90	2
356	Cook's Utensils	90	2
357	Glassblower's Tools	90	2
358	Jeweler's Tools	90	2
359	Leatherworker's Tools	90	2
360	Mason's Tools	90	2
361	Painter's Supplies	90	2
362	Potter's Tools	90	2
363	Smith's Tools	90	2
364	Tinker's Tools	90	2
365	Weaver's Tools	90	2
366	Woodcarver's Tools	90	2
367	Dice Set	90	2
368	Dragonchess Set	90	2
369	Playing Card Set	90	2
370	Three-Dragon Ante Set	90	2
371	Bagpipes	90	2
372	Drum	90	2
373	Dulcimer	90	2
374	Flute	90	2
375	Lute	90	2
376	Lyre	90	2
377	Horn	90	2
378	Pan Flute	90	2
379	Shawm	90	2
380	Viol	90	2
381	Disguise Kit	90	2
383	Forgery Kit	90	2
385	Herbalism Kit	90	2
387	Navigator's Tools	90	2
389	Poisoner's Kit	90	2
391	Thieves' Tools	90	2
1709	Identify	119	2
1729	Invisibility	119	2
1739	Leomund's Secret Chest	119	2
1748	Light	119	2
400	Land	395	2
1757	Locate Animals or Plants	119	2
1766	Mage Hand	119	2
403	Water	395	2
1777	Magic Mouth	119	2
410	Acrobatics	396	2
411	Common	394	2
412	Dwarvish	394	2
413	Elvish	394	2
414	Giant	394	2
415	Gnomish	394	2
416	Goblin	394	2
417	Halfling	394	2
418	Orc	394	2
419	Abyssal	394	2
420	Celestial	394	2
421	Deep Speech	394	2
422	Draconic	394	2
423	Infernal	394	2
424	Auran	394	2
425	Ignan	394	2
426	Terran	394	2
427	Aquan	394	2
428	Sylvan	394	2
429	Undercommon	394	2
430	Druidic	394	2
431	Thieves' Cant	394	2
432	Athletics	396	2
433	Sleight of Hand	396	2
434	Stealth	396	2
435	Arcana	396	2
436	History	396	2
437	Investigation	396	2
438	Nature	396	2
439	Religion	396	2
440	Animal Handling	396	2
441	Insight	396	2
442	Medicine	396	2
443	Perception	396	2
444	Survival	396	2
445	Deception	396	2
446	Performance	396	2
447	Persuasion	396	2
448	Intimidation	396	2
449	1 action	71	2
450	Instantaneous	73	2
451	Touch	74	2
457	Armor	50	2
458	Weapon	50	2
461	1 minute	71	2
462	1 hour	71	2
463	10 minutes	71	2
464	1 bonus action	71	2
472	24 hours	73	2
473	8 hours	73	2
474	1 mile	74	2
494	String	49	2
496	Alms Box	49	2
484	Arcane Focus	483	2
485	Druidic Focus	483	2
486	Bardic Focus	483	2
487	Divine Focus	483	2
497	Incense	49	2
500	Burglar's Pack	49	2
501	Equipment Pack	50	2
502	Diplomat's Pack	49	2
503	Dungeoneer's Kit	49	2
505	Explorer's Pack	49	2
506	Priest's Pack	49	2
499	Clothes, Vestments	49	2
498	Censer	49	2
507	Small Knife	49	2
508	Sand	49	2
509	Scholar's Pack	49	2
504	Entertainer's Pack	49	2
510	Incense	49	2
606	Acolyte	116	2
607	Shelter of the Faithful	120	2
608	Acolyte: Assign List - 0	116	2
609	Acolyte: Select from Category - 1	116	2
619	Scroll of Pedigree	49	2
620	Charlatan	116	2
621	False Identity	120	2
622	Charlatan: Assign List - 0	605	2
623	Charlatan: Assign List - 1	605	2
635	Criminal	116	2
636	Criminal Contact	120	2
637	Criminal: Assign List - 0	605	2
638	Criminal: Assign List - 1	605	2
639	Criminal: Select from Category - 2	605	2
651	Entertainer	116	2
652	By Popular Demand	120	2
653	Entertainer: Assign List - 0	605	2
654	Entertainer: Assign List - 1	605	2
655	Entertainer: Select from Category - 2	605	2
667	Folk Hero	116	2
668	Rustic Hospitality	120	2
669	Folk Hero: Assign List - 0	605	2
670	Folk Hero: Select from Category - 1	605	2
671	Folk Hero: Assign List - 2	605	2
683	Guild Artisan	116	2
684	Guild Membership	120	2
685	Guild Artisan: Assign List - 0	605	2
686	Guild Artisan: Select from Category - 1	605	2
687	Guild Artisan: Select from Category - 2	605	2
699	Hermit	116	2
700	Discovery	120	2
701	Hermit: Assign List - 0	605	2
702	Hermit: Assign List - 1	605	2
703	Hermit: Select from Category - 2	605	2
715	Noble	116	2
716	Position of Privilege	120	2
717	Noble: Assign List - 0	605	2
718	Noble: Select from Category - 1	605	2
719	Noble: Select from Category - 2	605	2
729	Outlander	116	2
730	Wanderer	120	2
731	Outlander: Assign List - 0	605	2
732	Outlander: Select from Category - 1	605	2
733	Outlander: Select from Category - 2	605	2
745	Sage	116	2
746	Researcher	120	2
747	Sage: Assign List - 0	605	2
748	Sage: Select from Category - 1	605	2
760	Sailor	116	2
761	Ship's Passage	120	2
762	Sailor: Assign List - 0	605	2
763	Sailor: Assign List - 1	605	2
764	Sailor: Assign List - 2	605	2
774	Soldier	116	2
775	Military Rank	120	2
776	Soldier: Assign List - 0	605	2
777	Soldier: Assign List - 1	605	2
778	Soldier: Select from Category - 2	605	2
792	Urchin	116	2
793	City Streets	120	2
794	Urchin: Assign List - 0	605	2
795	Urchin: Assign List - 1	605	2
805	60 feet	74	2
807	Acid Splash	119	2
809	30 feet	74	2
810	Aid	119	2
860	Deafened	849	2
861	Poisoned	849	2
862	Prone	849	2
863	Restrained	849	2
864	Stunned	849	2
865	Unconscious	849	2
845	Hit Point Maximum	844	2
846	Current Hit Points	844	2
847	Bonus/Penalty to Stat	843	2
851	Charmed	849	2
853	Frightened	849	2
854	Grappled	849	2
855	Incapacitated	849	2
856	Invisible	849	2
857	Paralyzed	849	2
858	Petrified	849	2
859	Blinded	849	2
866	Advantage	843	2
867	Disadvantage	843	2
868	Resistance	843	2
869	Vulnerability	843	2
870	Advantage on Saving Throw	843	2
871	Disadvantage on Saving Throw	843	2
872	Immunity	843	2
883	Alarm	119	2
886	Self	74	2
887	Concentration, up to 1 hour	73	2
888	Alter Self	119	2
890	Animal Friendship	119	2
893	Animal Messenger	119	2
896	Concentration, up to 24 hours	73	2
897	Animal Shapes	119	2
899	10 feet	74	2
900	Animate Dead	119	2
903	120 feet	74	2
905	Concentration, up to 1 minute	73	2
937	Animate Object	119	2
942	Antilife Shell	119	2
972	Self (10-foot-radius sphere)	74	2
973	Antimagic Field	119	2
982	10 days	73	2
983	Antipathy/Sympathy	119	2
988	Arcane Eye	119	2
990	500 feet	74	2
991	Concentration, up to 10 minutes	73	2
992	Arcane Gate 	119	2
994	1 hour	73	2
995	Armor of Agathys	119	2
998	Self (10-foot-radius)	74	2
999	Arms of Hadar	119	2
1002	Special	73	2
1003	Astral Projection	119	2
1711	Illusory Script	119	2
1007	Augury	119	2
1009	Self (30-foot radius)	74	2
1010	Aura of Life	119	2
1012	Aura of Vitality	119	2
1014	8 hours	71	2
1015	Awaken	119	2
1017	Bane	119	2
1732	Jump Distance	844	2
1022	Banishment	119	2
1741	Self (10-foot-radius hemisphere)	74	2
1029	Banishing Smite	119	2
1031	Barkskin	119	2
1033	Beacon of Hope	119	2
1035	Beast Sense	119	2
1037	Bestow Curse	119	2
1047	90 feet	74	2
1050	Blade Barrier	119	2
1053	1 round	73	2
1054	Blade Ward	119	2
1056	Bless	119	2
1069	Blight	119	2
1072	Blinding Smite	119	2
1074	1 minute	73	2
1075	Blindness/Deafness	119	2
1078	Blink	119	2
1080	Blur	119	2
1082	Branding Smite	119	2
1085	Self (15-foot cone)	74	2
1086	Burning Hands	119	2
1092	Calm Emotions	119	2
1094	150 feet	74	2
1099	Charm Person	119	2
1104	Chill Touch	119	2
1106	Select from list in description	6	2
1107	Chromatic Orb	119	2
1110	Circle of Death	119	2
1114	Circle of Power	119	2
1116	Clairvoyance	119	2
1118	Clone	119	2
1120	Cloud of Daggers	119	2
1123	Cloudkill	119	2
1126	Color Spray	119	2
1129	Command	119	2
1137	Commune	119	2
1139	Commune with Nature	119	2
1141	Compelled Duel	119	2
1143	Comprehend Languages	119	2
1145	Compulsion	119	2
1147	Self (60-foot cone)	74	2
1148	Cone of Cold	119	2
1178	Confusion	119	2
1183	Conjure Animals	119	2
1186	Conjure Barrage	119	2
1188	Conjure Celestial	119	2
1191	Conjure Elemental	119	2
1194	Conjure Fey	119	2
1197	Conjure Minor Elementals	119	2
1200	Conjure Volley	119	2
1202	Conjure Woodland Being	119	2
1205	Contact Other Plane	119	2
1207	7 days	73	2
1208	Contagion	119	2
1216	Contingency	119	2
1218	Until dispelled	73	2
1219	Continual Flame	119	2
1221	300 feet	74	2
1228	Self (5-mile radius)	74	2
1229	Concentration, up to 8 hours	73	2
1242	Control Water	119	2
1250	Control Weather	119	2
1255	Control Weather	119	2
1263	5 feet	74	2
1264	Cordon of Arrows	119	2
1267	Counterspell	119	2
1270	Create Food and Water	119	2
1272	Create or Destroy Water	119	2
1276	Create Undead	119	2
1279	Creation	119	2
1284	Crown of Madness	119	2
1286	Crusader's Mantle	119	2
1291	Dancing Lights	119	2
1293	Darkness	119	2
1295	Darkvision	119	2
1297	Daylight	119	2
1299	Death Ward	119	2
1305	Delayed Blast Fireball	119	2
1308	Demiplane	119	2
1314	Detect Evil and Good	119	2
1316	Detect Magic	119	2
1318	Detect Poison and Disease	119	2
1320	Detect Thoughts	119	2
1322	Dimension Door	119	2
1324	Disguise Self	119	2
1341	Disintegrate	119	2
1345	Dispel Evil and Good	119	2
1349	Dispel Magic	119	2
1352	Dissonant Whispers	119	2
1355	Divination	119	2
1357	Divine Favor	119	2
1359	Divine Word	119	2
1361	Dominate Beast	119	2
1364	Dominate Monster	119	2
1367	Dominate Person	119	2
1370	Drawmij's Instant Summons	119	2
1372	Special	74	2
1373	Dream	119	2
1375	Druidcraft	119	2
1377	Earthquake	119	2
1382	Melee	1381	2
1383	Ranged	1381	2
1384	Ranged Spell	1381	2
1385	Eldritch Blast	119	2
1387	Elemental Weapon	119	2
1390	Enhance Ability	119	2
1399	Enlarge/Reduce	119	2
1403	Ensnaring Strike	119	2
1406	Entangle	119	2
1408	Enthrall	119	2
1410	Up to 8 hours	73	2
1411	Etherealness	119	2
1414	Evard's Black Tentacles	119	2
1416	Expeditious Retreat	119	2
1418	Select from description	849	2
1419	Eyebite	119	2
1424	Fabricate	119	2
1426	Faerie Fire	119	2
1429	Temporary Hit Points	844	2
1713	Imprisonment	119	2
1733	Jump	119	2
1742	Leomund's Tiny Hut	119	2
1750	Lightning Arrow	119	2
1759	Locate Creature	119	2
1768	Magic Circle	119	2
1448	False Life	119	2
1451	Self (30-foot cone)	74	2
1452	Fear	119	2
1454	1 reaction	71	2
1455	Feather Fall	119	2
1457	Feeblemind	119	2
1459	Feign Death	119	2
1461	Find Familiar	119	2
1463	Find Steed	119	2
1465	Concentration, up to 1 day	73	2
1466	Find the Path	119	2
1468	Find Traps	119	2
1470	Finger of Death	119	2
1779	Magic Weapon	119	2
1476	Fireball	119	2
1480	Line	1479	2
1481	Cone	1479	2
1482	Cube	1479	2
1483	Sphere	1479	2
1484	Cylinder	1479	2
1487	Inch	1485	2
1488	Foot	1485	2
1489	Mile	1485	2
1490	Second	1486	2
1491	Minute	1486	2
1492	Hour	1486	2
1493	Day	1486	2
1494	Week	1486	2
1495	Fortnight	1486	2
1496	Month	1486	2
1497	Year	1486	2
1498	Decade	1486	2
1499	Century	1486	2
1500	Round	1486	2
1501	Action	1486	2
1502	Bonus Action	1486	2
1503	Reaction	1486	2
1504	Fire Bolt	119	2
1506	Fire Shield	119	2
1508	Fire Storm	119	2
1511	Flame Blade	119	2
1514	Multiple types (see description)	6	2
1518	Flaming Sphere	119	2
1523	Fly	119	2
1526	Fog Cloud	119	2
1529	1 day	73	2
1530	Forbiddence	119	2
1532	100 feet	74	2
1533	Forcecage	119	2
1535	Foresight	119	2
1537	Freedom of Movement	119	2
1539	Friends	119	2
1541	Gaseous Form	119	2
1543	Gate	119	2
1545	30 days	73	2
1546	Geas	119	2
1549	Gentle Repose	119	2
1551	Giant Insect	119	2
1553	Glibness	119	2
1555	Globe of Invulnerability	119	2
1558	Until dispelled or triggered	73	2
1559	Glyph of Warding	119	2
1564	Goodberry	119	2
1566	Grasping Vine	119	2
1568	Grease	119	2
1570	Greater Invisibility	119	2
1572	Greater Restoration	119	2
1577	Guards and Wards	119	2
1583	Guidance	119	2
1585	Guiding Bolt	119	2
1588	Self (60-foot line)	74	2
1591	Gust of Wind	119	2
1596	24 hours	71	2
1597	Hallow	119	2
1609	Hallucinatory Terrain	119	2
1611	Harm	119	2
1614	Walking Speed	844	2
1615	AC	844	2
1616	Action per turn	844	2
1617	Multiply a Stat	843	2
1618	Haste	119	2
1626	Heat Metal	119	2
1629	Hellish Rebuke	119	2
1632	Heroes' Feast	119	2
1637	Hex	119	2
1640	Hold Monster	119	2
1643	Hold Person	119	2
1646	Holy Aura	119	2
1721	Incendiary Cloud	119	2
1650	Hunter's Mark	119	2
1653	Hypnotic Pattern	119	2
1655	Spellcasting Ability	24	2
1656	Healing	6	2
1657	Cure Wounds	119	2
1735	Knock	119	2
1664	Heal	119	2
1669	Healing Word	119	2
1744	Lesser Restoration	119	2
1753	Self (100-foot line)	74	2
1761	Locate Object	119	2
1771	Magic Jar	119	2
1782	Major Image	119	2
1785	Mass Cure Wounds	119	2
1690	Flame Strike	119	2
1693	Guardian of Faith	119	2
1695	Hail of Thorns	119	2
1699	Half damage	1698	2
1700	No damage	1698	2
1701	Cancel effect	1698	2
1702	Special	1698	2
1791	Mass Healing Word	119	2
1797	Mass Suggestion	119	2
1800	Maze	119	2
1802	Meld into Stone	119	2
1804	Melf's Acid Arrow	119	2
1807	Mending	119	2
1809	Message	119	2
1811	Meteor Swarm	119	2
1814	Mind Blank	119	2
1816	Minor Illusion	119	2
1818	Sight	74	2
1819	Mirage Arcane	119	2
1821	Mirror Image	119	2
1823	Mislead	119	2
1825	Misty Step	119	2
1827	Modify Memory	119	2
1830	Moonbeam	119	2
1833	Mordenkainen's Faithful Hound	119	2
1835	Mordenkainen's Magnificent Mansion	119	2
1837	Mordenkainen's Private Sanctum	119	2
1840	Melee spell	1381	2
1841	Mordenkainen's Sword	119	2
1843	Concentration, up to 2 hours	73	2
1844	Move Earth	119	2
1846	Nondetection	119	2
1848	Nystul's Magic Aura	119	2
1852	Otiluke's Freezing Sphere	119	2
1856	Otiluke's Resilient Sphere	119	2
1858	Otto's Irresistible Dance	119	2
1860	Pass Without Trace	119	2
1862	Passwall	119	2
1864	Phantasmal Force	119	2
1866	Phantasmal Killer	119	2
1869	Phantom Steed	119	2
1871	Planar Ally	119	2
1873	Planar Binding	119	2
1876	Plane Shift	119	2
1878	1 action or 8 hours	71	2
1879	Plant Growth	119	2
1881	Poison Spray	119	2
1883	Polymorph	119	2
1885	Power Word Heal	119	2
1887	Power Word Kill	119	2
1889	Power Word Stun	119	2
1891	Prayer of Healing	119	2
1894	Up to 1 hour	73	2
1895	Prestidigitation	119	2
1897	Prismatic Spray	119	2
1907	10 minutes	73	2
1908	Prismatic Wall	119	2
1917	Produce Flame	119	2
1919	Programmed Illusion	119	2
1921	500 miles	74	2
1922	Project Image	119	2
1924	Protection from Energy	119	2
1926	Protection from Evil and Good	119	2
1928	Protection from Poison	119	2
1930	Purify Food and Drink	119	2
1932	Raise Dead	119	2
1934	Rary's Telepathic Bond	119	2
1936	Ray of Enfeeblement	119	2
1938	Ray of Frost	119	2
1940	Ray of Sickness	119	2
1943	Regenerate	119	2
1949	Remove Curse	119	2
1951	Resistance	119	2
1953	Resurrection	119	2
1955	Reverse Gravity	119	2
1957	Revivify	119	2
1959	Rope Trick	119	2
1961	Sacred Flame	119	2
1963	Sanctuary	119	2
1965	Searing Smite	119	2
1968	See Invisibility	119	2
1970	Seeming	119	2
1972	Unlimited	74	2
1973	Sending	119	2
1975	Sequester	119	2
1977	Shapechange	119	2
1979	Shatter	119	2
1982	Shield	119	2
1984	Shield of Faith	119	2
1986	Shillelagh	119	2
1988	Shocking Grasp	119	2
1990	Silence	119	2
1992	Silent Image	119	2
1994	12 hours	71	2
1995	Simulacrum	119	2
1997	Sleep	119	2
2000	Sleet Storm	119	2
2003	Divide a Stat	843	2
1428	Die roll bonus to Stat	843	2
2004	Spare the Dying	119	2
2006	Speak with Animals	119	2
2008	Speak with Dead	119	2
2010	Speak with Plants	119	2
2012	Spider Climb	119	2
2014	Spike Growth	119	2
2016	Self (15-foot radius)	74	2
2017	Spirit Guardians	119	2
2020	Same as weapon	6	2
2027	Attack Rolls	2026	2
2028	Ability Checks	2026	2
2029	Staggering Smite	119	2
2031	Stinking Cloud	119	2
2033	Stone Shape	119	2
2037	Storm of Vengeance	119	2
2043	Nonmagical Bludgeoning	6	2
2044	Nonmagical Piercing	6	2
2045	Nonmagical Slashing	6	2
2046	Nonmagical	6	2
2047	Stoneskin	119	2
2049	Suggestion	119	2
2051	Sunbeam	119	2
2054	Sunburst	119	2
2056	Swift Quiver	119	2
2058	Symbol	119	2
2068	Tasha's Hideous Laughter	119	2
2070	Telekinesis	119	2
2074	Telepathy	119	2
2076	Teleportation Circle	119	2
2078	Tenser's Floating Disk	119	2
2080	Up to 1 minute	73	2
2081	Thaumaturgy	119	2
2085	Thorn Whip	119	2
2087	Thunderous Smite	119	2
2089	Self (15-foot cube)	74	2
2090	Thunderwave	119	2
2093	Time Stop	119	2
2095	Tongues	119	2
2097	Transport via Plants	119	2
2099	Tree Stride	119	2
2101	True Polymorph	119	2
2106	True Resurrection	119	2
2108	True Seeing	119	2
2110	Concentration, up to 1 round	73	2
2111	True Strike	119	2
2113	Concentration, up to 6 rounds	73	2
2114	Tsunami	119	2
2116	Unseen Servant	119	2
2118	Vampire Touch	119	2
2121	Vicious Mockery	119	2
2123	Wall of Fire	119	2
2126	Wall of Force	119	2
2128	Wall of Ice	119	2
2131	Wall of Stone	119	2
2133	Wall of Thorns	119	2
2136	Warding Bond	119	2
2138	Water Breathing	119	2
2140	Water Walk	119	2
2142	Web	119	2
2144	Weird	119	2
2146	Wind Walk	119	2
2148	Wind Wall	119	2
2150	Wish	119	2
2152	Witch Bolt	119	2
2155	Word of Recall	119	2
2157	Wrathful Smite	119	2
2159	Zone of Truth	119	2
2170	Magic Missile	119	2
2173	Bigby's Hand	119	2
2180	Call Lightning	119	2
2183	Chain Lightning	119	2
2186	Destructive Wave	119	2
2188	Scorching Ray	119	2
2021	Spiritual Weapon	119	2
2191	Flesh to Stone	119	2
2193	Mage Armor	119	2
2195	Hunger of Hadar	119	2
2197	Slow	119	2
2199	Apply Ability Score Modifier to Stat	843	2
2200	Heroism	119	2
2210	Reincarnate	119	2
2214	Scrying	119	2
2220	Teleport	119	2
2268	Tiny	2251	2
2269	Small	2251	2
2270	Medium	2251	2
2271	Large	2251	2
2272	Huge	2251	2
2273	Garantuan	2251	2
2275	Walking	2274	2
2239	Bard	488	2
2240	Cleric	488	2
2241	Druid	488	2
2243	Aura of Purity	119	2
2242	Paladin	488	2
2245	Ranger	488	2
2246	Sorcerer	488	2
2247	Warlock	488	2
2249	Arcane Lock	119	2
2276	Swimming	2274	2
2248	Wizard	488	2
2254	Aberration	2252	2
2255	Beast	2252	2
2256	Celestial	2252	2
2257	Construct	2252	2
2258	Dragon	2252	2
2259	Elemental	2252	2
2260	Fey	2252	2
2261	Fiend	2252	2
2262	Giant	2252	2
2263	Humanoid	2252	2
2264	Monstrosity	2252	2
2265	Ooze	2252	2
2266	Plant	2252	2
2267	Undead	2252	2
2277	Climbing	2274	2
2278	Flying	2274	2
2279	Burrowing	2274	2
2280	Human	2253	2
2281	`TEST RACE	117	2
2282	Orc	2253	2
2284	Darkvision	2283	2
2285	Blindsense	2283	2
2286	Tremorsense	2283	2
\.


--
-- TOC entry 2551 (class 0 OID 16402)
-- Dependencies: 186
-- Data for Name: adm_core_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_core_type (id, "typeName", "isPicklist", "isDescription", "isChart", "isTypePicklist") FROM stdin;
1	Resource	t	f	f	f
6	Damage Type	t	f	f	f
20	Armor Proficiency	t	f	f	f
21	Weapon Proficiency	t	f	f	f
22	Weapon Category	t	f	f	f
23	Weapon Property	t	f	f	f
24	Ability Score	t	f	f	f
49	Equipment	f	f	f	f
50	Equipment Category	t	f	f	f
65	Proficiency Category	t	f	f	f
66	Item Selection Mechanic	t	f	f	f
67	Ammunition Type	t	f	f	f
68	Language Rarity	t	f	f	f
69	Language Script	t	f	f	f
70	School of Magic	t	f	f	f
71	Spell Casting Time	t	f	f	f
72	Spell Component	t	f	f	f
73	Spell Duration	t	f	f	f
74	Spell Range	t	f	f	f
115	Proficiency	f	f	f	f
116	Background	f	f	f	f
117	Race	f	f	f	f
118	Character Class	f	f	f	f
119	Spell	f	f	f	f
120	Feature	f	f	f	f
122	At Higher Levels (Spell)	f	t	f	f
121	Suggested Characteristics	f	t	f	f
171	General Description	f	t	f	f
394	Proficiency: Language	f	f	f	f
395	Proficiency: Vehicle	f	f	f	f
396	Proficiency: Skill	f	f	f	f
455	Weapon	f	f	f	f
456	Armor	f	f	f	f
483	Spellcasting Focus	t	f	f	f
488	Spell List	f	f	f	f
605	Item Group	f	f	f	f
806	Die Roll Chart	f	f	t	f
843	Mechanic Type	t	f	f	f
844	Stat	t	f	f	f
849	Conditions	t	f	f	f
904	Standard Chart	f	f	t	f
907	Chart Description	f	t	f	f
944	Supplemental Description	f	t	f	f
1232	Chart Types	f	f	f	t
1233	Description Types	f	f	f	t
1381	Attack roll type	t	f	f	f
1479	Area of Effect Shape	t	f	f	f
1485	Length Unit	t	f	f	f
1486	Time Unit	t	f	f	f
1698	Saving Throw Effect	t	f	f	f
2026	Advantage/Disadvantage Target	t	f	f	f
2251	Size	t	f	f	f
2252	Monster Type	t	f	f	f
2253	Monster Tag	t	f	f	f
2274	Movement Type	t	f	f	f
2283	Advanced Sense	t	f	f	f
\.


--
-- TOC entry 2573 (class 0 OID 16555)
-- Dependencies: 208
-- Data for Name: adm_def_background; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_background ("backgroundId", "startingGold", "featureId") FROM stdin;
606	15	607
620	15	621
635	15	636
651	15	652
667	10	668
683	15	684
699	5	700
715	25	716
729	10	730
745	10	746
760	10	761
774	10	775
792	10	793
\.


--
-- TOC entry 2592 (class 0 OID 41247)
-- Dependencies: 227
-- Data for Name: adm_def_chart; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_chart ("chartId", "columnCount", "rowCount") FROM stdin;
914	2	2
919	2	2
924	2	2
929	2	2
940	6	5
1257	2	5
1258	2	6
1259	2	5
1282	2	5
2216	2	3
2217	2	3
2222	4	7
\.


--
-- TOC entry 2593 (class 0 OID 49426)
-- Dependencies: 228
-- Data for Name: adm_def_chart_column; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_chart_column (id, "chartId", "columnIndex", title) FROM stdin;
840	919	1	'c 1
841	919	2	'c 2
843	924	1	'c 1
844	924	2	'c 2
852	929	1	'c 1
853	929	2	'c 2
871	940	1	Size
872	940	2	HP
873	940	3	AC
874	940	4	Attack
875	940	5	Str
876	940	6	Dex
1130	1257	1	Stage
1131	1257	2	Condition
1132	1258	1	Stage
1133	1258	2	Condition
1134	1259	1	Stage
1135	1259	2	Condition
1183	1282	1	Material
1184	1282	2	Duration
2198	2216	0	Knowledge
2199	2216	1	Modifier
2200	2217	0	Connection
2201	2217	1	Modifier
2215	2222	0	Mishap
2216	2222	1	Similar Area
2217	2222	2	Off Target
2218	2222	3	On Target
\.


--
-- TOC entry 2591 (class 0 OID 41234)
-- Dependencies: 226
-- Data for Name: adm_def_chart_dice; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_chart_dice ("chartId", "diceId") FROM stdin;
611	127
612	129
613	129
614	129
625	129
626	127
627	129
628	129
629	129
641	127
642	127
643	129
644	129
645	129
657	141
658	127
659	129
660	129
661	129
673	141
674	127
675	129
676	129
677	129
689	537
690	127
691	129
692	129
693	129
705	127
706	127
707	129
708	129
709	129
721	127
722	129
723	129
724	129
735	141
736	127
737	129
738	129
739	129
750	127
751	127
752	129
753	129
754	129
766	127
767	129
768	129
769	129
780	127
781	127
782	129
783	129
784	129
785	129
797	127
798	129
799	129
800	129
1181	141
2208	538
2212	538
\.


--
-- TOC entry 2575 (class 0 OID 16570)
-- Dependencies: 210
-- Data for Name: adm_def_chart_dice_entry; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_chart_dice_entry (id, "chartId", minimum, maximum, description) FROM stdin;
247	611	1	1	I idolize a particular hero of my faith, and constantly refer to that person’s deeds and example.
248	611	2	2	I can find common ground between the fiercest enemies, empathizing with them and always working toward peace.
249	611	3	3	I see omens in every event and action. The gods try to speak to us, we just need to listen.
250	611	4	4	Nothing can shake my optimistic attitude.
251	611	5	5	I quote (or misquote) sacred texts and proverbs in almost every situation.
252	611	6	6	I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.
253	611	7	7	I’ve enjoyed fine food, drink, and high society among my temple’s elite. Rough living grates on me.
254	611	8	8	I’ve spent so long in the temple that I have little practical experience dealing with people in the outside world.
255	612	1	1	Tradition. The ancient traditions of worship and sacrifice must be preserved and upheld. (Lawful)
256	612	2	2	Charity. I always try to help those in needs, no matter what the personal cost. (Good)
257	612	3	3	Change. We must help bring about the changes the gods are constantly working in the world. (Chaotic)
258	612	4	4	Power. I hope to one day rise to the top of my faith’s religious hierarchy. (Lawful)
259	612	5	5	Faith. I trust that my deity will guide my actions. I have faith that if I work hard, things will go well. (Lawful)
260	612	6	6	Aspiration. I seek to prove myself worthy of my god’s favor by matching my actions against his or her teachings. (Any)
261	613	1	1	I would die to recover an ancient relic of my faith that was lost long ago.
262	613	2	2	I will someday get revenge on the corrupt temple hierarchy who branded me a heretic.
263	613	3	3	I owe my life to the priest who took me in when my parents died.
264	613	4	4	Everything I do is for the common people.
265	613	5	5	I will do anything to protect the temple where I served.
266	613	6	6	I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.
267	614	1	1	I judge others harshly, and myself even more severely.
268	614	2	2	I put too much trust in those who wield power within my temple’s hierarchy.
269	614	3	3	My piety sometimes leads me to blindly trust those that profess faith in my god.
270	614	4	4	I am inflexible in my thinking.
271	614	5	5	I am suspicious of strangers and expect the worst of them.
272	614	6	6	Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.
280	625	1	1	I cheat at games of chance.
281	625	2	2	I shave coins or forge documents.
282	625	3	3	I insinuate myself into people's lives to prey on their weakness and secure their fortunes.
283	625	4	4	I put on new identities like clothes.
284	625	5	5	I run sleight of hand cons on street corners.
285	625	6	6	I convince people that worthless junk is worth their hard—earned money.
286	626	1	1	I fall in and out of love, and am always pursuing someone.
287	626	2	2	I have a joke for every occasion, especially occasions where humor is inappropriate.
288	626	3	3	Flattery is my preferred trick for getting what I want.
289	626	4	4	I'm a born gambler who can't resist taking a risk for a potential payoff.
290	626	5	5	I lie about almost everything, even when there's no good reason to.
291	626	6	6	Sarcasm and insults are my weapons of choice.
292	626	7	7	I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.
293	626	8	8	I pocket anything I see that might have some value.
294	627	1	1	Idependence. I am a free spirit—no one tells me what to do. (Chaotic)
295	627	2	2	Fairness. I never target people who can't afford to lose a few coins. (Lawful)
296	627	3	3	Charity. I distribute the money I acquire to the people who really need it. (Good)
297	627	4	4	Creativity. I never run the same con twice. (Chaotic)
298	627	5	5	Friendship. Material goods come and go. Bonds of friendship last forever. (Good)
299	627	6	6	Aspiration. I'm determined to make something of myself. (Any)
300	628	1	1	I fleeced the wrong person and must work to ensure that this individual never crosses paths with me ot those I care about.
301	628	2	2	I owe everything to my mentor—a horrible person who's probably rotting in jail somewhere.
302	628	3	3	Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.
303	628	4	4	I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.
304	628	5	5	A powerful person killed someone I love. Some day soon, I'll have my revenge.
305	628	6	6	I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeed but might never be able to forgive myself.
306	629	1	1	I can't resist a pretty face.
307	629	2	2	I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.
308	629	3	3	I'm convinced that no one could ever fool me the way I fool others.
309	629	4	4	I'm too greedy for my own good. I can't resist taking a risk if there' money involved.
310	629	5	5	I can't resist swindling people who are more powerful than me.
311	629	6	6	I hate to admit it and hate myself for it, but I'll ru and preserve my own hide if the going gets tough.
320	641	1	1	Blackmailer
321	641	2	2	Burglar
322	641	3	3	Enforcer
323	641	4	4	Fence
324	641	5	5	Highway Robber
325	641	6	6	Hired Killer
326	641	7	7	Pickpocket
327	641	8	8	Smuggler
328	642	1	1	I always have a plan for what to do when things go wrong.
329	642	2	2	I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.
330	642	3	3	The first thing I do in a new place is note the locations of everything valuable—or where such things could be hidden.
331	642	4	4	I would rather make a new friend than a new enemy.
332	642	5	5	I am incredibly slow to trust. Those who seem the fairest often have the most to hide.
333	642	6	6	I don't pay attention to the risks in a situation. Never tell me the odds.
334	642	7	7	The best way to get me to do something is to tell me I can't do it.
335	642	8	8	I blow up at the slightest insult.
336	643	1	1	Honor. I don't steal from others in the trade. (Lawful)
337	643	2	2	Freedom. Chains are meant to be broke, as are those who would forge them. (Chaotic)
338	643	3	3	Charity. I steal from the wealthy so that I can help people in need. (Good)
339	643	4	4	Greed. I will do whatever it takes to become wealthy. (Evil)
340	643	5	5	People. I'm loyal to my friends, not to any ideals, and everyone else can take a trip down the Styx for all I care. (Neutral)
341	643	6	6	Redemption. There's a spark of good in everyone. (Good)
342	644	1	1	I'm trying to pay off an old debt I owe to a generous benefactor.
343	644	2	2	My ill-gotten gains go to support my family.
344	644	3	3	Something important was taken from me, and I aim to steal it back.
345	644	4	4	I will become the greatest thief that ever lived.
346	644	5	5	I'm guilty of a terrible crime. I hope I can redeem myself for it.
347	644	6	6	Someone I loved died because of a mistake I made. That will never happen again.
348	645	1	1	When I see something valuable, I can't think about anything but how to steal it.
349	645	2	2	When faced with a choice between money and my friends, I usually choose the money.
350	645	3	3	If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.
351	645	4	4	I have a "tell" that reveals when I'm lying.
352	645	5	5	I turn tail and run when things look bad.
353	645	6	6	An innocent person is in prison for a crime that I committed. I am okay with that.
363	657	1	1	Actor
364	657	2	2	Dancer
365	657	3	3	Fire-Eater
366	657	4	4	Jester
367	657	5	5	Juggler
368	657	6	6	Instrumentalist
369	657	7	7	Poet
370	657	8	8	Singer
371	657	9	9	Storyteller
372	657	10	10	Tumbler
373	658	1	1	I know a story relevant to almost every situation.
374	658	2	2	Whenever I come to a new place, I collect local rumors and spread gossip.
375	658	3	3	I'm a hopeless romantic, always searching for that "special someone."
376	658	4	4	Nobody stays angry at me or around me for long, since I can defuse any amount of tension.
377	658	5	5	I love a good insult, even one directed at me.
378	658	6	6	I get bitter if I am not the center of attention.
379	658	7	7	I'll settle for nothing less than perfection.
380	658	8	8	I change my mood or my mind as quickly as I change key in a song.
381	659	1	1	Beauty. When I perform, I make the world better than it was. (Good)
382	659	2	2	Tradition. The stories, legends, and songs of the ast must never be forgotten, for they teach us who we are. (Lawful)
383	659	3	3	Creativity. The world is in need of new ideas and bold action. (Chaotic)
384	659	4	4	Greed. I'm only in it for the money and fame. (Evil)
385	659	5	5	People. I like seeing the smiles on people's faces when I perform. That's all that matters. (Neutral)
386	659	6	6	Honesty. Art should reflect the soul; it should come from within and reveal who we really are. (Any)
387	660	1	1	My instrument is my most treasured possession, and it reminds me of someone I love.
388	660	2	2	Someone stole my precious instrument, and someday I'll get it back.
389	660	3	3	I want to be famous, whatever it takes.
390	660	4	4	I idolize a hero of the old tales and measure my deeds against that person's.
391	660	5	5	I would do anything to prove myself superior to my hated rival.
392	660	6	6	I would do anything for the other members of my old troupe.
393	661	1	1	I'll do anything to win fame and renown.
394	661	2	2	I'm a sucker for a pretty face.
395	661	3	3	A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.
396	661	4	4	I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.
397	661	5	5	I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.
398	661	6	6	Depite my best efforts, I am unreliable to my friends.
410	673	1	1	I stood up to a tyrant's agents.
411	673	2	2	I saved people during a natural disaster.
412	673	3	3	I stood alone against a terrible monster.
413	673	4	4	I stole from a corrupt merchant to help the poor.
414	673	5	5	I led a militia to fight off an invading armor.
415	673	6	6	I broke into a tyrant's castle and stole weapons to arm the people.
416	673	7	7	I trained the peasantry to use farm implements as weapons against a tyrant's soldiers.
417	673	8	8	A lord rescinded an unpopular decree after I led a symbolic act of protest against it.
418	673	9	9	A celestial, fey, or similar creature gave me a blessing or revealed my secret origin.
419	673	10	10	Recruited into a lord's army, I rose to leadership and was commended for my heroism.
420	674	1	1	I judge people by their actions, not their words.
421	674	2	2	If someone is in trouble, I am always ready to lend help.
422	674	3	3	When I set my mind to something, I follow through no matter what gets in my way.
423	674	4	4	I have a strong sense of fair play and always try to find the most equitable solution to arguments.
424	674	5	5	I'm confident in my own abilities and do what I can to instill confidence in others.
425	674	6	6	Thinking is for other people. I prefer action.
426	674	7	7	I misuse long words in an attempt to sound smarter.
427	674	8	8	I get bored easily. When I am going to get on with my destiny?
428	675	1	1	Respect. People deserve to be treated with dignity and respect. (Good)
429	675	2	2	Fairness. No one should get preferential treatment before the law, and no one is above the law. (Lawful)
430	675	3	3	Freedom. Tyrants must not be allowed to oppress the people. (Chaotic)
431	675	4	4	Might. If I become strong, I can take what I want—what I deserve. (Evil)
432	675	5	5	Sincerity. There's no good in pretending to be something I'm not. (Neutral)
433	675	6	6	Destiny. Nothing and no one can steer me away from my higher calling. (Any)
434	676	1	1	I have a family, but I have no idea where they are. One day, i hope to see them again.
435	676	2	2	I worked that land. I love the land, and I will protect the land.
436	676	3	3	A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.
437	676	4	4	My tools are symbols of my past life, and I carry them so that I will never forget my roots.
438	676	5	5	I protect those who cannot protect themselves.
439	676	6	6	I wish my childhood sweetheart had come with me to pursue my destiny.
440	677	1	1	The tyrant who rules my land will stop at nothing to see me killed.
441	677	2	2	I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.
442	677	3	3	The people who knew me when I was young know my shameful secret, so I can never go home again.
443	677	4	4	I have a weakness for the vices of the city, especially hard drink.
444	677	5	5	Secretly, I believe that things would be better if I were a tyrant lording over the land.
445	677	6	6	I have trouble trusting in my allies.
455	689	1	1	Alchemists and Apothecaries
456	689	2	2	Armorers, Locksmiths, and Finesmiths
457	689	3	3	Brewers, Distillers, and Vintners
458	689	4	4	Calligraphers, Scribes, and Scriveners
459	689	5	5	Carpenters, Roofers, and Plasterers
460	689	6	6	Cartographers, Surveyors, and Chart-Makers
461	689	7	7	Cobblers and Shoemakers
462	689	8	8	Cooks and Bakers
463	689	9	9	Glassblowers and Glaziers
464	689	10	10	Jewelers and Gemcutters
465	689	11	11	Leatherworkers, Skinners, and Tanners
466	689	12	12	Masons and Stonecutters
467	689	13	13	Painters, Limners, and Sign-Makers
468	689	14	14	Potters and Tile-Makers
469	689	15	15	Shipwrights and Sailmakers
470	689	16	16	Smiths and Metal-Forgers
471	689	17	17	Tinkers, Pewterers, and Casters
472	689	18	18	Wagon-Makers and Wheelwrights
473	689	19	19	Weavers and Dyers
474	689	20	20	Woodcarvers, Coopers, and Bowyers
475	690	1	1	I believe that anything worth doing is worth doing right. I can't help it—I'm a perfectionist.
476	690	2	2	I'm a snob who looks down on those who can't appreciate fine art.
477	690	3	3	I always want to know how things work and what makes people tick.
478	690	4	4	I'm full of witty aphorisms and have a proverb for every occasion.
479	690	5	5	I'm rude to people who lack commitment to hard work and fair play.
480	690	6	6	I like to talk at length about my profession.
481	690	7	7	I don't part with my money easily and will haggle tirelessly to get the best deal possible.
482	690	8	8	I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me.
483	691	1	1	Community. It is the duty of all civilized people to strengthen the bonds of community and the security of civilization. (Lawful)
484	691	2	2	Generosity. My talents were given to me so that I could use them to benefit the world. (Good)
485	691	3	3	Freedom. Everyone should be free to pursue his or her own livelihood. (Chaotic)
486	691	4	4	Greed. I'm only in it for the money. (Evil)
487	691	5	5	People. I'm committed to the people I care about, not to ideals. (Neutral)
488	691	6	6	Aspiration. I work hard to be the best there is at my craft. (Any)
489	692	1	1	The workshop where I learned my trade is the most important place in the world to me.
490	692	2	2	I created a graet work for someone, and then found them unworthy to recieve it. I'm still looking for someone worthy.
491	692	3	3	I owe my guild a great debt for forging me into the person I am today.
492	692	4	4	I pursue wealth to secure someone's love.
493	692	5	5	One day I will return to my guild and prove that I am the greatest artisan of all.
494	692	6	6	I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.
495	693	1	1	I'll do anything to get my hands on something rare or priceless.
496	693	2	2	I'm quick to assume that someone is trying to cheat me.
497	693	3	3	No one must ever learn that I once stole money from guild coffers.
498	693	4	4	I'm never satisfied with what I have—I always want more.
499	693	5	5	I would kill to acquire a noble title.
500	693	6	6	I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals.
512	705	1	1	I was searching for spiritual enlightenment.
513	705	2	2	I was partaking of communal living in accordance with the dictates of a religious order.
514	705	3	3	I was exiled for a crime I didn't commit.
515	705	4	4	I retreated from society after a life-altering event.
516	705	5	5	I needed a quiet place to work on my art, literature, music, or manifesto.
517	705	6	6	I needed to commune with nature, far from civilization.
518	705	7	7	I was the caretaker of an ancient ruin or relic.
519	705	8	8	I was a pilgrim in search of a person, place, or relic of spiritual significance.
520	706	1	1	I've been isolated for so long taht I rarely speak, preferring gestures and the occasional grunt.
521	706	2	2	I am utterly serene, even in the face of disaster.
522	706	3	3	The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.
523	706	4	4	I feel tremendous empathy for all who suffer.
524	706	5	5	I'm oblivious to etiquette and social expectations.
525	706	6	6	I connect everything that happens to me to a grand, cosmic plan.
526	706	7	7	I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.
527	706	8	8	I am working on a grand philosophical theory and love sharing my ideas.
528	707	1	1	Greater Good. My gifts are meant to be shared with all, not used for my own benefit. (Good)
529	707	2	2	Logic. Emotions must not cloud our senses of what is right and true, or our logical thinking. (Lawful)
530	707	3	3	Free Thinking. Inquiry and curiosity are the pillars of progress. (Chaotic)
531	707	4	4	Power. Solitude and contemplation are paths towrd mystical or magical power. (Evil)
532	707	5	5	Live and Let Live. Meddling in the affairs of others only causes trouble. (Neutral)
533	707	6	6	Self-Knowledge: If you know yourself, there's nothing left to know. (Any)
534	708	1	1	Nothing is more important than the other members of my hermitage, order, or association.
535	708	2	2	I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.
536	708	3	3	I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.
537	708	4	4	I entered seclsuion because I loved someone I could not have.
538	708	5	5	Should my discovery come to light, it could bring ruin to the world.
539	708	6	6	My isolation gave me great insight into a great evil that only I can destroy.
540	709	1	1	Now that I've returned to the world, I enjoy its delights a little too much.
541	709	2	2	I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.
542	709	3	3	I am dogmatic in my thoughts and philosophy.
543	709	4	4	I let my need to win arguements overshadow friendships and harmony.
544	709	5	5	I'd risk too much to uncover a lost bit of knowledge.
545	709	6	6	I like keeping secrets and won't share them with anyone.
556	721	1	1	My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.
557	721	2	2	The common folk love me for my kindness and generosity.
558	721	3	3	No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.
559	721	4	4	I take great pains to always look my best and follow the latest fashion.
560	721	5	5	I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.
561	721	6	6	Despite my noble birth, I do not place myself above other folk. We all have the same blood.
562	721	7	7	My favor, once lost, is lost forever.
563	721	8	8	If you do me an injury, I will crush you, ruin your name, and salt your fields.
564	722	1	1	Respect. Respect is due to me because of my position, but all people regardless of station deserve to be treated with dignity. (Good)
565	722	2	2	Responsibility. It is my duty to respect the authority of those above me, just as those below me must respect mine. (Lawful)
566	722	3	3	Independence. I must prove that I can handle myself without the coddling of my family. (Chaotic)
567	722	4	4	Power. If I can attain more power, no one will tell me what to do. (Evil)
568	722	5	5	Family. Blood runs thicker than water. (Any)
569	722	6	6	Noble Obligation. It is my duty to protect and care for the people beneath me. (Good)
570	723	1	1	I will face any challenge to win the approval of my family.
571	723	2	2	My house's alliance with another noble family must be sustained at all costs.
572	723	3	3	Nothing is more important than the other members of my family.
573	723	4	4	I am in love with the heir of a family despises.
574	723	5	5	My loyalty to my sovereign is unwavering.
575	723	6	6	The common folk must see me as a hero of the people.
576	724	1	1	I secretly believe that everyone is beneath me.
577	724	2	2	I hide a truly scadalous secret that could ruin my family forever.
578	724	3	3	I too often hear veiled insults and threats in every word addressed to me, and I am quick to anger.
579	724	4	4	I have an insatiable desire for carnal pleasures.
580	724	5	5	In fact, the world does revolve around me.
581	724	6	6	By my words and actions, I often bring shame to my family.
591	735	1	1	Forester
592	735	2	2	Trapper
593	735	3	3	Homesteader
594	735	4	4	Guide
595	735	5	5	Exile or Outcast
596	735	6	6	Bounty Hunter
597	735	7	7	Pilgrim
598	735	8	8	Tribal Nomad
599	735	9	9	Hunter-Gatherer
600	735	10	10	Tribal Marauder
601	736	1	1	I'm driven by a wanderlust that led me away from home.
602	736	2	2	I watch over my friends as if they were a litter of newborn pups.
603	736	3	3	I once ran twenty-five miles without stopping to warn my clan of an approaching orc horde. I'd do it again if I had to.
604	736	4	4	I have a lesson for every situation, drawn from observing nature.
605	736	5	5	I place no stock in wealthy or well-mannered folk. Money an manners won't save you from a hungry owlbear.
606	736	6	6	I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.
607	736	7	7	I feel far more comfortable around animals than people.
608	736	8	8	I was, in fact, raised by wolves.
609	737	1	1	Change. Life is like the seasons, in constant change, and we must change with it. (Chaotic)
610	737	2	2	Greater Good. It is each person's responsibility to make the most happiness for the whole tribe. (Good)
611	737	3	3	Honor. If I dishonor myself, I dishonor my whole clan. (Lawful)
612	737	4	4	Might. The strongest are meant to rule. (Evil)
613	737	5	5	Nature. The natural world is more important than all the constructs of civilization. (Neutral)
614	737	6	6	Glory. I must earn glory in battle, for myself and my clan. (Any)
615	738	1	1	My family, clan, or tribe is the most important thing in my life, even when they are far from me.
616	738	2	2	An injury to the unspoiled wilderness of my home is an injury to me.
617	738	3	3	I will bring terrible wrath down on the evildoers who destroyed my homeland.
618	738	4	4	I am the last of my tribe, and it is up to me to ensure their names enter legend.
619	738	5	5	I suffer awful visions of a coming disaster and will do anything to prevent it.
620	738	6	6	It is my duty to provide children to sustain my tribe.
621	739	1	1	I am too enamored of ale, wine, and other intoxicants.
622	739	2	2	There's no room for caution in a life lived to the fullest.
623	739	3	3	I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.
624	739	4	4	I am slow to trust members of other races, tribes, and societies.
625	739	5	5	Violence is my answer to almost any challenge.
626	739	6	6	Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish.
638	750	1	1	Alchemist
639	750	2	2	Astronomer
640	750	3	3	Discredited Academic
641	750	4	4	Librarian
642	750	5	5	Professor
643	750	6	6	Researcher
644	750	7	7	Wizard's Apprentice
645	750	8	8	Scribe
646	751	1	1	I use polysyllabic words that convey the impressions of great erudition.
647	751	2	2	I've read every book in the world's greatest libraries—or I like to boast that I have.
648	751	3	3	I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.
649	751	4	4	There's nothing I like more than a good mystery.
650	751	5	5	I'm willing to listen to every side of an arguement before I make my own judgement.
651	751	6	6	I...speak...slowly...when talking...to idiots,...which...almost...everyone...is...compared...to me.
652	751	7	7	I am horribly, horribly awkward in social situations.
653	751	8	8	I'm convinced that people are always trying to steal my secrets.
654	752	1	1	Knowledge. The path to power and self-improvement is through knowledge. (Neutral)
655	752	2	2	Beauty. What is beautiful points us beyond itself toward what is true. (Good)
656	752	3	3	Logic. Emotions must not cloud our logical thinking. (Lawful)
657	752	4	4	No Limits. Nothing should fetter the infinite possibility inherent in all existence. (Chaotic)
658	752	5	5	Power. Knowledge is the path to power and domination. (Evil)
659	752	6	6	Self-Improvement. The goal of a life of study is the betterment of oneself. (Any)
660	753	1	1	It is my duty to protect my students.
661	753	2	2	I have an ancient text that holds terrible secrets that must not fall into the wrong hands.
662	753	3	3	I work to preserve a library, university, scriptorium, or monastary.
663	753	4	4	My life's work is a series of tomes related to a specific field of lore.
664	753	5	5	I've been searching my whole life for the answer to a certain question.
665	753	6	6	I sold my soul for knowledge. I hope to do great deeds and win it back.
666	754	1	1	I am easily distracted by the promise of information.
667	754	2	2	Most people scream and run when they see a demon. I stop and take notes on its anatomy.
668	754	3	3	Unlocking an ancient mystery is worth the price of a civilization.
669	754	4	4	I overlook obvious solutions in favor of complicated ones.
670	754	5	5	I speak without really thinking through my words, invariably insulting others.
671	754	6	6	I can't keep a secret to save my life, or anyone else's.
679	766	1	1	My friends know they can rely on me, no matter what.
680	766	2	2	I work hard so that I can play hard when the work is done.
681	766	3	3	I enjoy sailing into new ports and making new friends over a flagon of ale.
682	766	4	4	I stretch the truth for the sake of a good story.
683	766	5	5	To me, a tavern brawl is a nice way to get to know a new city.
684	766	6	6	I never pass up a friendly wager.
685	766	7	7	My language is as foul as an otyugh nest.
686	766	8	8	I like a job well done, especially if I can convince someone else to do it.
687	767	1	1	Respect. The thing that keeps a ship together is mutual respect between captain and crew. (Good)
688	767	2	2	Fairness. We all do the work, so we all share in the rewards. (Lawful)
689	767	3	3	Freedom. The sea is freedom—the freedom to go anywhere and do anything. (Chaotic)
690	767	4	4	Mastery. I'm a predator, and the other ships on the sea are my prey. (Evil)
691	767	5	5	People. I'm committed to my crewmates, not to ideals. (Neutral)
692	767	6	6	Aspiration. Someday I'll own my own ship and chart my own destiny. (Any)
693	768	1	1	I'm loyal to my captain first, everything else second.
694	768	2	2	The ship is most important—crewmates and captains come and go.
695	768	3	3	I'll always remember my first ship.
696	768	4	4	In a harbor town, I have a paramour whose eyes nearly stole me from the sea.
697	768	5	5	I was cheated out of my fair share of the profits, and I want to get my due.
698	768	6	6	Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.
699	769	1	1	I follow orders, even if I think they're wrong.
700	769	2	2	I'll say anything to avoid having to do extra work.
701	769	3	3	Once someone questions my courage. I never back down no matter how dangerous the situation.
702	769	4	4	Once I start drinking, it's hard for me to stop.
703	769	5	5	I can't help but pocket loose coins and other trinkets I come across.
704	769	6	6	My pride will probably lead to my destruction.
714	780	1	1	Officer
715	780	2	2	Scout
716	780	3	3	Infantry
717	780	4	4	Cavalry
718	780	5	5	Healer
719	780	6	6	Quartermaster
720	780	7	7	Standard Bearer
721	780	8	8	Support Staff (cook, blacksmith, or the like)
722	781	1	1	I'm always polite and respectful.
723	781	2	2	I'm haunted by memories of war. I can't get the images of violence out of my mind.
724	781	3	3	I've lost too many friends, and I'm slow to make new ones.
725	781	4	4	I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.
726	781	5	5	I can stare down a hell hound without flinching.
727	781	6	6	I enjoy being strong and like breaking things.
728	781	7	7	I have a crude sense of humor.
729	781	8	8	I face problems head-on. A simple, direct solution is the best path to success.
730	782	1	1	Greater Good. Our lot is to lay down our lives in defense of others. (Good)
731	782	2	2	Responsibility. I do what I must and obey just authority. (Lawful)
732	782	3	3	Independence. When people follow orders blindly, they embrace a kind of tyranny. (Chaotic)
733	782	4	4	Might. In life as in war, the stronger force wins. (Evil)
734	782	5	5	Live and Let Live. Ideals aren't worth killing over or going to war for. (Neutral)
735	782	6	6	Nation. My city, nation, or people are all that matter. (Any)
736	783	1	1	I would still lay down my life for the people I served with.
737	783	2	2	Someone saved my life on the battlefield. To this day, I will never leave a friend behind.
738	783	3	3	My honor is my life.
739	783	4	4	I'll never forget the crushing defeat my company suffered or the enemies who dealt it.
740	783	5	5	Those who fight beside me are those worth dying for.
741	783	6	6	I fight for those who cannot fight for themselves.
742	785	1	1	The monstrous enemy we faced in battle still leaves me quivering with fear.
743	785	2	2	I have little respect for anyone who is not a proven warrior.
744	785	3	3	I made a terrible mistake in battle that cost many lives, and I would do anything to keep that mistake secret.
745	785	4	4	My hatred of my enemies is blind and unreasoning.
746	785	5	5	I obey the law, even if the law causes misery.
747	785	6	6	I'd rather eat my armor than admit when I'm wrong.
748	785	1	1	The monstrous enemy we faced in battle still leaves me quivering with fear.
749	785	2	2	I have little respect for anyone who is not a proven warrior.
750	785	3	3	I made a terrible mistake in battle that cost many lives, and I would do anything to keep that mistake secret.
751	785	4	4	My hatred of my enemies is blind and unreasoning.
752	785	5	5	I obey the law, even if the law causes misery.
753	785	6	6	I'd rather eat my armor than admit when I'm wrong.
763	797	1	1	I hide scraps of food and trinkets away in my pockets.
764	797	2	2	I ask a lot of questions.
765	797	3	3	I like to squeeze into small places where no one else can get to me.
766	797	4	4	I sleep with my back to a wall or tree, with everything I own wrapped in a bundle in my arms.
767	797	5	5	I eat like a pig and have bad manners.
768	797	6	6	I think anyone who's nice to me is hiding evil intent.
769	797	7	7	I don't like to bathe.
770	797	8	8	I bluntly say what other people are hinting at or hiding.
771	798	1	1	Respect. All people, rich or poor, deserve respect. (Good)
772	798	2	2	Community. We have to take care of each other, because no one else is going to do it. (Lawful)
773	798	3	3	Change. The low are lifted up, and the high and mighty are brought down. Change is the nature of things. (Chaotic)
774	798	4	4	Retribution. The rich need to be shown what life and death are like in the gutters. (Evil)
775	798	5	5	People. I help the people who help me—that's what keeps us alive. (Neutral)
776	798	6	6	Aspiration. I'm going to prove that I'm worthy of a better life. (Any)
777	799	1	1	My town or city is my home, and I'll fight to defend it.
778	799	2	2	I sponsor an orphanage to keep others from enduring what I was forced to endure.
779	799	3	3	I owe my survival to another urchin who taught me to live on the streets.
780	799	4	4	I owe a debt I can never repay to the person who took pity on me.
781	799	5	5	I escaped my life of poverty by robbing an important person, and I'm wanted for it.
782	799	6	6	No one else should have to endure the hardships I've been through.
783	800	1	1	If I'm outnumbered, I will run away from a fight.
784	800	2	2	Gold seems like a lot of money to me, and I'll do just about anything for more of it.
785	800	3	3	I will never fully trust anyone other than myself.
786	800	4	4	I'd rather kill someone in their sleep than fight fair.
787	800	5	5	It's not stealing if I need it more than someone else.
788	800	6	6	People who can't take care of themselves get what they deserve.
1065	1181	1	1	The creature uses all its movement to move in a random direction. To determine the direction, roll a d8 and assign a direction to each die face. The creature doesn’t take an action this turn.
1066	1181	2	2	The creature doesn’t move or take actions this turn.
1067	1181	7	7	The creature uses its action to make a melee attack against a randomly determined creature within its reach. If there is no creature within its reach, the creature does nothing this turn.
1068	1181	9	9	The creature can act and move normally.
2164	2208	1	1	Dragonborn
2165	2208	5	5	Dwarf, hill
2166	2208	14	14	Dwarf, mountain
2167	2208	22	22	Elf, dark
2168	2208	26	26	Elf, High
2169	2208	35	35	Elf, wood
2170	2208	43	43	Gnome, forest
2171	2208	47	47	Gnome, rock
2172	2208	53	53	Half-elf
2173	2208	57	57	Half-orc
2174	2208	61	61	Halfling, lightfoot
2175	2208	69	69	Halfling, stout
2176	2208	77	77	Human
2177	2208	97	97	Tiefling
2181	2212	1	4	Dragonborn
2182	2212	5	13	Dwarf, hill
2183	2212	14	21	Dwarf, mountain
2184	2212	22	25	Elf, dark
2185	2212	26	34	Elf, high
2186	2212	35	42	Elf, wood
2187	2212	43	46	Gnome, forest
2188	2212	47	52	Gnome, rock
2189	2212	53	56	Half-elf
2190	2212	57	60	Half-orc
2191	2212	61	68	Halfling, lightfoot
2192	2212	69	76	Halfling, stout
2193	2212	77	96	Human
2194	2212	97	100	Tiefling
\.


--
-- TOC entry 2595 (class 0 OID 49444)
-- Dependencies: 230
-- Data for Name: adm_def_chart_entry; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_chart_entry (id, "chartId", "columnIndex", "rowIndex", description) FROM stdin;
847	924	0	0	'e 1
848	924	0	1	'e 3
849	924	1	0	'e 2
850	924	1	1	'e 4
856	929	0	0	'e1
857	929	0	1	'e3
858	929	1	0	'e2
859	929	1	1	'e4
877	940	0	0	Tiny
878	940	0	1	Small
879	940	0	2	Medium
880	940	0	3	Large
881	940	0	4	Huge
882	940	1	0	20
883	940	1	1	25
884	940	1	2	40
885	940	1	3	50
886	940	1	4	80
887	940	2	0	18
888	940	2	1	16
889	940	2	2	13
890	940	2	3	10
891	940	2	4	10
892	940	3	0	+8 to hit, 1d4+4 damage
893	940	3	1	+6 to hit, 1d8+2 damage
894	940	3	2	+5 to hit, 2d6+1 damage
895	940	3	3	+6 to hit, 2d10+2 damage
896	940	3	4	+8 to hit, 2d12+4 damage
897	940	4	0	4
898	940	4	1	6
899	940	4	2	10
900	940	4	3	14
901	940	4	4	18
902	940	5	0	18
903	940	5	1	14
904	940	5	2	12
905	940	5	3	10
906	940	5	4	6
1136	1257	0	0	1
1137	1257	0	1	2
1138	1257	0	2	3
1139	1257	0	3	4
1140	1257	0	4	5
1141	1257	1	0	Clear
1142	1257	1	1	Light Clouds
1143	1257	1	2	Overcast or ground fog
1144	1257	1	3	Rain, hail, or snow
1145	1257	1	4	Torrential rain, driving hail, or blizzard
1146	1258	0	0	1
1147	1258	0	1	2
1148	1258	0	2	3
1149	1258	0	3	4
1150	1258	0	4	5
1151	1258	0	5	6
1152	1258	1	0	Unbearable heat
1153	1258	1	1	Hot
1154	1258	1	2	Warm
1155	1258	1	3	Cool
1156	1258	1	4	Cold
1157	1258	1	5	Arctic cold
1158	1259	0	0	1
1159	1259	0	1	2
1160	1259	0	2	3
1161	1259	0	3	4
1162	1259	0	4	5
1163	1259	1	0	Calm
1164	1259	1	1	Moderate wind
1165	1259	1	2	Strong wind
1166	1259	1	3	Gale
1167	1259	1	4	Storm
1185	1282	0	0	Vegetable matter
1186	1282	0	1	Stone or crystal
1187	1282	0	2	Precious metals
1188	1282	0	3	Gems
1189	1282	0	4	Adamantine or mithral
1190	1282	1	0	1 day
1191	1282	1	1	12 hours
1192	1282	1	2	1 hours
1193	1282	1	3	10 minutes
1194	1282	1	4	1 minute
2202	2216	0	0	Secondhand (you have heard of the target)
2203	2216	0	1	Firsthand (you have met the target)
2204	2216	0	2	Familiar (you know the target well)
2205	2216	1	0	+5
2206	2216	1	1	0
2207	2216	1	2	-5
2208	2217	0	0	Likeness or picture
2209	2217	0	1	Possession or garment
2210	2217	0	2	Body part, lock of hair, bit of nail, or the like
2211	2217	1	0	-2
2212	2217	1	1	-4
2213	2217	1	2	-10
2226	2222	0	0	—
2227	2222	0	1	—
2228	2222	0	2	01-05
2229	2222	0	3	01-33
2230	2222	0	4	01-43
2231	2222	0	5	01-43
2232	2222	0	6	01-50
2233	2222	1	0	—
2234	2222	1	1	—
2235	2222	1	2	06-13
2236	2222	1	3	34-43
2237	2222	1	4	44-53
2238	2222	1	5	44-53
2239	2222	1	6	51-100
2240	2222	2	0	—
2241	2222	2	1	—
2242	2222	2	2	14-24
2243	2222	2	3	44-53
2244	2222	2	4	54-73
2245	2222	2	5	54-73
2246	2222	2	6	—
2247	2222	3	0	01-100
2248	2222	3	1	01-100
2249	2222	3	2	25-100
2250	2222	3	3	54-100
2251	2222	3	4	74-100
2252	2222	3	5	74-100
2253	2222	3	6	—
\.


--
-- TOC entry 2594 (class 0 OID 49435)
-- Dependencies: 229
-- Data for Name: adm_def_chart_row; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_chart_row (id, "chartId", "rowIndex", title) FROM stdin;
845	924	1	'r 1
846	924	2	'r 2
854	929	1	'r 1
855	929	2	'r 2
2219	2222	0	Permanent circle
2220	2222	1	Associated object
2221	2222	2	Very Familiar
2222	2222	3	Seen Casually
2223	2222	4	Viewed Once
2224	2222	5	Description
2225	2222	6	False Destination
\.


--
-- TOC entry 2598 (class 0 OID 90429)
-- Dependencies: 233
-- Data for Name: adm_def_damage; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_damage (id, "referenceId", "diceId", "damageTypeId", "abilityScoreModifierId") FROM stdin;
1500	125	124	8	0
1501	166	127	8	0
1502	154	127	8	0
1503	133	129	7	0
1504	157	129	8	0
1505	143	141	9	0
1506	158	127	8	0
1507	164	129	8	0
1508	130	129	8	0
1509	123	124	7	0
1510	144	145	9	0
1511	134	124	9	0
1512	149	145	8	0
1513	138	129	8	0
1514	165	141	8	0
1515	155	129	9	0
1516	153	141	8	0
1517	160	124	9	0
1518	152	127	8	0
1519	146	147	9	0
1520	151	147	7	0
1521	156	129	8	0
1522	135	129	8	0
1523	159	127	7	0
1524	807	129	10	0
1525	128	129	9	0
1526	150	127	9	0
1527	142	127	7	0
1528	132	129	7	0
1529	126	127	7	0
1530	168	162	167	0
1531	137	124	8	0
1532	139	124	7	0
1533	148	141	9	0
1534	140	127	9	0
1535	136	127	8	0
1536	131	124	7	0
1537	161	495	8	0
1538	1029	559	13	0
1539	1031	559	13	0
1540	1033	559	13	0
1541	1035	559	13	0
1542	1050	1052	9	0
1543	1069	1062	15	0
1544	1072	546	18	0
1545	1082	147	18	0
1546	1086	539	12	0
1549	1104	127	15	0
1550	1107	546	1106	0
1551	1110	1113	15	0
1552	1120	551	9	0
1553	1123	558	16	0
1554	1148	1062	11	0
1555	1186	546	0	0
1556	1200	1062	0	0
1557	1264	129	8	0
1558	1305	1304	12	0
1560	1341	1344	13	0
1561	1352	539	17	0
1562	1357	124	18	0
1563	1385	141	13	0
1564	1403	129	8	0
1565	1414	539	7	0
1566	1457	552	17	0
1567	1470	1472	15	0
1568	1476	1113	12	0
1569	1504	141	12	0
1570	1506	541	1106	0
1571	1508	1510	12	0
1572	1511	539	12	0
1574	1518	147	12	0
1575	1530	559	1106	0
1577	1585	552	18	0
1579	1611	1613	15	0
1580	1626	541	12	0
1581	1629	542	0	0
1584	1657	127	1656	1655
1589	1664	1668	1656	0
1591	1669	124	1656	1655
1618	1690	552	12	0
1620	1693	1576	18	0
1622	1695	141	8	0
1632	1706	541	7	0
1643	1721	1098	12	0
1646	1723	547	15	0
1650	1726	554	8	0
1677	1750	553	14	0
1681	1754	1113	14	0
1716	1785	546	1656	1655
1719	1788	1790	1656	0
1721	1791	124	1656	1655
1735	1804	551	10	0
1745	1811	1813	12	0
1762	1830	542	18	0
1775	1841	547	13	0
1788	1852	1855	11	0
1805	1866	554	17	0
1820	1881	145	16	0
1829	1891	541	1656	1655
1834	1897	1855	1514	0
1839	1917	127	12	0
1868	1938	127	11	0
1871	1940	541	16	0
1875	1943	1945	1656	0
1898	1961	127	18	0
1903	1965	129	12	0
1921	1979	546	19	0
1933	1988	127	14	0
1945	1997	558	167	0
1964	2014	540	8	0
1968	2017	546	1106	0
1971	2021	127	2020	1655
1973	2029	552	17	0
1990	2037	147	19	0
2002	2051	2053	18	0
2006	2054	1304	18	0
2034	2085	129	8	0
2036	2087	147	19	0
2039	2090	541	19	0
2059	2114	1052	7	0
2065	2118	539	15	0
2067	2121	124	17	0
2071	2123	558	12	0
2108	2152	145	14	0
2111	2157	129	17	0
2125	2170	1776	13	0
2131	2180	547	14	0
2135	2183	1098	14	0
2138	2186	557	19	0
2141	2188	147	12	0
\.


--
-- TOC entry 2582 (class 0 OID 16629)
-- Dependencies: 217
-- Data for Name: adm_def_damage_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_damage_type ("damageTypeId", "isWeapon") FROM stdin;
7	t
8	t
9	t
10	f
11	f
12	f
13	f
14	f
15	f
16	f
17	f
18	f
19	f
167	t
\.


--
-- TOC entry 2557 (class 0 OID 16455)
-- Dependencies: 192
-- Data for Name: adm_def_equipment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_equipment ("equipmentId", "categoryId", cost, weight) FROM stdin;
295	56	0.1	1
198	56	2	2
204	56	25	1
206	56	50	1
208	57	1	1
209	57	1	1
210	57	1	1.5
211	57	0.04	1.5
212	56	50	0
214	58	10	1
215	58	20	3
216	58	10	2
217	58	5	4
218	58	10	1
219	56	2	5
220	56	1	2
222	56	2	70
223	56	0.4	2
224	56	1	7
225	56	1	0
226	56	0.5	3
227	56	1	5
228	56	25	5
230	56	2	2
231	56	0.05	2
232	56	1	2
234	56	0.01	0
236	56	1	1
238	56	1	1
240	56	5	10
242	56	0.01	0
243	56	5	25
244	56	25	12
246	56	0.5	3
247	56	5	4
248	56	15	6
249	56	2	4
250	56	25	2
252	56	2	5
254	59	1	0
255	59	1	0
256	59	5	4
257	59	10	1
258	56	1	4
260	56	0.02	1
261	56	0.02	1
262	56	2	4
263	56	1	3
264	56	2	10
265	56	5	3
267	60	5	1
268	60	5	0
269	60	5	2
270	56	25	1
272	56	25	1
273	56	5	25
275	56	10	0
276	56	0.02	0
277	56	0.02	4
278	56	0.02	4
279	56	0.1	25
280	56	0.5	1
282	56	10	2
284	56	5	2
286	56	10	1
288	56	100	0
290	56	2	6
292	56	0.2	1
294	56	5	0.5
297	56	0.2	0
298	56	0.1	0
299	56	5	0
300	56	2	10
301	56	0.05	0.25
302	56	100	0
304	56	0.05	7
305	56	2	10
306	56	50	0.5
308	56	0.5	1
310	56	1	1
312	56	4	35
314	56	0.5	2
316	56	1	4
317	56	1	10
123	458	0.1	2
125	458	2	1
126	458	0.2	10
172	457	5	8
174	457	10	10
176	457	45	13
178	457	10	12
180	457	50	20
184	457	400	20
182	457	50	45
186	457	750	40
188	457	30	40
190	457	75	55
192	457	200	60
194	457	1500	65
196	457	10	6
319	56	10	5
321	56	0.01	0.5
322	56	5	3
324	56	0.5	0
325	56	2	5
326	56	0.05	0
327	56	5	0
328	56	0.02	0
329	56	50	3
331	56	1	5
332	56	1000	1
334	56	2	20
336	56	0.5	1
338	56	0.01	1
340	56	1	0
341	56	0.2	5
342	56	0.01	1
350	62	50	8
351	62	20	9
352	62	10	5
353	62	8	6
354	62	15	6
355	62	5	5
356	62	1	8
357	62	30	5
358	62	25	2
359	62	5	5
360	62	10	8
361	62	10	5
362	62	10	3
363	62	20	8
364	62	50	10
365	62	1	5
366	62	1	5
367	63	0.1	0
368	63	1	0.5
369	63	0.5	0
370	63	1	0
371	64	30	6
372	64	6	3
373	64	25	10
374	64	2	1
375	64	35	2
376	64	30	2
377	64	3	2
378	64	12	2
379	64	2	1
380	64	30	1
381	61	25	3
383	61	15	5
385	61	5	3
387	61	25	2
389	61	50	2
391	61	25	1
494	114	0.05	0
496	114	0.1	0.25
497	114	0.2	0
500	501	16	47.5
502	501	39	36
503	501	12	61.5
505	501	10	59
506	501	19	25.25
499	56	10	4
498	114	5	3
507	114	1	0.5
508	114	0.01	0
509	501	40	10.5
504	501	40	38
510	114	0.02	0
619	114	0	0
827	458	1	1
828	458	1	1
829	458	2	2
830	458	1	1
831	458	1	2
832	458	1	1
834	458	2	2
835	458	32	2
836	458	1	1
837	458	1	1
838	458	1	1
839	458	1	1
840	458	1	1
128	458	5	2
130	458	0.5	2
131	458	2	2
132	458	5	4
133	458	0.2	4
134	458	1	2
135	458	1	3
136	458	25	5
137	458	0.05	0.25
138	458	25	2
139	458	0.1	0
140	458	10	4
142	458	10	2
143	458	20	6
144	458	30	7
146	458	50	6
148	458	20	6
149	458	10	6
150	458	15	3
151	458	10	10
152	458	15	4
153	458	5	18
154	458	25	2
155	458	25	3
156	458	10	2
157	458	5	4
158	458	5	2
159	458	15	2
160	458	2	3
161	458	10	1
164	458	75	3
165	458	50	18
166	458	50	2
168	458	1	3
\.


--
-- TOC entry 2559 (class 0 OID 16474)
-- Dependencies: 194
-- Data for Name: adm_def_equipment_ammunition; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_equipment_ammunition ("equipmentId", "ammunitionTypeId") FROM stdin;
\.


--
-- TOC entry 2563 (class 0 OID 16493)
-- Dependencies: 198
-- Data for Name: adm_def_equipment_armor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_equipment_armor ("equipmentId", "proficiencyId", "baseArmorClass", "applyDexModifier", "hasMaxDexModifier", "maxDexModifier", "minimumStrength", "stealthDisadvantage", "isCumulative") FROM stdin;
172	31	11	t	f	0	0	t	f
174	31	11	t	f	0	0	f	f
176	31	12	t	f	0	0	f	f
178	32	12	t	t	2	0	f	f
180	32	13	t	t	0	0	f	f
184	32	14	t	t	2	0	f	f
182	32	14	t	t	2	0	t	f
186	32	15	t	t	2	0	t	f
188	33	14	f	f	0	0	t	f
190	33	16	f	f	0	13	t	f
192	33	17	f	f	0	15	t	f
194	33	18	f	f	0	15	t	f
196	34	2	f	f	0	0	f	t
\.


--
-- TOC entry 2558 (class 0 OID 16465)
-- Dependencies: 193
-- Data for Name: adm_def_equipment_count_unit; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_equipment_count_unit ("equipmentId", "itemCount", "unitName") FROM stdin;
204	1	vial
212	1	vial
220	1	bag of 1,000
232	1	bag of 20
240	10	feet
242	1	piece
507	1	
510	1	stick
619	1	
198	1	
208	1	
209	1	
275	1	1 ounce bottle
279	1	10-foot
206	1	flask
270	1	flask
297	1	sheet
298	1	sheet
299	1	vial
302	1	vial
304	1	10-foot
314	1	day
317	50	feet
319	50	feet
494	10	feet
497	1	block
210	1	
211	1	
214	1	
215	1	
216	1	
217	1	
218	1	
219	1	
222	1	
223	1	
224	1	
225	1	
226	1	
227	1	
228	1	
230	1	
231	1	
234	1	
236	1	
238	1	
243	1	
244	1	
246	1	
247	1	
248	1	
249	1	
250	1	
252	1	
254	1	
255	1	
256	1	
257	1	
258	1	
260	1	
261	1	
262	1	
263	1	
264	1	
265	1	
267	1	
268	1	
269	1	
272	1	
273	1	
276	1	
277	1	
278	1	
280	1	
282	1	
284	1	
286	1	
288	1	
290	1	
292	1	
294	1	
295	1	
300	1	
301	1	
305	1	
306	1	
308	1	
310	1	
312	1	
316	1	
321	1	
322	1	
324	1	
325	1	
326	1	
327	1	
328	1	
329	1	
331	1	
332	1	
334	1	
336	1	
338	1	
340	1	
341	1	
342	1	
350	1	
351	1	
352	1	
353	1	
354	1	
355	1	
356	1	
357	1	
358	1	
359	1	
360	1	
361	1	
362	1	
363	1	
364	1	
365	1	
366	1	
367	1	
368	1	
369	1	
370	1	
371	1	
372	1	
373	1	
374	1	
375	1	
376	1	
377	1	
378	1	
379	1	
380	1	
381	1	
383	1	
385	1	
387	1	
389	1	
391	1	
496	1	
498	1	
499	1	
508	1	small bag
\.


--
-- TOC entry 2583 (class 0 OID 16636)
-- Dependencies: 218
-- Data for Name: adm_def_equipment_improvised_weapon; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_equipment_improvised_weapon ("equipmentId", "damageDiceId", "damageTypeId", range) FROM stdin;
204	147	10	20
206	124	12	20
208	162	0	0
209	162	0	0
210	162	0	0
211	162	0	0
212	162	0	0
214	162	0	0
215	162	0	0
216	162	0	0
217	162	0	0
218	162	0	0
219	162	0	0
220	162	0	0
222	162	0	0
223	162	0	0
224	162	0	0
225	162	0	0
226	162	0	0
227	162	0	0
228	162	0	0
230	162	0	0
231	162	0	0
232	162	0	0
234	162	0	0
236	162	0	0
238	162	0	0
240	162	0	0
242	162	0	0
243	162	0	0
244	162	0	0
246	162	0	0
247	162	0	0
248	162	0	0
249	162	0	0
250	162	0	0
252	162	0	0
254	162	0	0
255	162	0	0
256	162	0	0
257	162	0	0
258	162	0	0
260	162	0	0
261	162	0	0
262	162	0	0
263	162	0	0
264	162	0	0
265	162	0	0
267	162	0	0
268	162	0	0
269	162	0	0
270	147	18	20
272	162	0	0
273	162	0	0
275	162	0	0
276	162	0	0
277	162	0	0
278	162	0	0
279	162	0	0
280	162	0	0
282	162	0	0
284	162	0	0
286	162	0	0
288	162	0	0
290	162	0	0
292	162	0	0
294	162	0	0
295	162	20	12
297	162	0	0
298	162	0	0
299	162	0	0
300	162	0	0
301	162	0	0
302	162	0	0
304	162	0	0
305	162	0	0
306	162	0	0
308	162	0	0
310	162	0	0
312	162	0	0
314	162	0	0
316	162	0	0
317	162	0	0
319	162	0	0
321	162	0	0
322	162	0	0
324	162	0	0
325	162	0	0
326	162	0	0
327	162	0	0
328	162	0	0
329	162	0	0
331	162	0	0
332	162	0	0
334	162	0	0
336	162	0	0
338	162	0	0
340	162	0	0
341	162	0	0
342	162	0	0
350	162	0	0
351	162	0	0
352	162	0	0
353	162	0	0
354	162	0	0
355	162	0	0
356	162	0	0
357	162	0	0
358	162	0	0
359	162	0	0
360	162	0	0
361	162	0	0
362	162	0	0
363	162	0	0
364	162	0	0
365	162	0	0
366	162	0	0
367	162	0	0
368	162	0	0
369	162	0	0
370	162	0	0
371	162	0	0
372	162	0	0
373	162	0	0
374	162	0	0
375	162	0	0
376	162	0	0
377	162	0	0
378	162	0	0
379	162	0	0
380	162	0	0
381	162	0	0
383	162	0	0
385	162	0	0
387	162	0	0
389	162	0	0
391	162	0	0
494	495	0	0
496	495	0	0
497	495	0	0
499	495	0	0
498	495	0	0
507	495	0	0
508	495	0	0
510	495	0	0
619	495	0	0
\.


--
-- TOC entry 2564 (class 0 OID 16504)
-- Dependencies: 199
-- Data for Name: adm_def_equipment_weapon; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_equipment_weapon ("equipmentId", "_damageDiceId", "_damageTypeId", "proficiencyId", "categoryId") FROM stdin;
123	124	7	38	35
125	124	8	38	35
126	127	7	38	35
128	129	9	38	35
130	129	8	38	35
131	124	7	38	35
132	129	7	38	35
133	129	7	38	35
134	124	9	38	35
135	129	8	38	35
136	127	8	38	36
137	124	8	38	36
138	129	8	38	36
139	124	7	38	36
140	127	9	37	35
142	127	7	37	35
143	141	9	37	35
144	145	9	37	35
146	147	9	37	35
148	141	9	37	35
149	145	8	37	35
150	127	9	37	35
151	147	7	37	35
152	127	8	37	35
153	141	8	37	35
154	127	8	37	35
155	129	9	37	35
156	129	8	37	35
157	129	8	37	35
158	127	8	37	35
159	127	7	37	35
160	124	9	37	35
161	162	8	37	36
164	129	8	37	36
165	141	8	37	36
166	127	8	37	36
168	162	167	37	36
829	\N	\N	38	35
830	\N	\N	38	35
831	\N	\N	38	35
832	\N	\N	38	35
834	\N	\N	38	35
835	\N	\N	38	35
836	\N	\N	38	35
837	\N	\N	38	35
838	\N	\N	38	35
839	\N	\N	38	35
840	\N	\N	38	35
\.


--
-- TOC entry 2568 (class 0 OID 16528)
-- Dependencies: 203
-- Data for Name: adm_def_equipment_weapon_alt_damage; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_equipment_weapon_alt_damage ("equipmentId", "damageDiceId") FROM stdin;
133	127
135	127
140	141
150	141
157	127
159	141
\.


--
-- TOC entry 2569 (class 0 OID 16533)
-- Dependencies: 204
-- Data for Name: adm_def_equipment_weapon_ammunition; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_equipment_weapon_ammunition ("equipmentId", "ammunitionTypeId") FROM stdin;
136	76
138	75
139	78
161	77
164	76
165	76
166	75
\.


--
-- TOC entry 2566 (class 0 OID 16515)
-- Dependencies: 201
-- Data for Name: adm_def_equipment_weapon_range; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_equipment_weapon_range ("equipmentId", "normalRange", "maximumRange") FROM stdin;
125	20	60
128	30	120
130	30	120
131	20	60
135	20	60
136	80	320
137	20	60
138	80	320
139	30	120
157	20	60
161	25	100
164	30	120
165	100	400
166	150	600
168	5	15
\.


--
-- TOC entry 2567 (class 0 OID 16520)
-- Dependencies: 202
-- Data for Name: adm_def_equipment_weapon_special; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_equipment_weapon_special ("equipmentId", "specialDescription") FROM stdin;
149	You have disadvantage when you use a lance to attack a target within 5 feet of you. Also, a lance requires two hands to wield when you aren't mounted.
168	A large or a smaller creature hit by a net is restrained until it is freed. A net has no effect on creatures that are formless, or creatures that are huge or larger. A creature can use its action to make a DC 10 strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the net (AC 10) also frees the creature without harming it, ending the effect and destroying the net.\nWhen you use an action, bonus action, or reaction to attack with a net, you can make only one attack regardless of the number of attacks you can normally make.
\.


--
-- TOC entry 2580 (class 0 OID 16602)
-- Dependencies: 215
-- Data for Name: adm_def_item_group; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_item_group ("itemGroupId", "mechanicTypeId", "selectCount") FROM stdin;
608	79	1
609	80	2
622	79	1
623	79	1
637	79	1
638	79	1
639	80	1
653	79	1
654	79	1
655	80	1
669	79	1
670	80	1
671	79	1
685	79	1
686	80	1
687	80	1
701	79	1
702	79	1
703	80	1
717	79	1
718	80	1
719	80	1
731	79	1
732	80	1
733	80	1
747	79	1
748	80	2
762	79	1
763	79	1
764	79	1
776	79	1
777	79	1
778	80	1
794	79	1
795	79	1
\.


--
-- TOC entry 2601 (class 0 OID 98618)
-- Dependencies: 236
-- Data for Name: adm_def_picklist_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_picklist_item ("picklistItemId", "orderIndex") FROM stdin;
2268	0
2269	1
2270	2
2271	3
2272	4
2273	5
2275	0
2276	1
2277	1
2278	1
2279	1
\.


--
-- TOC entry 2562 (class 0 OID 16488)
-- Dependencies: 197
-- Data for Name: adm_def_proficiency; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_proficiency ("proficiencyId", "categoryId") FROM stdin;
33	92
31	92
32	92
34	92
199	101
37	101
350	93
351	93
352	93
353	93
354	93
355	93
356	93
357	93
358	93
359	93
360	93
361	93
362	93
363	93
364	93
365	93
366	93
367	94
368	94
369	94
370	94
371	96
372	96
373	96
374	96
375	96
376	96
377	96
378	96
379	96
380	96
381	99
383	99
385	99
387	99
389	99
391	99
123	102
125	102
126	102
128	102
130	102
131	102
132	102
133	102
134	102
135	102
136	102
137	102
138	102
139	102
140	102
142	102
143	102
144	102
146	102
148	102
149	102
150	102
151	102
152	102
153	102
154	102
155	102
156	102
157	102
158	102
159	102
160	102
161	102
164	102
165	102
166	102
168	102
25	97
26	97
27	97
29	97
30	97
38	101
28	97
400	100
403	100
410	98
411	95
412	95
413	95
414	95
415	95
416	95
417	95
418	95
419	95
420	95
421	95
422	95
423	95
424	95
425	95
426	95
427	95
428	95
429	95
430	95
431	95
432	98
433	98
434	98
435	98
436	98
437	98
438	98
439	98
440	98
441	98
442	98
443	98
444	98
445	98
446	98
447	98
448	98
\.


--
-- TOC entry 2572 (class 0 OID 16550)
-- Dependencies: 207
-- Data for Name: adm_def_proficiency_ability_score; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_proficiency_ability_score ("proficiencyId", "abilityScoreId") FROM stdin;
25	25
26	26
27	27
28	28
29	29
30	30
410	26
432	25
433	26
434	26
435	28
436	28
437	28
438	28
439	28
440	29
441	29
442	29
443	29
444	29
445	30
446	30
447	30
448	30
\.


--
-- TOC entry 2555 (class 0 OID 16437)
-- Dependencies: 190
-- Data for Name: adm_def_proficiency_category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_proficiency_category ("proficiencyCategoryId", "parentId", "isEquipmentBased", "requireAbilityScore", "requireLanguageInfo") FROM stdin;
93	99	t	f	f
94	99	t	f	f
95	0	f	f	t
96	99	t	f	f
92	0	f	f	f
97	0	f	t	f
98	0	f	t	f
99	0	f	f	f
100	0	f	f	f
101	0	f	f	f
102	101	t	f	f
\.


--
-- TOC entry 2571 (class 0 OID 16545)
-- Dependencies: 206
-- Data for Name: adm_def_proficiency_language; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_proficiency_language ("proficiencyId", "scriptId", "rarityId") FROM stdin;
411	85	82
412	86	82
413	87	82
414	86	82
415	86	82
416	86	82
417	85	82
418	86	82
419	89	83
420	90	83
421	91	83
422	88	83
423	89	83
424	86	83
425	86	83
426	86	83
427	86	83
428	87	83
429	87	83
430	91	84
431	91	84
\.


--
-- TOC entry 2602 (class 0 OID 98623)
-- Dependencies: 237
-- Data for Name: adm_def_race; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_race ("raceId", "parentId", "sizeId", "monsterTypeId") FROM stdin;
2281	0	2270	2263
\.


--
-- TOC entry 2605 (class 0 OID 98652)
-- Dependencies: 240
-- Data for Name: adm_def_race_ability_score; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_race_ability_score ("raceId", strength, dexterity, constitution, intelligence, wisdom, charisma, "selectCount", "selectModifier") FROM stdin;
2281	0	2	0	-2	0	0	2	1
\.


--
-- TOC entry 2577 (class 0 OID 16585)
-- Dependencies: 212
-- Data for Name: adm_def_spell; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_spell ("spellId", level, "schoolId", "durationId", "rangeId", "castingTimeId", "isRitual") FROM stdin;
807	0	107	450	805	449	f
810	2	106	473	809	449	f
877	1	106	473	809	461	t
879	1	106	473	809	461	t
883	1	106	473	809	461	t
888	2	113	887	886	449	f
890	1	109	472	809	449	f
893	2	109	472	809	449	t
897	8	113	896	809	449	f
900	3	112	450	899	461	f
937	5	113	905	903	449	f
973	8	106	887	972	449	f
983	8	109	982	805	462	f
988	4	108	887	809	449	f
992	6	107	991	990	449	f
995	1	106	994	886	449	f
999	1	107	450	998	449	f
1003	9	112	1002	899	449	f
1007	2	108	450	886	461	t
1010	4	106	991	1009	449	f
1012	3	109	905	1009	449	f
1015	5	113	450	451	1014	f
1017	1	109	905	809	449	f
1022	4	106	905	805	449	f
1029	5	106	905	886	464	f
1031	2	113	994	451	449	f
1033	3	106	905	809	449	f
1035	2	108	887	451	449	t
1037	3	112	905	451	449	f
1050	6	110	991	1047	449	f
1054	0	106	1053	886	449	f
1056	1	109	905	809	449	f
1069	4	112	450	809	449	f
1072	3	110	905	886	464	f
1075	2	112	1074	809	449	f
1078	3	113	1074	886	449	f
1080	2	111	905	886	449	f
1082	2	110	905	886	464	f
1086	1	110	450	1085	449	f
1092	2	109	905	805	449	f
1099	1	109	994	809	449	f
1104	0	112	1053	903	449	f
1107	1	110	450	1047	449	f
1110	6	112	450	1094	449	f
1114	5	106	991	1009	449	f
1116	3	108	991	474	463	f
1118	8	112	450	451	462	f
1120	2	107	905	805	449	f
1123	5	107	991	903	449	f
1126	1	111	1053	1085	449	f
1129	1	109	1053	805	449	f
1137	5	108	1074	886	461	t
1139	5	108	450	886	461	t
1141	1	109	905	809	464	f
1143	1	108	994	886	449	t
1145	4	109	905	809	449	f
1148	5	110	450	1147	449	f
1178	4	109	905	1047	449	f
1183	3	107	887	805	449	f
1186	3	107	450	1147	449	f
1188	7	107	887	1047	461	f
1191	5	107	887	1047	461	f
1194	6	107	887	1047	461	f
1197	4	107	887	1047	461	f
1200	5	107	450	1094	449	f
1202	4	107	887	805	449	f
1205	5	108	1074	886	461	t
1208	5	112	1207	451	449	f
1216	6	110	982	886	463	f
1219	2	110	1218	451	449	f
1242	4	113	991	1221	449	f
1255	8	113	991	1228	463	f
1264	2	113	473	1263	449	f
1270	3	107	450	809	449	f
1272	1	113	450	809	449	f
1276	6	112	450	899	461	f
1279	5	111	1002	809	461	f
1284	2	109	905	903	449	f
1286	3	110	905	886	449	f
1291	0	110	905	903	449	f
1293	2	110	991	805	449	f
1295	2	113	473	451	449	f
1297	3	110	994	805	449	f
1299	4	106	473	451	449	f
1305	7	110	905	451	449	f
1308	8	107	994	805	449	f
1314	1	108	991	886	449	f
1267	3	106	450	805	1454	f
942	5	106	887	998	449	f
1316	1	108	991	886	449	t
1318	1	108	991	886	449	t
1320	2	108	905	886	449	f
1322	4	107	450	990	449	f
1324	1	111	994	886	449	f
1341	6	113	450	805	449	f
1345	5	106	905	886	449	f
1349	3	106	450	903	449	f
1352	1	109	450	805	449	f
1355	4	108	450	886	449	t
1357	1	110	905	886	464	f
1359	7	110	450	809	464	f
1361	4	109	905	805	449	f
1364	8	109	887	805	449	f
1367	5	109	905	805	449	f
1370	6	107	1218	451	461	t
1373	5	111	473	1372	461	f
1375	0	113	450	809	449	f
1377	8	110	905	990	449	f
1385	0	110	450	903	449	f
1387	3	113	887	451	449	f
1390	2	113	887	451	449	f
1399	2	113	905	809	449	f
1403	1	107	905	886	464	f
1406	1	107	905	1047	449	f
1408	2	109	1074	805	449	f
1411	7	113	1410	886	449	f
1414	4	107	905	1047	449	f
1416	1	113	991	886	464	f
1419	6	112	905	886	449	f
1424	4	113	450	903	463	f
1426	1	110	905	805	449	f
1448	1	112	994	886	449	f
1452	3	111	905	1451	449	f
1455	1	113	1074	805	1454	f
1457	8	109	450	1094	449	f
1459	3	112	994	451	449	t
1461	1	107	450	899	462	t
1463	2	107	450	809	463	f
1466	6	108	1465	886	461	f
1468	2	108	450	903	449	f
1470	7	112	450	805	449	f
1476	3	110	450	1094	449	f
1504	0	110	450	903	449	f
1506	4	110	982	886	449	f
1508	7	110	450	1094	449	f
1511	2	110	991	886	464	f
1518	2	107	905	805	449	f
1523	3	113	991	451	449	f
1526	1	107	887	903	449	f
1530	6	106	1529	451	463	t
1533	7	110	994	1532	449	f
1535	9	108	473	451	461	f
1537	4	106	994	451	449	f
1539	0	109	905	886	449	f
1541	3	113	887	451	449	f
1543	9	107	905	805	449	f
1546	5	109	1545	805	461	f
1549	2	112	982	451	449	t
1551	4	113	991	809	449	f
1553	8	113	994	886	449	f
1555	6	106	905	998	449	f
1559	3	106	1558	451	462	f
1564	1	113	450	451	449	f
1566	4	107	905	809	464	f
1568	1	107	1074	805	449	f
1570	4	111	905	451	449	f
1572	5	106	450	451	449	f
1577	6	106	472	451	463	f
1583	0	108	905	451	449	f
1585	1	110	1053	903	449	f
1591	2	110	905	1588	449	f
1597	5	110	1218	451	1596	f
1609	4	111	472	1221	463	f
1611	6	112	450	805	449	f
1618	3	113	905	809	449	f
1626	2	113	905	805	449	f
1629	1	110	450	805	1454	f
1632	6	107	450	809	463	f
1637	1	109	887	1047	464	f
1640	5	109	905	1047	449	f
1643	2	109	905	805	449	f
1646	8	106	905	886	449	f
1650	1	108	887	1047	464	f
1653	3	111	905	903	449	f
1657	1	110	450	451	449	f
1664	6	110	450	805	449	f
1669	1	110	450	805	464	f
1690	5	110	450	805	449	f
1693	4	107	473	809	449	f
1695	1	107	905	886	464	f
1706	4	110	450	1221	449	f
1709	1	108	450	451	461	t
1711	1	111	982	451	461	t
1713	9	106	1218	809	461	f
1721	8	107	905	1094	449	f
1723	1	112	450	451	449	f
1726	5	107	991	1221	449	f
1729	2	111	887	451	449	f
1733	1	113	1074	451	449	f
1735	2	113	450	805	449	f
1737	5	108	450	886	463	f
1739	4	107	450	451	449	f
1742	3	110	473	1741	461	f
1744	2	106	450	451	449	f
1746	2	113	991	805	449	f
1748	0	110	994	451	449	f
1750	3	113	905	886	464	f
1754	3	110	450	1753	449	f
1757	2	108	450	886	449	t
1759	4	108	887	886	449	f
1761	2	108	991	886	449	f
1763	1	113	994	451	449	f
1766	0	107	1074	809	449	f
1768	3	106	994	899	461	f
1771	6	112	1218	886	461	f
1777	2	111	1218	809	461	t
1779	2	113	887	451	464	f
1782	3	111	991	903	449	f
1785	5	110	450	805	449	f
1788	9	110	450	805	449	f
1791	3	110	450	805	464	f
1797	6	109	472	805	449	f
1800	8	107	991	805	449	f
1802	3	113	473	451	449	t
1804	2	110	450	1047	449	f
1807	0	113	450	451	461	f
1809	0	113	1053	903	449	f
1811	9	110	450	474	449	f
1814	8	106	472	451	449	f
1816	0	111	1074	809	449	f
1819	7	111	982	1818	463	f
1821	2	111	1074	886	449	f
1825	2	107	450	886	464	f
1827	5	109	905	809	449	f
1830	2	110	905	903	449	f
1833	4	107	473	809	449	f
1835	7	107	472	1221	461	f
1837	4	106	472	903	463	f
1841	7	110	905	805	449	f
1844	6	113	1843	903	449	f
1846	3	106	473	451	449	f
1848	2	111	472	451	449	f
1852	6	110	450	1221	449	f
1856	4	110	905	809	449	f
1858	6	109	905	809	449	f
1860	2	106	887	886	449	f
1862	5	113	994	809	449	f
1864	2	111	905	805	449	f
1866	4	111	905	903	449	f
1869	3	111	994	809	461	t
1871	6	107	450	805	463	f
1873	5	106	472	805	449	f
1876	7	107	450	451	449	f
1879	3	113	450	1094	1878	f
1881	0	107	450	899	449	f
1883	4	113	887	805	449	f
1885	9	110	450	451	449	f
1887	9	109	450	805	449	f
1889	8	109	450	805	449	f
1891	2	110	450	809	463	f
1895	0	113	1894	899	449	f
1897	7	110	450	1147	449	f
1908	9	106	1907	805	449	f
1917	0	107	1907	886	449	f
1919	6	111	1218	903	449	f
1922	7	111	1465	1921	449	f
1924	3	106	887	451	449	f
1926	1	106	991	451	449	f
1928	2	106	994	451	449	f
1930	1	113	450	899	449	t
1932	5	112	450	451	462	f
1934	5	108	994	809	449	t
1936	2	112	905	805	449	f
1938	0	110	450	805	449	f
1940	1	112	450	805	449	f
1943	7	113	994	451	461	f
1949	3	106	450	451	449	f
1951	0	106	905	451	449	f
1953	7	112	450	451	462	f
1955	7	113	905	1532	449	f
1957	3	112	450	451	449	f
1959	2	113	994	451	449	f
1961	0	110	450	805	449	f
1963	1	106	1074	809	464	f
1965	1	110	905	886	464	f
1968	2	108	994	886	449	f
1970	5	111	473	809	449	f
1973	3	110	1053	1972	449	f
1975	7	113	1218	451	449	f
1823	5	111	1074	886	449	f
1977	9	113	887	886	449	f
1979	2	110	450	805	449	f
1982	1	106	1053	886	1454	f
1984	1	106	991	805	464	f
1986	0	110	450	451	449	f
1988	0	110	450	451	449	f
1990	2	111	991	903	449	t
1992	1	111	991	805	449	f
1995	7	111	1218	451	1994	f
1997	1	109	1074	1047	449	f
2000	3	107	905	1094	449	f
2004	0	112	450	451	449	f
2006	1	108	1907	886	449	t
2008	3	112	1907	899	449	f
2010	3	113	1907	1009	449	f
2012	2	113	887	451	449	f
2014	2	113	991	1094	449	f
2017	3	107	991	2016	449	f
2021	2	110	1074	805	464	f
2029	4	110	905	886	464	f
2031	3	107	905	1047	449	f
2033	4	113	450	451	449	f
2037	9	107	905	1818	449	f
2047	4	106	887	451	449	f
2049	2	109	1229	809	449	f
2051	6	110	905	1588	449	f
2054	8	110	450	1094	449	f
2056	5	113	905	451	464	f
2058	7	106	1558	451	461	f
2068	1	109	905	809	449	f
2070	5	113	991	805	449	f
2074	8	110	472	1972	449	f
2076	5	107	1053	899	461	f
2078	1	107	994	809	449	t
2081	0	113	2080	809	449	f
2085	0	113	450	809	449	f
2087	1	110	905	886	464	f
2090	1	110	450	2089	449	f
2093	9	113	450	886	449	f
2095	3	108	994	451	449	f
2097	6	107	1053	899	449	f
2099	5	107	905	886	449	f
2101	9	113	887	809	449	f
2106	9	112	450	451	462	f
2108	6	108	994	451	449	f
2111	0	108	2110	809	449	f
2114	8	107	2113	1818	461	f
2116	1	107	994	805	449	t
2118	3	112	905	886	449	f
2121	0	109	450	805	449	f
2123	4	110	905	903	449	f
2126	5	110	991	903	449	f
2128	6	110	991	903	449	f
2131	5	110	991	903	449	f
2133	6	107	991	903	449	f
2136	2	106	994	451	449	f
2138	3	113	472	809	449	t
2140	3	113	994	809	449	t
2142	2	107	887	805	449	f
2144	9	111	905	903	449	f
2146	6	113	473	809	461	f
2148	3	110	905	903	449	f
2150	9	107	450	886	449	f
2152	1	110	905	809	449	f
2155	6	107	450	1263	449	f
2157	1	110	905	886	464	f
2159	2	109	1907	805	449	f
2170	1	110	450	903	449	f
2173	5	110	905	903	449	f
2180	3	107	991	903	449	f
2183	6	110	450	1094	449	f
2186	5	110	450	1009	449	f
2188	2	109	450	903	449	f
2191	6	113	905	805	449	f
2193	1	106	473	451	449	f
2195	3	107	905	1094	449	f
2197	3	113	905	903	449	f
2200	1	109	905	451	449	f
2210	5	113	450	451	462	f
2214	5	108	991	886	463	f
2220	7	107	450	899	449	f
2243	4	106	991	1009	449	f
2249	2	106	1218	451	449	f
\.


--
-- TOC entry 2584 (class 0 OID 16643)
-- Dependencies: 219
-- Data for Name: adm_def_spell_component; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_spell_component ("spellComponentId", "requireDescription") FROM stdin;
105	f
104	f
103	t
\.


--
-- TOC entry 2587 (class 0 OID 24856)
-- Dependencies: 222
-- Data for Name: adm_def_spell_damage; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_spell_damage ("spellId", "improvementDiceId", "attackRollTypeId", "conditionId", "maximumDamageDiceId", "improvementLevelCount", "projectileCount", "improvementProjectileCount") FROM stdin;
1069	127	0	0	0	1	0	0
1082	129	0	0	0	1	0	0
1086	129	0	0	0	1	0	0
1107	127	0	0	0	1	0	0
1110	147	0	0	0	1	0	0
1120	848	0	0	0	1	0	0
1123	127	0	0	0	1	0	0
1148	127	0	0	0	1	0	0
1305	129	0	0	0	1	0	0
1341	539	0	0	0	1	0	0
1352	129	0	0	0	1	0	0
1403	129	0	863	0	1	0	0
1406	0	0	863	0	1	0	0
1414	162	0	863	0	1	0	0
1419	0	0	1418	0	1	0	0
1452	0	0	853	0	1	0	0
1476	129	0	0	0	1	0	0
1511	129	1382	0	0	1	0	0
1518	129	0	0	0	1	0	0
1585	129	1384	0	0	1	0	0
1626	127	0	0	0	1	0	0
1629	141	0	0	0	1	0	0
1640	0	0	857	0	1	0	0
1643	0	0	857	0	1	0	0
1653	0	0	851	0	1	0	0
1657	127	0	0	0	1	0	0
1664	1667	0	0	0	1	0	0
1669	124	0	0	0	1	0	0
1690	129	0	0	0	1	0	0
1695	141	0	0	1052	1	0	0
890	0	0	851	0	1	0	0
1706	127	0	0	0	1	0	0
1723	141	1382	0	0	1	0	0
1785	127	0	0	0	1	0	0
1791	124	0	0	0	1	0	0
1797	0	0	851	0	1	0	0
1830	141	0	0	0	1	0	0
1841	0	1840	0	0	1	0	0
1852	129	0	0	0	1	0	0
1891	127	0	0	0	1	0	0
1936	0	1384	0	0	1	0	0
1997	541	0	0	0	1	0	0
2000	0	0	862	0	1	0	0
1726	141	0	0	0	1	0	0
1750	127	1383	0	0	1	0	0
1754	129	0	0	0	1	0	0
1804	124	1384	0	0	1	0	0
1866	141	0	0	0	1	0	0
1940	127	1384	861	0	1	0	0
1965	129	1382	0	0	1	0	0
1979	127	0	0	0	1	0	0
2017	127	0	0	0	1	0	0
807	129	0	0	0	0	0	0
1104	127	0	0	0	0	0	0
1385	162	1384	0	0	0	0	0
1504	141	1384	0	0	0	0	0
1881	145	0	0	0	0	0	0
1917	127	1384	0	0	0	0	0
1938	127	1384	0	0	0	0	0
1961	127	0	0	0	0	0	0
1988	127	1840	0	0	0	0	0
2021	127	1382	0	0	2	0	0
2029	0	1382	0	0	0	0	0
2037	0	0	860	0	0	0	0
2051	0	0	859	0	0	0	0
2054	0	0	859	0	0	0	0
2068	0	0	855	0	0	0	0
2085	129	1840	0	0	0	0	0
2087	0	1382	862	0	0	0	0
2090	127	0	0	0	0	0	0
2118	129	1840	0	0	0	0	0
2121	124	0	0	0	0	0	0
2123	127	0	0	0	0	0	0
2142	0	0	863	0	0	0	0
2152	145	1384	0	0	0	0	0
2157	0	0	853	0	0	0	0
2170	0	0	0	0	1	3	1
2180	141	0	0	0	0	0	0
2183	0	0	0	0	1	3	1
2186	0	0	862	0	0	0	0
2188	0	1384	0	0	1	3	1
\.


--
-- TOC entry 2588 (class 0 OID 24867)
-- Dependencies: 223
-- Data for Name: adm_def_spell_saving_throw; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_spell_saving_throw ("spellId", "abilityScoreId", "effectId") FROM stdin;
1050	26	1699
1069	27	1699
1086	26	1699
2180	26	1699
2183	26	1699
1110	27	1699
1123	27	1699
1148	27	1699
1186	26	1699
1200	26	1699
1352	29	1699
1470	27	1699
1476	26	1699
1508	26	1699
1518	26	1699
1611	27	1699
1629	26	1699
1690	26	1699
1693	26	1699
807	26	1700
1341	26	1700
890	29	1701
1037	29	1701
1072	27	1701
1075	27	1701
1092	30	1701
1099	29	1701
1178	29	1701
1361	29	1701
1364	29	1701
1367	29	1701
1403	25	1701
1406	25	1701
1408	29	1701
1414	26	1701
1419	29	1701
1426	26	1701
1452	29	1701
1457	28	1701
1546	29	1701
1566	26	1701
1591	25	1701
1640	29	1701
1643	29	1701
1653	29	1701
1305	26	1702
1141	29	1701
1264	26	1699
1695	26	1699
1706	26	1699
1713	29	1701
1721	26	1699
1726	30	1699
1750	26	1699
1754	26	1699
1797	29	1701
1811	26	1699
1830	27	1699
1852	27	1699
1858	29	1701
1864	28	1701
1866	29	1701
1881	27	1700
1889	27	1701
1897	26	1699
1936	27	1701
1940	27	1701
1961	26	1700
1965	27	1701
1970	30	1701
1979	27	1699
2000	26	1701
2017	29	1699
2029	29	1701
2031	27	1701
2037	27	1701
2049	29	1701
2051	27	1699
2054	27	1699
2068	29	1701
2087	27	1701
2090	1655	1699
2114	25	1699
2121	29	1700
2123	26	1699
2142	26	1701
2157	29	1701
2159	30	1701
2186	27	1699
2191	27	1701
\.


--
-- TOC entry 2596 (class 0 OID 57618)
-- Dependencies: 231
-- Data for Name: adm_def_supplemental_description; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_supplemental_description ("descriptionId", title, "orderIndex") FROM stdin;
975	Targeted Effects.	0
976	Areas of Magic.	1
977	Spells.	2
978	Magic Items.	3
979	Magical Travel.	4
980	Creatures and Objects.	5
981	Dispel Magic.	6
985	Antipathy.	0
986	Sympathy.	1
987	Ending the Effect.	2
1132	Approach.	0
1133	Drop.	1
1134	Flee.	2
1135	Grovel.	3
1136	Halt.	4
1210	Blinding Sickness.	0
1211	Filth Fever.	1
1212	Flesh Rot.	2
1213	Mindfire.	3
1214	Seizure.	4
1215	Slimy Doom.	5
1244	Flood.	0
1245	Part Water.	1
1246	Redirect Flow.	2
1247	Whirlpool.	3
1275	Create Water.	0
1347	Break Enchantment.	0
1348	Dismissal.	1
1379	Fissures.	0
1380	Structures.	1
1393	Bear’s Endurance.	0
1394	Bull’s Strength.	1
1395	Cat’s Grace.	2
1396	Eagle’s Splendor.	3
1397	Fox’s Cunning.	4
1398	Owl’s Wisdom.	5
1401	Enlarge.	0
1402	Reduce.	1
1421	Asleep.	0
1422	Panicked.	1
1423	Sickened.	2
1562	Explosive Runes.	0
1563	Spell Glyph.	1
1579	Corridors.	0
1580	Doors.	1
1581	Stairs.	2
1582	Other Spell Effect.	3
1599	Courage.	0
1600	Darkness.	1
1601	Daylight.	2
1602	Energy Protection.	3
1603	Energy Vulnerability.	4
1604	Everlasting Rest.	5
1605	Extradimensional Interference.	6
1606	Fear.	7
1607	Silence.	8
1608	Tongues.	9
1715	Burial.	0
1716	Chaining.	1
1717	Hedged Prison.	2
1718	Minimus Containment.	3
1719	Slumber.	4
1720	Ending the Spell.	5
1850	False Aura.	0
1851	Mask.	1
1899	1. Red.	0
1900	2. Orange.	1
1901	3. Yellow.	2
1902	4. Green.	3
1903	5. Blue.	4
1904	6. Indigo.	5
1905	7. Violet.	6
1906	8. Special.	7
1910	1. Red.	0
1911	2. Orange.	1
1912	3. Yellow.	2
1913	4. Green.	3
1914	5. Blue.	4
1915	6. Indigo.	5
1916	7. Violet.	6
2039	Round 2.	0
2040	Round 3.	1
2041	Round 4.	2
2042	Round 5-10.	3
2060	Death.	0
2061	Discord.	1
2062	Fear.	2
2063	Hopelessness.	3
2064	Insanity.	4
2065	Pain.	5
2066	Sleep.	6
2067	Stunning.	7
2072	Creature.	0
2073	Object.	1
2103	Creature into Creature.	0
2104	Object into Creature.	1
2105	Creature into Object.	2
2176	Clenched Fist.	0
2177	Forceful Hand.	1
2178	Grasping Hand.	2
2179	Interposing Hand.	3
2224	Familiarity.	0
2225	On Target.	1
2226	Off Target.	2
2227	Similar Area.	3
2228	Mishap.	4
\.


--
-- TOC entry 2554 (class 0 OID 16428)
-- Dependencies: 189
-- Data for Name: adm_def_weapon_property; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_def_weapon_property ("weaponPropertyId", "requireAmmunition", "requireDamage", "requireDescription", "requireRange") FROM stdin;
39	t	f	f	t
40	f	f	f	f
41	f	f	f	f
42	f	f	f	f
43	f	f	f	f
44	f	f	f	f
45	f	f	t	f
46	f	f	f	t
47	f	f	f	f
48	f	t	f	f
\.


--
-- TOC entry 2606 (class 0 OID 98663)
-- Dependencies: 241
-- Data for Name: adm_link_ability_score_select; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_link_ability_score_select (id, "referenceId", "selectCount", "selectValue") FROM stdin;
3771	2281	1	2
3772	2281	2	-1
\.


--
-- TOC entry 2604 (class 0 OID 98635)
-- Dependencies: 239
-- Data for Name: adm_link_array_with_int_value; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_link_array_with_int_value (id, "referenceId", "movementTypeId", "intValue") FROM stdin;
3768	2281	2275	30
3770	2281	2276	20
3773	2281	2284	60
\.


--
-- TOC entry 2576 (class 0 OID 16579)
-- Dependencies: 211
-- Data for Name: adm_link_chart; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_link_chart (id, "referenceId", "chartId", "orderIndex") FROM stdin;
615	606	611	0
616	606	612	1
617	606	613	2
618	606	614	3
630	620	625	0
631	620	626	1
632	620	627	2
633	620	628	3
634	620	629	4
646	635	641	0
647	635	642	1
648	635	643	2
649	635	644	3
650	635	645	4
662	651	657	0
663	651	658	1
664	651	659	2
665	651	660	3
666	651	661	4
678	667	673	0
679	667	674	1
680	667	675	2
681	667	676	3
682	667	677	4
694	683	689	0
695	683	690	1
696	683	691	2
697	683	692	3
698	683	693	4
710	699	705	0
711	699	706	1
712	699	707	2
713	699	708	3
714	699	709	4
725	715	721	0
726	715	722	1
727	715	723	2
728	715	724	3
740	729	735	0
741	729	736	1
742	729	737	2
743	729	738	3
744	729	739	4
755	745	750	0
756	745	751	1
757	745	752	2
758	745	753	3
759	745	754	4
770	760	766	0
771	760	767	1
772	760	768	2
773	760	769	3
786	774	780	0
787	774	781	1
788	774	782	2
789	774	783	3
790	774	785	4
791	774	785	5
801	792	797	0
802	792	798	1
803	792	799	2
804	792	800	3
941	937	940	0
1182	1178	1181	0
1260	1255	1257	0
1261	1255	1258	1
1262	1255	1259	2
1283	1279	1282	0
2213	2210	2212	0
2218	2214	2216	0
2219	2214	2217	1
2223	2220	2222	0
\.


--
-- TOC entry 2570 (class 0 OID 16538)
-- Dependencies: 205
-- Data for Name: adm_link_equipment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_link_equipment (id, "referenceId", "equipmentId", "assignedCount") FROM stdin;
87	500	219	1
88	500	220	1
89	500	494	1
90	500	225	1
91	500	234	6
92	500	252	1
93	500	263	1
94	500	301	10
95	500	284	1
96	500	295	2
97	500	314	5
98	500	336	1
99	500	341	1
100	500	317	1
101	502	243	1
102	502	238	2
103	502	248	1
104	502	275	1
105	502	276	1
106	502	280	1
107	502	295	2
108	502	297	5
109	502	299	1
110	502	324	1
111	502	328	1
112	503	219	1
113	503	252	1
114	503	263	1
115	503	301	10
116	503	338	10
117	503	336	1
118	503	314	10
119	503	341	1
120	503	317	1
128	505	219	1
129	505	224	1
130	505	292	1
131	505	336	1
132	505	338	10
133	505	314	10
134	505	341	1
135	505	317	1
136	506	219	1
137	506	226	1
138	506	234	10
139	506	336	1
140	506	496	1
141	506	498	1
142	506	499	1
143	506	314	2
144	506	341	1
145	509	508	1
146	509	507	1
147	509	219	1
148	509	228	1
149	509	276	1
150	509	275	1
151	509	298	10
121	504	219	1
122	504	224	1
123	504	247	2
124	504	234	5
125	504	314	5
126	504	341	1
127	504	381	1
242	606	267	1
243	606	228	1
244	606	510	5
245	606	499	1
246	606	246	1
278	620	381	1
279	620	248	1
318	635	252	1
319	635	246	1
361	651	64	1
362	651	247	1
406	667	62	1
407	667	325	1
408	667	305	1
409	667	246	1
453	683	62	1
454	683	249	1
508	699	238	1
509	699	226	1
510	699	246	1
511	699	385	1
553	715	248	1
554	715	327	1
555	715	619	1
589	729	273	1
590	729	249	1
634	745	275	1
635	745	276	1
636	745	246	1
637	745	507	1
677	760	319	1
678	760	246	1
712	774	63	1
713	774	246	1
761	792	507	1
762	792	246	1
\.


--
-- TOC entry 2578 (class 0 OID 16590)
-- Dependencies: 213
-- Data for Name: adm_link_item_group; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_link_item_group (id, "referenceId", "itemGroupId") FROM stdin;
276	606	608
277	606	609
316	620	622
317	620	623
358	635	637
359	635	638
360	635	639
403	651	653
404	651	654
405	651	655
450	667	669
451	667	670
452	667	671
505	683	685
506	683	686
507	683	687
550	699	701
551	699	702
552	699	703
586	715	717
587	715	718
588	715	719
631	729	731
632	729	732
633	729	733
675	745	747
676	745	748
709	760	762
710	760	763
711	760	764
758	774	776
759	774	777
760	774	778
793	792	794
794	792	795
\.


--
-- TOC entry 2579 (class 0 OID 16596)
-- Dependencies: 214
-- Data for Name: adm_link_item_group_assignment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_link_item_group_assignment (id, "itemGroupId", "itemId") FROM stdin;
273	608	441
274	608	439
275	609	95
312	622	445
313	622	433
314	623	381
315	623	383
354	637	445
355	637	434
356	638	391
357	639	94
399	653	410
400	653	446
401	654	381
402	655	96
446	669	440
447	669	444
448	670	93
449	671	400
501	685	441
502	685	447
503	686	93
504	687	95
546	701	442
547	701	439
548	702	385
549	703	95
582	717	436
583	717	447
584	718	94
585	719	95
627	731	432
628	731	444
629	732	96
630	733	95
672	747	435
673	747	436
674	748	95
705	762	432
706	762	443
707	763	387
708	764	403
754	776	432
755	776	448
756	777	400
757	778	94
789	794	433
790	794	434
791	795	381
792	795	391
\.


--
-- TOC entry 2590 (class 0 OID 33072)
-- Dependencies: 225
-- Data for Name: adm_link_mechanic; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_link_mechanic (id, "referenceId", "targetId", "typeId", value, "diceId", "valueObjectId") FROM stdin;
808	810	845	847	5	0	0
809	810	846	847	5	0	0
810	812	845	847	5	0	0
811	812	846	847	5	0	0
1318	1448	1429	1428	0	1439	0
1319	1450	1429	847	5	0	0
1445	1618	26	870	0	0	0
1446	1618	1614	1617	2	0	0
1447	1618	1615	847	2	0	0
1448	1618	1616	847	1	0	0
1463	1626	26	870	0	0	0
1464	1626	1614	1617	2	0	0
1465	1626	1615	847	2	0	0
1466	1626	1616	847	1	0	0
1469	1629	26	870	0	0	0
1470	1629	1614	1617	2	0	0
1471	1629	1615	847	2	0	0
1472	1629	1616	847	1	0	0
1476	1632	29	870	0	0	0
1477	1632	853	872	0	0	0
1478	1632	16	872	0	0	0
1479	1632	845	1428	0	542	0
1657	1733	1732	1617	3	0	0
1694	1763	1614	847	10	0	0
1796	1860	434	847	10	0	0
1848	1924	1106	868	0	0	0
1854	1928	16	870	0	0	0
1855	1928	16	868	0	0	0
1924	1982	1615	847	5	0	0
1928	1984	1615	847	2	0	0
1974	2029	2028	867	0	0	0
1975	2029	2027	867	0	0	0
1994	2047	2043	868	0	0	0
1995	2047	2044	868	0	0	0
1996	2047	2045	868	0	0	0
2156	2200	1429	2199	0	0	1655
2157	2200	853	872	0	0	0
\.


--
-- TOC entry 2603 (class 0 OID 98629)
-- Dependencies: 238
-- Data for Name: adm_link_monster_tag; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_link_monster_tag (id, "referenceId", "monsterTagId") FROM stdin;
3767	2281	2280
3769	2281	2282
\.


--
-- TOC entry 2581 (class 0 OID 16617)
-- Dependencies: 216
-- Data for Name: adm_link_spell_component; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_link_spell_component (id, "referenceId", "componentId", description) FROM stdin;
1315	1448	104	\N
1316	1448	105	\N
1317	1448	103	a small amount of alcohol or distilled spirits
1325	1457	104	\N
1326	1457	105	\N
1327	1457	103	a handful of clay, crystal, glass, or mineral spheres
981	1069	105	\N
795	807	104	\N
796	807	105	\N
800	810	104	\N
801	810	105	\N
802	810	103	a tiny bit of white cloth
812	877	103	(a tiny bell and a piece of fine silver wire
813	877	105	\N
814	877	104	\N
815	879	103	(a tiny bell and a piece of fine silver wire
816	879	105	\N
817	879	104	\N
822	883	105	\N
823	883	104	\N
821	883	103	a tiny bell and a piece of fine silver wire
824	888	105	\N
825	888	104	\N
826	890	105	\N
827	890	104	\N
828	893	103	a morsel of food
829	893	105	\N
830	893	104	\N
831	890	103	a morsel of food
832	897	105	\N
833	897	104	\N
834	900	103	a drop of blood, a piece of flesh, and a pinch of bone dust
835	900	105	\N
836	900	104	\N
869	937	105	\N
870	937	104	\N
907	942	105	\N
908	942	104	\N
916	973	103	a pinch of powdered iron or iron filings
917	973	105	\N
918	973	104	\N
919	983	103	either a lump of alum soaked in vinegar for the antipathy effect or a drop of honey for the sympathy effect
920	983	105	\N
921	983	104	\N
922	988	103	a bit of bat fur
923	988	105	\N
924	988	104	\N
925	992	104	\N
926	992	105	\N
927	995	103	a cup of water
928	995	105	\N
929	995	104	\N
930	999	105	\N
931	999	104	\N
932	1003	103	for each creature you affect with this spell, you must provide one jacinth worth at least 1,000 gp and one ornately carved bar of silver worth at least 100 gp, all of which the spell consumes
933	1003	105	\N
934	1003	104	\N
938	1007	103	specially marked sticks, bones, or similar tokens worth at least 25 gp
939	1007	105	\N
940	1007	104	\N
941	1010	104	\N
942	1012	104	\N
943	1015	103	an agate worth at least 1,000 gp, which the spell consumes
944	1015	105	\N
945	1015	104	\N
946	1017	103	a drop of blood
947	1017	105	\N
948	1017	104	\N
950	1022	103	an item distasteful to the target
951	1022	104	\N
954	1029	104	\N
955	1031	103	a handful of oak bark
956	1031	105	\N
957	1031	104	\N
958	1033	105	\N
959	1033	104	\N
960	1035	105	\N
961	1037	105	\N
962	1037	104	\N
968	1050	105	\N
969	1050	104	\N
970	1054	105	\N
971	1054	104	\N
972	1056	103	a sprinkling of holy water
973	1056	105	\N
974	1056	104	\N
982	1069	104	\N
983	1072	104	\N
984	1075	104	\N
985	1078	105	\N
986	1078	104	\N
987	1080	104	\N
988	1082	104	\N
989	1086	105	\N
990	1086	104	\N
993	1092	105	\N
994	1092	104	\N
998	1099	105	\N
999	1099	104	\N
1002	1104	105	\N
1003	1104	104	\N
1004	1107	103	a diamond worth at least 50 gp
1005	1107	105	\N
1006	1107	104	\N
1007	1110	103	the powder of a crushed black pearl worth at least 500 gp
1008	1110	105	\N
1009	1110	104	\N
1010	1114	104	\N
1011	1116	104	\N
1012	1116	105	\N
1013	1116	103	a focus worth at least 100 gp, either a jeweled horn for hearing or a glass eye for seeing
1014	1118	103	a diamond worth at least 1,000 gp and at least 1 cubic inch of flesh of the creature that is to be cloned, which the spell consum es, and a vessel worth at least 2,000 gp that has a sealable lid and is large enough to hold a Medium creature, such as a huge urn, coffin, mud-filled cyst in the ground, or crystal container filled with salt water
1015	1118	105	\N
1016	1118	104	\N
1017	1120	103	a sliver of glass
1018	1120	105	\N
1019	1120	104	\N
1020	1123	105	\N
1021	1123	104	\N
1022	1126	103	a pinch of powder or sand that is colored red, yellow, and blue
1023	1126	105	\N
1024	1126	104	\N
1025	1129	104	\N
1026	1137	103	incense and a vial of hly or unholy water
1027	1137	105	\N
1028	1137	104	\N
1029	1139	105	\N
1030	1139	104	\N
1031	1141	104	\N
1032	1143	103	a pinch of soot and salt
1033	1143	105	\N
1034	1143	104	\N
1035	1145	105	\N
1036	1145	104	\N
1037	1148	103	a small crystal or glass cone
1038	1148	105	\N
1039	1148	104	\N
1320	1452	104	\N
1321	1452	105	\N
1322	1452	103	a white feather or the heart of a hen
1328	1459	104	\N
1329	1459	105	\N
1330	1459	103	a pinch of graveyard dirt
1334	1463	104	\N
1335	1463	105	\N
1339	1468	104	\N
1340	1468	105	\N
1346	1476	104	\N
1347	1476	105	\N
1348	1476	103	a tiny ball of bat guano and sulfur
1351	1506	104	\N
1352	1506	105	\N
1353	1506	103	a bit of phosphorus or a firefly
1356	1511	104	\N
1357	1511	105	\N
1358	1511	103	leaf of sumac
1362	1518	104	\N
1363	1518	105	\N
1364	1518	103	a bit of tallow, a pinch of brimstone, and a dusting of powdered iron
1062	1178	104	\N
1063	1178	105	\N
1064	1178	103	three nut shells
1069	1183	104	\N
1070	1183	105	\N
1071	1186	104	\N
1072	1186	105	\N
1073	1186	103	one piece of ammunition or a thrown weapon
1074	1188	104	\N
1075	1188	105	\N
1076	1191	104	\N
1077	1191	105	\N
1078	1191	103	burning incense for air, soft clay for earth, sulfur and phosphorus for fire, or water and sand for water
1079	1194	104	\N
1080	1194	105	\N
1081	1197	104	\N
1082	1197	105	\N
1083	1200	104	\N
1084	1200	105	\N
1085	1200	103	one piece of ammunition or one thrown weapon
1086	1202	104	\N
1087	1202	105	\N
1088	1202	103	one holly berry per creature summoned
1089	1205	104	\N
1090	1208	104	\N
1091	1208	105	\N
1092	1216	104	\N
1093	1216	105	\N
1094	1216	103	a statuette of yourself carved from ivory and decorated with gems worth at least 1,500 gp
1095	1219	104	\N
1096	1219	105	\N
1097	1219	103	ruby dust worth 50 gp, which the spell consumes
1368	1523	104	\N
1369	1523	105	\N
1370	1523	103	a wing feather from any bird
1373	1530	104	\N
1374	1530	105	\N
1375	1530	103	a sprinkling of holy water, rare incense, and powdered ruby worth at least 1,000 gp
1379	1535	104	\N
1380	1535	105	\N
1381	1535	103	a hummingbird feather
1385	1539	105	\N
1386	1539	103	a small amount of makeup applied to the face as this spell is cast
1390	1543	104	\N
1391	1543	105	\N
1392	1543	103	a diamond worth at least 5,000 gp
1119	1242	104	\N
1120	1242	105	\N
1121	1242	103	a drop of water and a pinch of dust
1394	1549	104	\N
1395	1549	105	\N
1397	1551	104	\N
1127	1255	104	\N
1128	1255	105	\N
1129	1255	103	burning incense and bits of earth and wood mixed in water
1168	1264	104	\N
1169	1264	105	\N
1170	1264	103	four or more arrows or bolts
1171	1267	105	\N
1172	1270	104	\N
1173	1270	105	\N
1174	1272	104	\N
1175	1272	105	\N
1176	1272	103	a drop of water if creating water or a few grains of sand if destroying it
1177	1276	104	\N
1178	1276	105	\N
1179	1276	103	one clay pot filled with grave dirt, one clay pot filled with brackish water, and one 150 gp black onyx stone for each corpse
1180	1279	104	\N
1181	1279	105	\N
1182	1279	103	a tiny piece of matter of the same type of the item you plan to create
1195	1284	104	\N
1196	1284	105	\N
1197	1286	104	\N
1200	1291	104	\N
1201	1291	105	\N
1202	1291	103	a bit of phosphorus or wychwood, or a glowworm
1203	1293	104	\N
1204	1293	105	\N
1205	1293	103	bat fur and a drop of pitch or piece of coal
1206	1295	104	\N
1207	1295	105	\N
1208	1295	103	either a pinch of dried carrot or an agate
1209	1297	104	\N
1210	1297	105	\N
1211	1299	104	\N
1212	1299	105	\N
1323	1455	104	\N
1324	1455	103	a small feather or piece of down
1331	1461	104	\N
1216	1305	104	\N
1217	1305	105	\N
1218	1305	103	a tiny ball of bat guano and sulfur
1219	1308	105	\N
1332	1461	105	\N
1222	1314	104	\N
1223	1314	105	\N
1224	1316	104	\N
1225	1316	105	\N
1226	1318	104	\N
1227	1318	105	\N
1228	1318	103	a yew leaf
1229	1320	104	\N
1230	1320	105	\N
1231	1320	103	a copper piece
1232	1322	104	\N
1233	1324	104	\N
1234	1324	105	\N
1333	1461	103	10 gp worth of charcoal, incense, and herbs that must be consum ed by fire in a brass brazier
1336	1466	104	\N
1337	1466	105	\N
1338	1466	103	a set of divinatory tools—such as bones, ivory sticks, cards, teeth, or carved runes— worth 100 gp and an object from the location you wish to find
1341	1470	104	\N
1342	1470	105	\N
1242	1341	104	\N
1243	1341	105	\N
1244	1341	103	a lodestone and a pinch of dust
1245	1345	104	\N
1246	1345	105	\N
1247	1345	103	holy water or powdered silver and iron
1248	1349	104	\N
1249	1349	105	\N
1250	1352	104	\N
1251	1355	104	\N
1252	1355	105	\N
1253	1355	103	incense and a sacrificial offering appropriate to your religion, together worth at least 25 gp, which the spell consumes
1254	1357	104	\N
1255	1357	105	\N
1256	1359	104	\N
1257	1361	104	\N
1258	1361	105	\N
1259	1364	104	\N
1260	1364	105	\N
1261	1367	104	\N
1262	1367	105	\N
1263	1370	104	\N
1264	1370	105	\N
1265	1370	103	a sapphire worth 1,000 gp
1266	1373	104	\N
1267	1373	105	\N
1268	1373	103	a handful of sand, a dab of ink, and a writing quill plucked from a sleeping bird
1269	1375	104	\N
1270	1375	105	\N
1271	1377	104	\N
1272	1377	105	\N
1273	1377	103	a pinch of dirt, a piece of rock, and a lump of clay
1274	1385	104	\N
1275	1385	105	\N
1276	1387	104	\N
1277	1387	105	\N
1278	1390	104	\N
1279	1390	105	\N
1280	1390	103	fur or a feather from a beast
1281	1399	104	\N
1282	1399	105	\N
1283	1399	103	a pinch of powdered iron
1284	1403	104	\N
1285	1406	104	\N
1286	1406	105	\N
1287	1408	104	\N
1288	1408	105	\N
1289	1411	104	\N
1290	1411	105	\N
1291	1414	104	\N
1292	1414	105	\N
1293	1414	103	a piece of tentacle from a giant octopus or a giant squid
1294	1416	104	\N
1295	1416	105	\N
1296	1419	104	\N
1297	1419	105	\N
1298	1424	104	\N
1299	1424	105	\N
1300	1426	104	\N
1349	1504	104	\N
1350	1504	105	\N
1354	1508	104	\N
1355	1508	105	\N
1371	1526	104	\N
1372	1526	105	\N
1376	1533	104	\N
1377	1533	105	\N
1378	1533	103	ruby dust worth 1,500 gp
1382	1537	104	\N
1383	1537	105	\N
1384	1537	103	a leather strap, bound around the arm or a similar appendage
1387	1541	104	\N
1388	1541	105	\N
1389	1541	103	a bit of gauze and a wisp of smoke
1393	1546	104	\N
1396	1549	103	a pinch of salt and one copper piece placed on each of the corpse’s eyes, which must remain there for the duration
1398	1551	105	\N
1399	1553	104	\N
1400	1555	104	\N
1401	1555	105	\N
1402	1555	103	a glass or crystal bead that shatters when the spell ends
1403	1559	104	\N
1404	1559	105	\N
1405	1559	103	incense and powdered diamond worth at least 200 gp, which the spell consumes
1406	1564	104	\N
1407	1564	105	\N
1408	1564	103	a sprig of mistletoe
1409	1566	104	\N
1410	1566	105	\N
1411	1568	104	\N
1412	1568	105	\N
1413	1568	103	a bit of pork rind or butter
1414	1570	104	\N
1415	1570	105	\N
1416	1572	104	\N
1417	1572	105	\N
1418	1572	103	diamond dust worth at least 100 gp, which the spell consumes
1420	1577	104	\N
1421	1577	105	\N
1422	1577	103	burning incense, a small measure of brimstone and oil, a knotted string, a small amount of umber hulk blood, and a small silver rod worth at least 10 gp
1423	1583	104	\N
1424	1583	105	\N
1425	1585	104	\N
1426	1585	105	\N
1430	1591	104	\N
1431	1591	105	\N
1432	1591	103	a legume seed
1434	1597	104	\N
1435	1597	105	\N
1436	1597	103	herbs, oils, and incense worth at least 1,000 gp, which the spell consumes
1437	1609	104	\N
1438	1609	105	\N
1439	1609	103	a stone, a twig, and a bit of green plant
1440	1611	104	\N
1441	1611	105	\N
1442	1618	104	\N
1443	1618	105	\N
1444	1618	103	a shaving of licorice root
1460	1626	104	\N
1461	1626	105	\N
1462	1626	103	a piece of iron and a flame
1467	1629	104	\N
1468	1629	105	\N
1473	1632	104	\N
1474	1632	105	\N
1475	1632	103	a gem-encrusted bowl worth at least 1,000 gp, which the spell consumes
1482	1637	104	\N
1483	1637	105	\N
1484	1637	103	the petrified eye of a newt
1485	1640	104	\N
1486	1640	105	\N
1487	1640	103	a small, straight piece of iron
1488	1643	104	\N
1489	1643	105	\N
1490	1643	103	a small, straight piece of iron
1491	1646	104	\N
1492	1646	105	\N
1493	1646	103	a tiny reliquary worth at least 1,000 gp containing a sacred relic, such as a scrap of cloth from a saint’s robe or a piece of parchment from a religious text
1497	1650	104	\N
1498	1653	105	\N
1499	1653	103	a glowing stick of incense or a crystal vial filled with phosphorescent material
1582	1657	104	\N
1583	1657	105	\N
1587	1664	104	\N
1588	1664	105	\N
1590	1669	104	\N
1614	1690	104	\N
1615	1690	105	\N
1616	1690	103	pinch of sulfur
1619	1693	104	\N
1621	1695	104	\N
1628	1706	104	\N
1629	1706	105	\N
1630	1706	103	a pinch of dust and a few drops of water
1633	1709	104	\N
1634	1709	105	\N
1635	1709	103	a pearl worth at least 100 gp and an owl feather
1636	1711	105	\N
1637	1711	103	a lead-based ink worth at least 10 gp, which the spell consumes
1638	1713	104	\N
1639	1713	105	\N
1640	1713	103	a vellum depiction or a carved statuette in the likeness of the target, and a special component that varies according to the version of the spell you choose, worth at least 500 gp per Hit Die of the target
1641	1721	104	\N
1642	1721	105	\N
1644	1723	104	\N
1645	1723	105	\N
1647	1726	104	\N
1648	1726	105	\N
1649	1726	103	a few grains of sugar, som e kernels of grain, and a smear of fat
1651	1729	104	\N
1652	1729	105	\N
1653	1729	103	an eyelash encased in gum arabic
1654	1733	104	\N
1655	1733	105	\N
1656	1733	103	a grasshopper’s hind leg
1658	1735	104	\N
1659	1737	104	\N
1660	1737	105	\N
1661	1737	103	incense worth at least 250 gp, which the spell consum es, and four ivory strips worth at least 50 gp each
1662	1739	104	\N
1663	1739	105	\N
1664	1739	103	an exquisite chest, 3 feet by 2 feet by 2 feet, constructed from rare materials worth at least 5,000 gp, and a Tiny replica made from the same materials worth at least 50 gp
1665	1742	104	\N
1666	1742	105	\N
1667	1742	103	a small crystal bead
1668	1744	104	\N
1669	1744	105	\N
1670	1746	104	\N
1671	1746	105	\N
1672	1746	103	either a small leather loop or a piece of golden wire bent into a cup shape with a long shank on one end
1673	1748	104	\N
1674	1748	103	a firefly or phosphorescent moss
1675	1750	104	\N
1676	1750	105	\N
1678	1754	104	\N
1679	1754	105	\N
1680	1754	103	a bit of fur and a rod of amber, crystal, or glass
1682	1757	104	\N
1683	1757	105	\N
1684	1757	103	a bit of fur from a bloodhound
1685	1759	104	\N
1686	1759	105	\N
1687	1759	103	a bit of fur from a bloodhound
1688	1761	104	\N
1689	1761	105	\N
1690	1761	103	a forked twid
1691	1763	104	\N
1692	1763	105	\N
1693	1763	103	a pinch of dirt
1695	1766	104	\N
1696	1766	105	\N
1697	1768	104	\N
1698	1768	105	\N
1699	1768	103	holy water or powdered silver and iron worth at least 100 gp, which the spell consumes
1700	1771	104	\N
1701	1771	105	\N
1702	1771	103	a gem, crystal, reliquary, or som e other ornamental container worth at least 500 gp
1706	1777	104	\N
1707	1777	105	\N
1708	1777	103	a small bit of honeycomb and jade dust worth at least 10 gp, which the spell consumes
1709	1779	104	\N
1710	1779	105	\N
1711	1782	104	\N
1712	1782	105	\N
1713	1782	103	a bit of fleece
1714	1785	104	\N
1715	1785	105	\N
1717	1788	104	\N
1718	1788	105	\N
1720	1791	104	\N
1725	1797	104	\N
1726	1797	105	\N
1727	1797	103	a snake’s tongue and either a bit of honeycomb or a drop of sweet oil
1728	1800	104	\N
1729	1800	105	\N
1730	1802	104	\N
1731	1802	105	\N
1732	1804	104	\N
1733	1804	105	\N
1734	1804	103	powdered rhubarb leaf and an adder’s stomach
1736	1807	104	\N
1737	1807	105	\N
1738	1807	103	two lodestones
1739	1809	104	\N
1740	1809	105	\N
1741	1809	103	a short piece of copper wire
1742	1811	104	\N
1743	1811	105	\N
1746	1814	104	\N
1747	1814	105	\N
1748	1816	105	\N
1749	1816	103	a bit of fleece
1750	1819	104	\N
1751	1819	105	\N
1752	1821	104	\N
1753	1821	105	\N
1754	1823	104	\N
1755	1823	105	\N
1756	1825	104	\N
1757	1827	104	\N
1758	1827	105	\N
1759	1830	104	\N
1760	1830	105	\N
1761	1830	103	several seeds of any m oonseed plant and a piece of opalescent feldspar
1763	1833	104	\N
1764	1833	105	\N
1765	1833	103	a tiny silver whistle, a piece of bone, and a thread
1766	1835	104	\N
1767	1835	105	\N
1768	1835	103	a miniature portal carved from ivory, a small piece of polished marble, and a tiny silver spoon, each item worth at least 5 gp
1769	1837	104	\N
1770	1837	105	\N
1771	1837	103	a thin sheet of lead, a piece of opaque glass, a wad of cotton or cloth, and powdered chrysolite
1772	1841	104	\N
1773	1841	105	\N
1774	1841	103	a miniature platinum sword with a grip and pom mel of copper and zinc, worth 250 gp
1776	1844	104	\N
1777	1844	105	\N
1778	1844	103	an iron blade and a small bag containing a mixture of soils—clay, loam, and sand
1779	1846	104	\N
1780	1846	105	\N
1781	1846	103	a pinch of diamond dust worth 25 gp sprinkled over the target, which the spell consumes
1782	1848	104	\N
1783	1848	105	\N
1784	1848	103	a small square of silk
1785	1852	104	\N
1786	1852	105	\N
1787	1852	103	a small crystal sphere
1789	1856	104	\N
1790	1856	105	\N
1791	1856	103	a hemispherical piece of clear crystal and a matching hemispherical piece of gum arabic
1792	1858	104	\N
1793	1860	104	\N
1794	1860	105	\N
1795	1860	103	ashes from a burned leaf of mistletoe and a sprig of spruce
1797	1862	104	\N
1798	1862	105	\N
1799	1862	103	a pinch of sesame seeds
1800	1864	104	\N
1801	1864	105	\N
1802	1864	103	a bit of fleece
1803	1866	104	\N
1804	1866	105	\N
1806	1869	104	\N
1807	1869	105	\N
1808	1871	104	\N
1809	1871	105	\N
1810	1873	104	\N
1811	1873	105	\N
1812	1873	103	a jewel worth at least 1,000 gp, which the spell consumes
1813	1876	104	\N
1814	1876	105	\N
1815	1876	103	a forked, metal rod worth at least 250 gp, attuned to a particular plane of existence
1816	1879	104	\N
1817	1879	105	\N
1818	1881	104	\N
1819	1881	105	\N
1821	1883	104	\N
1822	1883	105	\N
1823	1883	103	a caterpillar cocoon
1824	1885	104	\N
1825	1885	105	\N
1826	1887	104	\N
1827	1889	104	\N
1828	1891	104	\N
1830	1895	104	\N
1831	1895	105	\N
1832	1897	104	\N
1833	1897	105	\N
1835	1908	104	\N
1836	1908	105	\N
1837	1917	104	\N
1838	1917	105	\N
1840	1919	104	\N
1841	1919	105	\N
1842	1919	103	a bit of fleece and jade dust worth at least 25 gp
1843	1922	104	\N
1844	1922	105	\N
1845	1922	103	a small replica of you made from materials worth at least 5 gp
1846	1924	104	\N
1847	1924	105	\N
1849	1926	104	\N
1850	1926	105	\N
1851	1926	103	holy water or powdered silver and iron, which the spell consumes
1852	1928	104	\N
1853	1928	105	\N
1856	1930	104	\N
1857	1930	105	\N
1858	1932	104	\N
1859	1932	105	\N
1860	1932	103	a diamond worth at least 500 gp, which the spell consumes
1861	1934	104	\N
1862	1934	105	\N
1863	1934	103	pieces of eggshell from two different kinds of creatures
1864	1936	104	\N
1865	1936	105	\N
1866	1938	104	\N
1867	1938	105	\N
1869	1940	104	\N
1870	1940	105	\N
1872	1943	104	\N
1873	1943	105	\N
1874	1943	103	a prayer wheel and holy water
1879	1949	104	\N
1880	1949	105	\N
1881	1951	104	\N
1882	1951	105	\N
1883	1951	103	a miniature cloak
1884	1953	104	\N
1885	1953	105	\N
1886	1953	103	a diamond worth at least 1,000 gp, which the spell consumes
1887	1955	104	\N
1888	1955	105	\N
1889	1955	103	a lodestone and iron filings
1890	1957	104	\N
1891	1957	105	\N
1892	1957	103	diamonds worth 300 gp, which the spell consumes
1893	1959	104	\N
1894	1959	105	\N
1895	1959	103	powdered corn extract and a twisted loop of parchment
1896	1961	104	\N
1897	1961	105	\N
1899	1963	104	\N
1900	1963	105	\N
1901	1963	103	a small silver mirror
1902	1965	104	\N
1904	1968	104	\N
1905	1968	105	\N
1906	1968	103	a pinch of talc and a small sprinkling of powdered silver
1907	1970	104	\N
1908	1970	105	\N
1909	1973	104	\N
1910	1973	105	\N
1911	1973	103	a short piece of fine copper wire
1912	1975	104	\N
1913	1975	105	\N
1914	1975	103	a powder com posed of diamond, emerald, ruby, and sapphire dust worth at least 5,000 gp, which the spell consumes
1915	1977	104	\N
1916	1977	105	\N
1917	1977	103	a jade circlet worth at least 1,500 gp, which you must place on your head before you cast the spell
1918	1979	104	\N
1919	1979	105	\N
1920	1979	103	a chip of mica
1922	1982	104	\N
1923	1982	105	\N
1925	1984	104	\N
1926	1984	105	\N
1927	1984	103	a small parchment with a bit of holy text written on it
1929	1986	104	\N
1930	1986	105	\N
1931	1988	104	\N
1932	1988	105	\N
1934	1990	104	\N
1935	1990	105	\N
1936	1992	104	\N
1937	1992	105	\N
1938	1992	103	a bit of fleece
1939	1995	104	\N
1940	1995	105	\N
1941	1995	103	snow or ice in quantities sufficient to made a life-size copy of the duplicated creature; som e hair, fingernail clippings, or other piece of that creature’s body placed inside the snow or ice; and powdered ruby worth 1,500 gp, sprinkled over the duplicate and consumed by the spell
1942	1997	104	\N
1943	1997	105	\N
1944	1997	103	a pinch of fine sand, rose petals, or a cricket
1946	2000	104	\N
1947	2000	105	\N
1948	2000	103	a pinch of dust and a few drops of water
1949	2004	104	\N
1950	2004	105	\N
1951	2006	104	\N
1952	2006	105	\N
1953	2008	104	\N
1954	2008	105	\N
1955	2008	103	burning incense
1956	2010	104	\N
1957	2010	105	\N
1958	2012	104	\N
1959	2012	105	\N
1960	2012	103	a drop of bitumen and a spider
1961	2014	104	\N
1962	2014	105	\N
1963	2014	103	seven sharp thorns or seven small twigs, each sharpened to a point
1965	2017	104	\N
1966	2017	105	\N
1967	2017	103	a holy symbol
1969	2021	104	\N
1970	2021	105	\N
1972	2029	104	\N
1976	2031	104	\N
1977	2031	105	\N
1978	2031	103	a rotten egg or several skunk cabbage leaves
1979	2033	104	\N
1980	2033	105	\N
1981	2033	103	soft clay, which must be worked into roughly the desired shape of the stone object
1988	2037	104	\N
1989	2037	105	\N
1991	2047	104	\N
1992	2047	105	\N
1993	2047	103	diamond dust worth 100 gp, which the spell consumes
1997	2049	104	\N
1998	2049	103	a snake’s tongue and either a bit of honeycomb or a drop of sweet oil
1999	2051	104	\N
2000	2051	105	\N
2001	2051	103	a magnifying glass
2003	2054	104	\N
2004	2054	105	\N
2005	2054	103	fire and a piece of sunstone
2007	2056	104	\N
2008	2056	105	\N
2009	2056	103	a quiver containing at least one piece of ammunition
2010	2058	104	\N
2011	2058	105	\N
2012	2058	103	mercury, phosphorus, and powdered diamond and opal with a total value of at least 1,000 gp, which the spell consumes
2013	2068	104	\N
2014	2068	105	\N
2015	2068	103	tiny tarts and a feather that is waved in the air
2016	2070	104	\N
2017	2070	105	\N
2018	2074	104	\N
2019	2074	105	\N
2020	2074	103	a pair of linked silver rings
2021	2076	104	\N
2022	2076	103	rare chalks and inks infused with precious gems with 50 gp, which the spell consumes
2023	2078	104	\N
2024	2078	105	\N
2025	2078	103	a drop of merciry
2026	2081	104	\N
2031	2085	104	\N
2032	2085	105	\N
2033	2085	103	the stem of a plant with thorns
2035	2087	104	\N
2037	2090	104	\N
2038	2090	105	\N
2040	2093	104	\N
2041	2095	104	\N
2042	2095	103	a small clay model of a ziggurat
2043	2097	104	\N
2044	2097	105	\N
2045	2099	104	\N
2046	2099	105	\N
2047	2101	104	\N
2048	2101	105	\N
2049	2101	103	a drop of mercury, a dollop of gum arabic, and a wisp of smoke
2050	2106	104	\N
2051	2106	105	\N
2052	2106	103	a sprinkle of holy water and diamonds worth at least 25,000 gp, which the spell consumes
2053	2108	104	\N
2054	2108	105	\N
2055	2108	103	an ointment for the eyes that costs 25 gp; is made from mushroom powder, saffron, and fat; and is consum ed by the spell
2056	2111	105	\N
2057	2114	104	\N
2058	2114	105	\N
2060	2116	104	\N
2061	2116	105	\N
2062	2116	103	a piece of string and a bit of wood
2063	2118	104	\N
2064	2118	105	\N
2066	2121	104	\N
2068	2123	104	\N
2069	2123	105	\N
2070	2123	103	a small piece of phosphorus
2072	2126	104	\N
2073	2126	105	\N
2074	2126	103	a pinch of powder made by crushing a clear gemstone
2075	2128	104	\N
2076	2128	105	\N
2077	2128	103	a small piece of quartz
2078	2131	104	\N
2079	2131	105	\N
2080	2131	103	a small block of granite
2081	2133	104	\N
2082	2133	105	\N
2083	2133	103	a handful of thorns
2084	2136	104	\N
2085	2136	105	\N
2086	2136	103	a pair of platinum rings worth at least 50 gp each, which you and the target must wear for the duration
2087	2138	104	\N
2088	2138	105	\N
2089	2138	103	a short reed or piece of straw
2090	2140	104	\N
2091	2140	105	\N
2092	2140	103	a piece of cork
2093	2142	104	\N
2094	2142	105	\N
2095	2142	103	a bit of spiderweb
2096	2144	104	\N
2097	2144	105	\N
2098	2146	104	\N
2099	2146	105	\N
2100	2146	103	fire and holy water
2101	2148	104	\N
2102	2148	105	\N
2103	2148	103	a tiny fan and a feather of exotic origin
2104	2150	104	\N
2105	2152	104	\N
2106	2152	105	\N
2107	2152	103	a twig from a tree that has been struck by lightning
2109	2155	104	\N
2110	2157	104	\N
2112	2159	104	\N
2113	2159	105	\N
2123	2170	104	\N
2124	2170	105	\N
2126	2173	104	\N
2127	2173	105	\N
2128	2173	103	an eggshell and a snakeskin glove
2129	2180	104	\N
2130	2180	105	\N
2132	2183	104	\N
2133	2183	105	\N
2134	2183	103	a bit of fur; a piece of amber, glass, or a crystal rod; and three silver pins
2136	2186	104	\N
2139	2188	104	\N
2140	2188	105	\N
2142	2191	104	\N
2143	2191	105	\N
2144	2191	103	a pinch of lime, water, and earth
2145	2193	104	\N
2146	2193	105	\N
2147	2193	103	a piece of cured leather
2148	2195	104	\N
2149	2195	105	\N
2150	2195	103	a pickled octopus tentacle
2151	2197	104	\N
2152	2197	105	\N
2153	2197	103	a drop of molasses
2154	2200	104	\N
2155	2200	105	\N
2178	2210	104	\N
2179	2210	105	\N
2180	2210	103	rare oils and unguents worth at least 1,000 gp, which the spell consumes
2195	2214	104	\N
2196	2214	105	\N
2197	2214	103	a focus worth at least 1,000 gp, such as a crystal ball, a silver mirror, or a font filled with holy water
2214	2220	104	\N
3053	2243	104	\N
3394	2249	104	\N
3395	2249	105	\N
3396	2249	103	gold dust worth at least 25 gp, which the spell consumes
\.


--
-- TOC entry 2600 (class 0 OID 98612)
-- Dependencies: 235
-- Data for Name: adm_link_spell_list; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_link_spell_list (id, "spellListId", "spellId") FROM stdin;
2303	2239	1054
2304	2239	1291
2305	2239	1539
2306	2239	1748
2307	2239	1766
2308	2239	1807
2309	2239	1809
2310	2239	1816
2311	2239	1895
2312	2239	2111
2313	2239	2121
2314	2239	890
2315	2239	1017
2316	2239	1099
2317	2239	1143
2318	2239	1657
2319	2239	1316
2320	2239	1324
2321	2239	1352
2322	2239	1426
2323	2239	1455
2324	2239	1669
2325	2239	2200
2326	2239	1709
2327	2239	1711
2328	2239	1763
2329	2239	1992
2330	2239	1997
2331	2239	2006
2332	2239	2068
2333	2239	2090
2334	2239	2116
2335	2239	893
2336	2239	1075
2337	2239	1092
2338	2239	1120
2339	2239	1284
2340	2239	1320
2341	2239	1390
2342	2239	1408
2343	2239	1626
2344	2239	1643
2345	2239	1729
2346	2239	1735
2347	2239	1744
2348	2239	1757
2349	2239	1761
2350	2239	1777
2351	2239	1864
2352	2239	1968
2353	2239	1979
2354	2239	1990
2355	2239	2049
2356	2239	2159
2357	2239	2121
2358	2239	2068
2359	2239	1973
2360	2239	1092
2361	2239	1539
2362	2239	1291
2363	2239	1748
2364	2239	1017
2365	2239	1316
2366	2239	1426
2367	2239	1744
2368	2239	1997
2369	2239	1735
2370	2239	1099
2371	2239	1559
2372	2239	1320
2373	2239	1075
2374	2239	1143
2375	2239	1284
2376	2239	1816
2377	2239	1763
2378	2239	1968
2379	2239	1643
2380	2239	2159
2381	2239	893
2382	2239	1757
2383	2239	2008
2384	2239	2111
2385	2239	1992
2386	2239	1777
2387	2239	1669
2388	2239	1742
2389	2239	2095
2390	2239	1782
2391	2239	1766
2392	2239	1349
2393	2239	1408
2394	2239	2090
2395	2239	2116
2396	2239	1054
2397	2239	1990
2398	2239	1390
2399	2239	2031
2400	2239	1729
2401	2239	1709
2402	2239	1895
2403	2239	1324
2404	2239	1864
2405	2239	2010
2406	2239	1120
2407	2239	1657
2408	2239	1116
2409	2239	1761
2410	2239	2049
2411	2239	1846
2412	2239	1459
2413	2239	1807
2414	2239	2200
2415	2239	1979
2416	2239	1809
2417	2239	1626
2418	2239	1879
2419	2239	2006
2420	2239	1452
2421	2239	1653
2422	2239	1037
2423	2239	1455
2424	2239	1352
2425	2239	890
2426	2239	1711
2427	2239	2121
2428	2239	1973
2429	2239	2068
2430	2239	1092
2431	2239	1539
2432	2239	1291
2433	2239	1748
2434	2239	1017
2435	2239	1316
2436	2239	1426
2437	2239	1744
2438	2239	1997
2439	2239	1609
2440	2239	1735
2441	2239	1099
2442	2239	1559
2443	2239	937
2444	2239	2076
2445	2239	1320
2446	2239	1075
2447	2239	1143
2448	2239	1284
2449	2239	1816
2450	2239	1763
2451	2239	1968
2452	2239	1322
2453	2239	1759
2454	2239	1643
2455	2239	2159
2456	2239	893
2457	2239	1757
2458	2239	2008
2459	2239	2111
2460	2239	1992
2461	2239	1777
2462	2239	1970
2463	2239	1669
2464	2239	1742
2465	2239	2095
2466	2239	1782
2467	2239	1766
2468	2239	1572
2469	2239	1349
2470	2239	1178
2471	2239	1408
2472	2239	2090
2473	2239	1015
2474	2239	2116
2475	2239	2214
2476	2239	1054
2477	2239	1990
2478	2239	1390
2479	2239	1367
2480	2239	2031
2481	2239	1373
2482	2239	1729
2483	2239	1709
2484	2239	1895
2485	2239	1324
2486	2239	1785
2487	2239	1864
2488	2239	2010
2489	2239	1932
2490	2239	1120
2491	2239	1873
2492	2239	1116
2493	2239	1657
2494	2239	1761
2495	2239	1846
2496	2239	2049
2497	2239	1737
2498	2239	1570
2499	2239	1827
2500	2239	1459
2501	2239	1807
2502	2239	2200
2503	2239	1979
2504	2239	1546
2505	2239	1809
2506	2239	1626
2507	2239	1879
2508	2239	1145
2509	2239	1452
2510	2239	1653
2511	2239	2006
2512	2239	1037
2513	2239	1455
2514	2239	1352
2515	2239	1640
2516	2239	890
2517	2239	1711
2518	2239	1537
2519	2239	1883
2520	2239	2121
2521	2239	1973
2522	2239	2068
2523	2239	1092
2524	2239	1539
2525	2239	1291
2526	2239	1748
2527	2239	1017
2528	2239	1316
2529	2239	1426
2530	2239	1744
2531	2239	1609
2532	2239	1997
2533	2239	1735
2534	2239	1099
2535	2239	1559
2536	2239	937
2537	2239	2076
2538	2239	1320
2539	2239	1075
2540	2239	1143
2541	2239	1284
2542	2239	1816
2543	2239	1763
2544	2239	1968
2545	2239	1322
2546	2239	1759
2547	2239	1643
2548	2239	2159
2549	2239	893
2550	2239	1757
2551	2239	2008
2552	2239	2111
2553	2239	1992
2554	2239	1777
2555	2239	1970
2556	2239	1669
2557	2239	1742
2558	2239	2095
2559	2239	1782
2560	2239	1766
2561	2239	1572
2562	2239	1349
2563	2239	1178
2564	2239	1015
2565	2239	1408
2566	2239	2090
2567	2239	2214
2568	2239	2116
2569	2239	1054
2570	2239	1990
2571	2239	1367
2572	2239	1390
2573	2239	2031
2574	2239	1373
2575	2239	1729
2576	2239	1709
2577	2239	1895
2578	2239	1324
2579	2239	1785
2580	2239	1864
2581	2239	2010
2582	2239	1932
2583	2239	1120
2584	2239	1873
2585	2239	1116
2586	2239	1657
2587	2239	1761
2588	2239	1846
2589	2239	2049
2590	2239	1737
2591	2239	1570
2592	2239	1827
2593	2239	1459
2594	2239	1807
2595	2239	2200
2596	2239	1979
2597	2239	1546
2598	2239	1809
2599	2239	1145
2600	2239	1626
2601	2239	1879
2602	2239	1452
2603	2239	1653
2604	2239	2006
2605	2239	1037
2606	2239	1455
2607	2239	1352
2608	2239	1640
2609	2239	890
2610	2239	1711
2611	2239	1823
2612	2239	1537
2613	2239	1883
2614	2239	2121
2615	2239	1973
2616	2239	2068
2617	2239	1092
2618	2239	1539
2619	2239	1291
2620	2239	1748
2621	2239	1017
2622	2239	1316
2623	2239	1426
2624	2239	1744
2625	2239	1885
2626	2239	1609
2627	2239	1997
2628	2239	1735
2629	2239	1457
2630	2239	1099
2631	2239	1559
2632	2239	937
2633	2239	2076
2634	2239	1320
2635	2239	1075
2636	2239	1143
2637	2239	1284
2638	2239	1816
2639	2239	1763
2640	2239	1968
2641	2239	1322
2642	2239	1759
2643	2239	1643
2644	2239	2159
2645	2239	893
2646	2239	1757
2647	2239	2008
2648	2239	2111
2649	2239	1992
2650	2239	1777
2651	2239	1970
2652	2239	1814
2653	2239	1669
2654	2239	1742
2655	2239	1553
2656	2239	2095
2657	2239	1782
2658	2239	2220
2659	2239	1766
2660	2239	1572
2661	2239	1349
2662	2239	1178
2663	2239	1015
2664	2239	1408
2665	2239	2090
2666	2239	2214
2667	2239	2116
2668	2239	1054
2669	2239	1990
2670	2239	1858
2671	2239	1835
2672	2239	1367
2673	2239	1390
2674	2239	2031
2675	2239	1373
2676	2239	1729
2677	2239	1841
2678	2239	1709
2679	2239	1895
2680	2239	1324
2681	2239	1785
2682	2239	1922
2683	2239	1864
2684	2239	2010
2685	2239	1577
2686	2239	2058
2687	2239	1535
2688	2239	1932
2689	2239	1120
2690	2239	1873
2691	2239	1116
2692	2239	1657
2693	2239	1761
2694	2239	1411
2695	2239	1846
2696	2239	2049
2697	2239	1819
2698	2239	1737
2699	2239	1364
2700	2239	1570
2701	2239	1466
2702	2239	1797
2703	2239	1827
2704	2239	1459
2705	2239	1807
2706	2239	1919
2707	2239	2101
2708	2239	2200
2709	2239	1979
2710	2239	1546
2711	2239	1809
2712	2239	1889
2713	2239	1145
2714	2239	1626
2715	2239	1879
2716	2239	1452
2717	2239	1653
2718	2239	2006
2719	2239	1887
2720	2239	1037
2721	2239	1419
2722	2239	1455
2723	2239	1533
2724	2239	1352
2725	2239	2108
2726	2239	1953
2727	2239	1640
2728	2239	890
2729	2239	1711
2730	2239	1823
2731	2239	1943
2732	2239	1537
2733	2239	1883
2734	2240	1583
2735	2240	1748
2736	2240	1807
2737	2240	1951
2738	2240	1961
2739	2240	2004
2740	2240	2081
2741	2240	1017
2742	2240	1056
2743	2240	1129
2744	2240	1272
2745	2240	1657
2746	2240	1314
2747	2240	1316
2748	2240	1318
2749	2240	1585
2750	2240	1669
2751	2240	1723
2752	2240	1926
2753	2240	1930
2754	2240	1963
2755	2240	1984
2756	2240	810
2757	2240	1007
2758	2240	1075
2759	2240	1092
2760	2240	1219
2761	2240	1390
2762	2240	1468
2763	2240	1549
2764	2240	1744
2765	2240	1761
2766	2240	1891
2767	2240	1928
2768	2240	1990
2769	2240	2021
2770	2240	2136
2771	2240	2159
2772	2240	900
2773	2240	1033
2774	2240	1037
2775	2240	1116
2776	2240	1270
2777	2240	1297
2778	2240	1349
2779	2240	1459
2780	2240	1559
2781	2240	1768
2782	2240	1791
2783	2240	1802
2784	2240	1924
2785	2240	1949
2786	2240	1957
2787	2240	1973
2788	2240	2008
2789	2240	2017
2790	2240	2095
2791	2240	2140
2792	2240	1022
2793	2240	1242
2794	2240	1299
2795	2240	1355
2796	2240	1537
2797	2240	1693
2798	2240	1759
2799	2240	2033
2800	2240	1137
2801	2240	1208
2802	2240	1345
2803	2240	1690
2804	2240	1546
2805	2240	1572
2806	2240	1597
2807	2240	1726
2808	2240	1737
2809	2240	1785
2810	2240	1873
2811	2240	1932
2812	2240	2214
2813	2240	1050
2814	2240	1276
2815	2240	1466
2816	2240	1530
2817	2240	1611
2818	2240	1664
2819	2240	1632
2820	2240	1871
2821	2240	2108
2822	2240	2155
2823	2240	1188
2824	2240	1359
2825	2240	1411
2826	2240	1508
2827	2240	1876
2828	2240	1943
2829	2240	1953
2830	2240	2058
2831	2240	973
2832	2240	1255
2833	2240	1377
2834	2240	1646
2835	2240	1003
2836	2240	1543
2837	2240	1788
2838	2240	2106
2839	2241	1375
2840	2241	1583
2841	2241	1807
2842	2241	1881
2843	2241	1917
2844	2241	1951
2845	2241	1986
2846	2241	2085
2847	2241	890
2848	2241	1099
2849	2241	1272
2850	2241	1657
2851	2241	1316
2852	2241	1318
2853	2241	1406
2854	2241	1426
2855	2241	1526
2856	2241	1564
2857	2241	1669
2858	2241	1733
2859	2241	1763
2860	2241	1930
2861	2241	2006
2862	2241	2090
2863	2241	893
2864	2241	1031
2865	2241	1035
2866	2241	1295
2867	2241	1390
2868	2241	1468
2869	2241	1511
2870	2241	1518
2871	2241	1591
2872	2241	1626
2873	2241	1643
2874	2241	1744
2875	2241	1757
2876	2241	1761
2877	2241	1830
2878	2241	1860
2879	2241	1928
2880	2241	2014
2881	2241	2180
2882	2241	1183
2883	2241	1297
2884	2241	1349
2885	2241	1459
2886	2241	1802
2887	2241	1879
2888	2241	1924
2889	2241	2000
2890	2241	2010
2891	2241	2138
2892	2241	2140
2893	2241	2148
2894	2241	1069
2895	2241	1178
2896	2241	1197
2897	2241	1202
2898	2241	1242
2899	2241	1361
2900	2241	1537
2901	2241	1551
2902	2241	1566
2903	2241	1609
2904	2241	1706
2905	2241	1759
2906	2241	1883
2907	2241	2033
2908	2241	2047
2909	2241	2123
2910	2241	1761
2911	2241	1819
2912	2241	1202
2913	2241	1881
2914	2241	1466
2915	2241	1297
2916	2241	1459
2917	2241	2140
2918	2241	2114
2919	2241	1807
2920	2241	1546
2921	2241	1208
2922	2241	2131
2923	2241	2133
2924	2241	1955
2925	2241	1626
2926	2241	1879
2927	2241	1197
2928	2241	1069
2929	2241	2006
2930	2241	2097
2931	2241	1511
2932	2241	1986
2933	2241	2146
2934	2241	1943
2935	2241	890
2936	2241	1883
2937	2241	2123
2938	2241	1537
2939	2241	897
2940	2241	2214
2941	2241	2180
2942	2241	1295
2943	2241	1390
2944	2241	1272
2945	2241	1876
2946	2241	1844
2947	2241	1977
2948	2241	1733
2949	2241	1726
2950	2241	1785
2951	2241	2099
2952	2241	2138
2953	2241	1802
2954	2241	2010
2955	2241	1535
2956	2241	2037
2957	2241	1664
2958	2241	942
2959	2241	1873
2960	2241	2106
2961	2241	1657
2962	2241	1361
2963	2241	1551
2964	2241	1583
2965	2241	1468
2966	2241	1564
2967	2241	1643
2968	2241	1518
2969	2241	2085
2970	2241	1242
2971	2241	1139
2972	2241	893
2973	2241	1031
2974	2241	1757
2975	2241	1508
2976	2241	1194
2977	2241	1526
2978	2241	2000
2979	2241	1830
2980	2241	1669
2981	2241	2054
2982	2241	2051
2983	2241	2047
2984	2241	1191
2985	2241	1349
2986	2241	2210
2987	2241	1572
2988	2241	983
2989	2241	2090
2990	2241	1015
2991	2241	1178
2992	2241	2033
2993	2241	1183
2994	2241	1316
2995	2241	1375
2996	2241	1426
2997	2241	1744
2998	2241	2148
2999	2241	1457
3000	2241	1609
3001	2241	2014
3002	2241	1917
3003	2241	1255
3004	2241	1099
3005	2241	1930
3006	2241	1951
3007	2241	1928
3008	2241	1035
3009	2241	1406
3010	2241	1860
3011	2241	1706
3012	2241	1318
3013	2241	1566
3014	2241	1591
3015	2241	1924
3016	2241	1632
3017	2241	1763
3018	2241	1759
3019	2241	1377
3020	2242	1056
3021	2242	1129
3022	2242	1141
3023	2242	1657
3024	2242	1314
3025	2242	1316
3026	2242	1318
3027	2242	1357
3028	2242	2200
3029	2242	1926
3030	2242	1930
3031	2242	1984
3032	2242	2087
3033	2242	2157
3034	2242	810
3035	2242	1082
3036	2242	1463
3037	2242	1744
3038	2242	1761
3039	2242	1779
3040	2242	1928
3041	2242	2159
3042	2242	1012
3043	2242	1072
3044	2242	1270
3045	2242	1286
3046	2242	1297
3047	2242	1349
3048	2242	1387
3049	2242	1768
3050	2242	1949
3051	2242	1957
3052	2242	1010
3054	2242	810
3055	2242	2157
3056	2242	1072
3057	2242	1297
3058	2242	1546
3059	2242	2200
3060	2242	1957
3061	2242	2159
3062	2242	1761
3063	2242	1082
3064	2242	1345
3065	2242	1270
3066	2242	1984
3067	2242	1387
3068	2242	1141
3069	2242	2029
3070	2242	1012
3071	2242	1357
3072	2242	1349
3073	2242	1010
3074	2242	1314
3075	2242	1022
3076	2242	1129
3077	2242	1316
3078	2242	1744
3079	2242	1286
3080	2242	1056
3081	2242	1114
3082	2242	1463
3083	2242	1779
3084	2242	1949
3085	2242	1299
3086	2242	1318
3087	2242	1657
3088	2242	2243
3089	2242	1759
3090	2242	1928
3091	2242	1029
3092	2242	1768
3093	2242	1930
3094	2242	1932
3095	2242	2087
3096	2242	1926
3097	2242	2186
3098	2245	883
3099	2245	890
3100	2245	1657
3101	2245	1316
3102	2245	1318
3103	2245	1403
3104	2245	1526
3105	2245	1564
3106	2245	1695
3107	2245	1650
3108	2245	1733
3109	2245	1763
3110	2245	2006
3111	2245	893
3112	2245	1031
3113	2245	1035
3114	2245	1264
3115	2245	1295
3116	2245	1468
3117	2245	1744
3118	2245	1757
3119	2245	1761
3120	2245	1860
3121	2245	1928
3122	2245	1990
3123	2245	2014
3124	2245	1183
3125	2245	1186
3126	2245	1297
3127	2245	1750
3128	2245	1846
3129	2245	1879
3130	2245	1924
3131	2245	2010
3132	2245	2138
3133	2245	2140
3134	2245	2148
3135	2245	1202
3136	2245	1537
3137	2245	1566
3138	2245	1759
3139	2245	2047
3140	2245	1139
3141	2245	1200
3142	2245	2056
3143	2245	2099
3144	2246	807
3145	2246	1054
3146	2246	1104
3147	2246	1291
3148	2246	1504
3149	2246	1539
3150	2246	1748
3151	2246	1766
3152	2246	1807
3153	2246	1809
3154	2246	1816
3155	2246	1881
3156	2246	1895
3157	2246	1938
3158	2246	1988
3159	2246	2111
3160	2246	1086
3161	2246	1099
3162	2246	1107
3163	2246	1126
3164	2246	1143
3165	2246	1316
3166	2246	1324
3167	2246	1416
3168	2246	1426
3169	2246	1455
3170	2246	1526
3171	2246	1733
3172	2246	2193
3173	2246	2170
3174	2246	1940
3175	2246	1982
3176	2246	1992
3177	2246	1997
3178	2246	2090
3179	2246	2152
3180	2246	888
3181	2246	1075
3182	2246	1080
3183	2246	1120
3184	2246	1284
3185	2246	1293
3186	2246	1295
3187	2246	1320
3188	2246	1390
3189	2246	1399
3190	2246	1591
3191	2246	1643
3192	2246	1729
3193	2246	1735
3194	2246	1746
3195	2246	1821
3196	2246	1825
3197	2246	1864
3198	2246	2188
3199	2246	1968
3200	2246	1979
3201	2246	2012
3202	2246	2049
3203	2246	2142
3204	2246	1078
3205	2246	1116
3206	2246	1267
3207	2246	1297
3208	2246	1349
3209	2246	1452
3210	2246	1476
3211	2246	1523
3212	2246	1541
3213	2246	1618
3214	2246	1653
3215	2246	1754
3216	2246	1782
3217	2246	1924
3218	2246	2000
3219	2246	2197
3220	2246	2031
3221	2246	2095
3222	2246	2138
3223	2246	2140
3224	2246	1022
3225	2246	1069
3226	2246	1178
3227	2246	1322
3228	2246	1361
3229	2246	1570
3230	2246	1706
3231	2246	1883
3232	2246	2047
3233	2246	2123
3234	2246	937
3235	2246	1123
3236	2246	1148
3237	2246	1279
3238	2246	1367
3239	2246	1640
3240	2246	1726
3241	2246	1970
3242	2246	2070
3243	2246	2076
3244	2246	2131
3245	2246	992
3246	2246	2183
3247	2246	1110
3248	2246	1341
3249	2246	1419
3250	2246	1555
3251	2246	1797
3252	2246	1844
3253	2246	2051
3254	2246	2108
3255	2246	1305
3256	2246	1411
3257	2246	1470
3258	2246	1508
3259	2246	1876
3260	2246	1897
3261	2246	2220
3262	2246	1955
3263	2246	1364
3264	2246	1377
3265	2246	1721
3266	2246	1889
3267	2246	2054
3268	2246	1543
3269	2246	1811
3270	2246	1887
3271	2246	2093
3272	2246	2150
3273	2247	1054
3274	2247	1104
3275	2247	1385
3276	2247	1539
3277	2247	1766
3278	2247	1816
3279	2247	1881
3280	2247	1895
3281	2247	2111
3282	2247	995
3283	2247	999
3284	2247	1099
3285	2247	1143
3286	2247	1416
3287	2247	1629
3288	2247	1637
3289	2247	1711
3290	2247	1926
3291	2247	2116
3292	2247	2152
3293	2247	1120
3294	2247	1284
3295	2247	1293
3296	2247	1408
3297	2247	1643
3298	2247	1729
3299	2247	1821
3300	2247	1825
3301	2247	1936
3302	2247	1979
3303	2247	2012
3304	2247	2049
3305	2247	1267
3306	2247	1349
3307	2247	1452
3308	2247	1523
3309	2247	1541
3310	2247	2195
3311	2247	1653
3312	2247	1768
3313	2247	1782
3314	2247	1949
3315	2247	2095
3316	2247	2118
3317	2247	1022
3318	2247	1069
3319	2247	1322
3320	2247	1609
3321	2247	1205
3322	2247	1373
3323	2247	1640
3324	2247	2214
3325	2247	992
3326	2247	1110
3327	2247	1194
3328	2247	1276
3329	2247	1419
3330	2247	2191
3331	2247	1797
3332	2247	2108
3333	2247	1411
3334	2247	1470
3335	2247	1533
3336	2247	1876
3337	2247	1308
3338	2247	1364
3339	2247	1457
3340	2247	1553
3341	2247	1889
3342	2247	1003
3343	2247	1535
3344	2247	1713
3345	2247	1887
3346	2247	2101
3347	2248	807
3348	2248	1054
3349	2248	1104
3350	2248	1291
3351	2248	1504
3352	2248	1539
3353	2248	1748
3354	2248	1766
3355	2248	1807
3356	2248	1809
3357	2248	1816
3358	2248	1881
3359	2248	1895
3360	2248	1938
3361	2248	1988
3362	2248	2111
3363	2248	883
3364	2248	1086
3365	2248	1099
3366	2248	1107
3367	2248	1126
3368	2248	1143
3369	2248	1316
3370	2248	1324
3371	2248	1416
3372	2248	1448
3373	2248	1455
3374	2248	1461
3375	2248	1526
3376	2248	1568
3377	2248	1709
3378	2248	1711
3379	2248	1733
3380	2248	1763
3381	2248	2193
3382	2248	2170
3383	2248	1926
3384	2248	1940
3385	2248	1982
3386	2248	1992
3387	2248	1997
3388	2248	2068
3389	2248	2078
3390	2248	2090
3391	2248	2116
3392	2248	2152
3393	2248	888
3397	2248	1825
3398	2248	1643
3399	2248	1518
3400	2248	1754
3401	2248	1804
3402	2248	1618
3403	2248	1992
3404	2248	1848
3405	2248	888
3406	2248	2111
3407	2248	1526
3408	2248	1869
3409	2248	1126
3410	2248	1080
3411	2248	2047
3412	2248	1191
3413	2248	1782
3414	2248	1349
3415	2248	2068
3416	2248	1541
3417	2248	1414
3418	2248	2188
3419	2248	1748
3420	2248	1539
3421	2248	1267
3422	2248	2070
3423	2248	1746
3424	2248	1219
3425	2248	1099
3426	2248	1559
3427	2248	807
3428	2248	1205
3429	2248	1143
3430	2248	1862
3431	2248	1591
3432	2248	1924
3433	2248	1968
3434	2248	1322
3435	2248	1759
3436	2248	2012
3437	2248	1123
3438	2248	1761
3439	2248	2173
3440	2248	1846
3441	2248	1737
3442	2248	1881
3443	2248	1546
3444	2248	1979
3445	2248	2131
3446	2248	1069
3447	2248	1476
3448	2248	1640
3449	2248	1568
3450	2248	988
3451	2248	2116
3452	2248	2214
3453	2248	1949
3454	2248	1054
3455	2248	1295
3456	2248	1367
3457	2248	1729
3458	2248	1895
3459	2248	2138
3460	2248	1864
3461	2248	1936
3462	2248	2078
3463	2248	1120
3464	2248	1399
3465	2248	1116
3466	2248	883
3467	2248	1293
3468	2248	1242
3469	2248	1821
3470	2248	1866
3471	2248	2000
3472	2248	1504
3473	2248	1777
3474	2248	1970
3475	2248	2095
3476	2248	1742
3477	2248	1766
3478	2248	2170
3479	2248	1086
3480	2248	2193
3481	2248	2090
3482	2248	1178
3483	2248	1973
3484	2248	2033
3485	2248	1291
3486	2248	900
3487	2248	1104
3488	2248	1779
3489	2248	1316
3490	2248	1735
3491	2248	1837
3492	2248	1997
3493	2248	1609
3494	2248	1768
3495	2248	937
3496	2248	1148
3497	2248	2076
3498	2248	2152
3499	2248	1926
3500	2248	1988
3501	2248	2197
3502	2248	1833
3503	2248	1320
3504	2248	1706
3505	2248	1938
3506	2248	1075
3507	2248	1284
3508	2248	1763
3509	2248	1856
3510	2248	1816
3511	2248	1506
3512	2248	1739
3513	2248	1107
3514	2248	2049
3515	2248	2142
3516	2248	1959
3517	2248	1570
3518	2248	1459
3519	2248	1827
3520	2248	1807
3521	2248	1416
3522	2248	1809
3523	2248	2118
3524	2248	1461
3525	2248	1197
3526	2248	1452
3527	2248	1653
3528	2248	1037
3529	2248	1022
3530	2248	1455
3531	2248	1549
3532	2248	1711
3533	2248	1823
3534	2248	1448
3535	2248	1883
3536	2248	2123
3537	2248	2249
3538	2248	2126
3539	2248	1424
3540	2248	1373
3541	2248	2031
3542	2248	1279
3543	2248	1078
3544	2248	1709
3545	2248	1733
3546	2248	1940
3547	2248	1324
3548	2248	1934
3549	2248	1523
3550	2248	1873
3551	2248	1982
3552	2248	1825
3553	2248	1643
3554	2248	1518
3555	2248	1754
3556	2248	1341
3557	2248	1804
3558	2248	1618
3559	2248	1848
3560	2248	1992
3561	2248	888
3562	2248	2111
3563	2248	2144
3564	2248	1526
3565	2248	1869
3566	2248	992
3567	2248	1975
3568	2248	1126
3569	2248	2128
3570	2248	2054
3571	2248	1080
3572	2248	2051
3573	2248	2047
3574	2248	1191
3575	2248	1782
3576	2248	1349
3577	2248	1721
3578	2248	1414
3579	2248	1541
3580	2248	2068
3581	2248	2183
3582	2248	2188
3583	2248	1995
3584	2248	1748
3585	2248	1267
3586	2248	1539
3587	2248	2070
3588	2248	1746
3589	2248	1255
3590	2248	1219
3591	2248	1099
3592	2248	1559
3593	2248	807
3594	2248	1205
3595	2248	1143
3596	2248	1862
3597	2248	1908
3598	2248	1591
3599	2248	1924
3600	2248	1968
3601	2248	1322
3602	2248	1759
3603	2248	1800
3604	2248	1123
3605	2248	2012
3606	2248	1110
3607	2248	2173
3608	2248	1761
3609	2248	1846
3610	2248	1118
3611	2248	1737
3612	2248	1797
3613	2248	1881
3614	2248	2101
3615	2248	1546
3616	2248	1979
3617	2248	2131
3618	2248	1955
3619	2248	2150
3620	2248	1069
3621	2248	1476
3622	2248	1419
3623	2248	1276
3624	2248	1470
3625	2248	1640
3626	2248	1543
3627	2248	988
3628	2248	1568
3629	2248	2214
3630	2248	2116
3631	2248	1949
3632	2248	1054
3633	2248	1295
3634	2248	1367
3635	2248	1835
3636	2248	1729
3637	2248	1844
3638	2248	1895
3639	2248	2138
3640	2248	1864
3641	2248	1936
3642	2248	2078
3643	2248	1922
3644	2248	1577
3645	2248	2058
3646	2248	1120
3647	2248	1399
3648	2248	1116
3649	2248	883
3650	2248	1293
3651	2248	1242
3652	2248	1821
3653	2248	1866
3654	2248	1713
3655	2248	1216
3656	2248	2000
3657	2248	1897
3658	2248	1504
3659	2248	1777
3660	2248	1970
3661	2248	1814
3662	2248	2095
3663	2248	1742
3664	2248	1766
3665	2248	2220
3666	2248	2170
3667	2248	1086
3668	2248	983
3669	2248	2193
3670	2248	2090
3671	2248	1178
3672	2248	1973
3673	2248	2033
3674	2248	900
3675	2248	1291
3676	2248	1104
3677	2248	1852
3678	2248	1779
3679	2248	973
3680	2248	1003
3681	2248	1316
3682	2248	1735
3683	2248	1837
3684	2248	1457
3685	2248	1609
3686	2248	1997
3687	2248	1370
3688	2248	937
3689	2248	1768
3690	2248	1305
3691	2248	1148
3692	2248	2076
3693	2248	2152
3694	2248	1926
3695	2248	1988
3696	2248	1811
3697	2248	1833
3698	2248	2197
3699	2248	1320
3700	2248	1706
3701	2248	1075
3702	2248	1284
3703	2248	1938
3704	2248	1763
3705	2248	1856
3706	2248	1816
3707	2248	1506
3708	2248	1771
3709	2248	1739
3710	2248	1107
3711	2248	2049
3712	2248	1819
3713	2248	1411
3714	2248	1364
3715	2248	2142
3716	2248	1570
3717	2248	1959
3718	2248	1459
3719	2248	1827
3720	2248	1807
3721	2248	1919
3722	2248	2093
3723	2248	1416
3724	2248	1809
3725	2248	2118
3726	2248	1197
3727	2248	1461
3728	2248	1889
3729	2248	1452
3730	2248	1653
3731	2248	1887
3732	2248	1037
3733	2248	1022
3734	2248	2191
3735	2248	1533
3736	2248	1308
3737	2248	1455
3738	2248	1549
3739	2248	2108
3740	2248	1711
3741	2248	1823
3742	2248	1448
3743	2248	1883
3744	2248	2123
3745	2248	1555
3746	2248	2249
3747	2248	2126
3748	2248	1424
3749	2248	1858
3750	2248	1373
3751	2248	2031
3752	2248	1876
3753	2248	1279
3754	2248	1841
3755	2248	1078
3756	2248	1709
3757	2248	1977
3758	2248	1733
3759	2248	1940
3760	2248	1324
3761	2248	1934
3762	2248	1535
3763	2248	1523
3764	2248	2074
3765	2248	1873
3766	2248	1982
\.


--
-- TOC entry 2599 (class 0 OID 90435)
-- Dependencies: 234
-- Data for Name: adm_link_supplemental_damage; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_link_supplemental_damage (id, "referenceId", "diceId", "damageTypeId", "abilityScoreModifierId") FROM stdin;
1617	1690	552	18	0
1626	1703	552	11	0
1631	1706	552	11	0
1744	1811	1813	7	0
2137	2186	557	1106	0
\.


--
-- TOC entry 2597 (class 0 OID 74023)
-- Dependencies: 232
-- Data for Name: adm_link_type_picklist; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_link_type_picklist (id, "picklistId", "typeId") FROM stdin;
1104	1233	944
1105	1233	907
1106	1233	171
1107	1233	122
1108	1233	121
1109	1232	904
1110	1232	806
\.


--
-- TOC entry 2565 (class 0 OID 16509)
-- Dependencies: 200
-- Data for Name: adm_link_weapon_property; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_link_weapon_property (id, "referenceId", "propertyId") FROM stdin;
1	123	42
2	125	40
3	125	42
4	125	46
5	126	47
6	128	42
7	128	46
8	130	46
9	131	42
10	131	46
11	133	48
12	134	42
13	135	46
14	135	48
15	136	39
16	136	43
17	136	47
18	137	40
19	137	46
20	138	39
21	138	47
22	139	39
23	140	48
24	143	41
25	143	44
26	143	47
27	144	41
28	144	47
29	146	41
30	146	47
31	148	41
32	148	44
33	148	47
34	149	44
35	149	45
36	150	48
37	151	41
38	151	47
39	153	41
40	153	44
41	153	47
42	154	40
43	155	40
44	155	42
45	156	40
46	156	42
47	157	46
48	157	48
49	159	48
50	160	40
51	160	44
52	161	39
53	161	43
57	164	39
58	164	42
59	164	43
60	165	39
61	165	41
62	165	43
63	165	47
64	166	39
65	166	41
66	166	47
67	168	45
68	168	46
\.


--
-- TOC entry 2561 (class 0 OID 16482)
-- Dependencies: 196
-- Data for Name: adm_map_proficiency_equipment_category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_map_proficiency_equipment_category (id, "proficiencyCategoryId", "equipmentCategoryId") FROM stdin;
69	93	62
70	94	63
71	96	64
72	99	61
\.


--
-- TOC entry 2586 (class 0 OID 16665)
-- Dependencies: 221
-- Data for Name: adm_map_spellcasting_focus_equipment_category; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY adm_map_spellcasting_focus_equipment_category (id, "spellcastingFocusId", "equipmentCategoryId") FROM stdin;
83	484	58
84	486	64
85	487	60
86	485	59
\.


--
-- TOC entry 2589 (class 0 OID 33067)
-- Dependencies: 224
-- Data for Name: x_adm_def_damage; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY x_adm_def_damage ("referenceId", "diceId", "damageTypeId") FROM stdin;
125	124	8
166	127	8
154	127	8
133	129	7
157	129	8
143	141	9
158	127	8
164	129	8
130	129	8
123	124	7
144	145	9
134	124	9
149	145	8
138	129	8
165	141	8
155	129	9
153	141	8
160	124	9
152	127	8
146	147	9
151	147	7
156	129	8
135	129	8
159	127	7
807	129	10
128	129	9
150	127	9
142	127	7
132	129	7
126	127	7
168	162	167
137	124	8
139	124	7
148	141	9
140	127	9
136	127	8
131	124	7
161	495	8
1029	559	13
1031	559	13
1033	559	13
1035	559	13
1050	1052	9
1069	1062	15
1072	546	18
1082	147	18
1086	539	12
1089	547	14
1095	1098	14
1104	127	15
1107	546	1106
1110	1113	15
1120	551	9
1123	558	16
1148	1062	11
1186	546	0
1200	1062	0
1264	129	8
1305	1304	12
1312	557	1106
1341	1344	13
1352	539	17
1357	124	18
1385	141	13
1403	129	8
1414	539	7
1457	552	17
1470	1472	15
1476	1113	12
1504	141	12
1506	541	1106
1508	1510	12
1511	539	12
1515	552	1514
1518	147	12
1530	559	1106
1574	1576	18
1585	552	18
1593	141	8
1611	1613	15
1626	541	12
1629	542	0
\.


--
-- TOC entry 2585 (class 0 OID 16656)
-- Dependencies: 220
-- Data for Name: x_adm_link_spell_component; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY x_adm_link_spell_component (id, "referenceId", "componentId", description) FROM stdin;
79	1	2	test 1
80	1	3	test 2
\.


--
-- TOC entry 2611 (class 0 OID 0)
-- Dependencies: 195
-- Name: adm_link_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('adm_link_seq', 3773, true);


--
-- TOC entry 2612 (class 0 OID 0)
-- Dependencies: 185
-- Name: adm_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('adm_seq', 2286, true);


-- Completed on 2017-12-09 15:46:13

--
-- PostgreSQL database dump complete
--

