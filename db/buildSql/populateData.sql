PGDMP                          v            dnd5ecg    9.6.0    10.0     +	           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            ,	           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �            1259    49444    adm_def_chart_entry    TABLE     *  CREATE TABLE adm_def_chart_entry (
    id bigint DEFAULT nextval('adm_link_seq'::regclass) NOT NULL,
    "chartId" bigint NOT NULL,
    "columnIndex" smallint NOT NULL,
    "rowIndex" smallint NOT NULL,
    description character varying NOT NULL,
    "selectionItemId" bigint DEFAULT 0 NOT NULL
);
 '   DROP TABLE public.adm_def_chart_entry;
       public         postgres    false            (	          0    49444    adm_def_chart_entry 
   TABLE DATA               p   COPY adm_def_chart_entry (id, "chartId", "columnIndex", "rowIndex", description, "selectionItemId") FROM stdin;
    public       postgres    false    230   �       �           2606    49452 -   adm_def_chart_entry adm_def_chart_entry_pkey1 
   CONSTRAINT     d   ALTER TABLE ONLY adm_def_chart_entry
    ADD CONSTRAINT adm_def_chart_entry_pkey1 PRIMARY KEY (id);
 W   ALTER TABLE ONLY public.adm_def_chart_entry DROP CONSTRAINT adm_def_chart_entry_pkey1;
       public         postgres    false    230            (	   	  x�}��n�6�k�)��lC�A<<���u�^�X�t��n[���R!�-�a�bO�'��?VV,���4ύ
Ī�?�t�V��g_H'2�B&-)Jd�B9ř\�Pj�R�)�B���Y��
ER&�i�,�s�w�x������C�P�ԛnן	}]Ш��|�e��X�:�LiTg0�"���bI�FYW���uSZ���Ĳ.C()�#��ҹF� +�iu�e���r]�_q�k��'����ʭR���).)RW�!E;w��)[Rf]�v�~\̕�c�xe���O�}y�UnI�5ɆC]���� K[C--��s�M�)\ ����S\���ڸ��UY��AIoX� 1y{Z�!�i�I�H:l/���E	����n�T/��;ʠ� ��>u�=.�4Ww�tw���Nb��Q?��x]��~�N��8}��E�ջi��q�ۡ�s|7�����<�v�|i�L�-�pAK�C������j�-��$����x���]���E�Ƶz5c���� h�F���A�9� ۳Ъ��v���a,o+��n[w5[w��;�`�Έ����h�@��L�nn���܏�g1J�f������ƌ��:��q�T:�SOyO�vwݒ;|h���#�:M�t"���qi���A��۹����Xb�A���������t/�(����K�PK*�%]F�������i���0�n���0���1��e$��(�����N�n��ٷ��)~0>�C8��}��jI�*�w2�`�V/����gbl��ssH�l�з�L�?��x���2�ʜԜ++�@	�4R���N{����xL���o��\v����t<�H?�����x[�T�4K����������Ԙx���m��#.���!>V*h����!!i�a!��в1J[%9�����X�g���7���$5&������j�]+A]R+�2FT�Vev^���X�mt���k���@�olQ�kP�����eq����v^,*oH��jV�b��K�7MQ�kuPw~V�V��^-Ճ�#�X�>���&=�5�U�b�Gl�X���
V�W�3�������E(
%��AX�t=�X�b���XH����(:I	���t����w����˱=t��.M}��ʏ���!z"�2O�!~"d�_��E�rO�,B�!��"� ���S>%��~0�at63g#���l��N���,�9����5�p����YT�N �.bjA4�@���ĵS��Bd�#�@B�߿�����(�     