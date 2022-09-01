--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: tasks_to_need; Type: TABLE; Schema: public; Owner: berni
--

CREATE TABLE public.tasks_to_need (
    user_id uuid NOT NULL,
    task_to_need character varying(255) NOT NULL
);


ALTER TABLE public.tasks_to_need OWNER TO berni;

--
-- Name: tasks_to_take; Type: TABLE; Schema: public; Owner: berni
--

CREATE TABLE public.tasks_to_take (
    user_id uuid NOT NULL,
    interest character varying(255) NOT NULL
);


ALTER TABLE public.tasks_to_take OWNER TO berni;

--
-- Name: user_profile; Type: TABLE; Schema: public; Owner: berni
--

CREATE TABLE public.user_profile (
    id uuid NOT NULL,
    email character varying(255),
    password character varying(255),
    phone_number character varying(255),
    rating integer NOT NULL,
    town character varying(255),
    user_name character varying(255),
    user_status character varying(255),
    photo character varying(255),
    role character varying(255)
);


ALTER TABLE public.user_profile OWNER TO berni;

--
-- Data for Name: tasks_to_need; Type: TABLE DATA; Schema: public; Owner: berni
--

COPY public.tasks_to_need (user_id, task_to_need) FROM stdin;
f7164371-d0d6-494d-ad4d-3f988b815ffe	COOKING
e7636f4e-1255-11ed-861d-0242ac120002	IKEA_ASSEMBLY
e7636f4e-1255-11ed-861d-0242ac120002	MOVE_BOXES_WITH_CAR
e7636f4e-1255-11ed-861d-0242ac120004	IKEA_ASSEMBLY
e7636f4e-1255-11ed-861d-0242ac120007	COOKING
e7636f4e-1255-11ed-861d-0242ac120008	BABY_SITTING
9f70d683-1cfa-49c2-958f-82f409435bd4	SHOPPING
\.


--
-- Data for Name: tasks_to_take; Type: TABLE DATA; Schema: public; Owner: berni
--

COPY public.tasks_to_take (user_id, interest) FROM stdin;
f7164371-d0d6-494d-ad4d-3f988b815ffe	DOG_WALKING
83387d1b-d0b6-4ef5-9272-3c406b41e487	DOG_WALKING
04b399e1-b66b-4c4d-8fcf-6e65cb7804d9	DOG_WALKING
04b399e1-b66b-4c4d-8fcf-6e65cb7804d9	COOKING
04b399e1-b66b-4c4d-8fcf-6e65cb7804d9	IKEA_ASSEMBLY
e7636f4e-1255-11ed-861d-0242ac120002	SHOPPING
e7636f4e-1255-11ed-861d-0242ac120003	WAIT_IN_LINE
e7636f4e-1255-11ed-861d-0242ac120003	GARDENING
e7636f4e-1255-11ed-861d-0242ac120006	GET_KIDS_FROM_SCHOOL
e7636f4e-1255-11ed-861d-0242ac120008	DOG_SITTING
e7636f4e-1255-11ed-861d-0242ac120009	BABY_SITTING
9f70d683-1cfa-49c2-958f-82f409435bd4	SHOPPING
\.


--
-- Data for Name: user_profile; Type: TABLE DATA; Schema: public; Owner: berni
--

COPY public.user_profile (id, email, password, phone_number, rating, town, user_name, user_status, photo, role) FROM stdin;
e7636f4e-1255-11ed-861d-0242ac120006	em@yahoo.com	empass	204453617	4	Boston	Em	TASKER	../images/em.jpeg	\N
04b399e1-b66b-4c4d-8fcf-6e65cb7804d9	tesztanita@hotmail.com	anitapass	06306789835	0	New York	anitaeszter	TASKER	../images/anitaeszter.jpeg	\N
e7636f4e-1255-11ed-861d-0242ac120003	peter33@gmail.com	peterpass	203423112	5	Charlotte	Peter	TASKER	../images/peter.jpeg	\N
e7636f4e-1255-11ed-861d-0242ac120008	emily_cat@gmail.com	catpass	403345155	5	Charlotte	EmilyCat	BOTH	../images/emilycat.jpeg	\N
e7636f4e-1255-11ed-861d-0242ac120004	kova1342@gmail.com	kovapass	304555634	4	Memphis	Kova	BUYER	../images/kova.jpeg	\N
83387d1b-d0b6-4ef5-9272-3c406b41e487	kkj13@hotmail.com	test	06203339876	0	Seattle	Balazs	TASKER	../images/balazs.jpeg	\N
e7636f4e-1255-11ed-861d-0242ac120007	joseph_smith_33@gmail.com	josephpass	304523619	5	Boston	Joseph	BUYER	../images/joseph.jpeg	\N
1a64ce80-1259-11ed-861d-0242ac120002	inka@gmail.com	jh	26358	1	Portland	Inka	BUYER	../images/inka.jpeg	\N
f7164371-d0d6-494d-ad4d-3f988b815ffe	janoswilldoit@gmail.com	tester	032023789564	0	Jacksonville	Janos	TASKER	../images/janos.jpeg	\N
e7636f4e-1255-11ed-861d-0242ac120009	johntasker@gmail.com	johnpass	307423344	3	Chicago	John	TASKER	../images/john.jpeg	\N
9f70d683-1cfa-49c2-958f-82f409435bd4	kkst@gmail.com	NEW	132023789564	0	Detroit	anita	BOTH	../images/anita.jpeg	USER
e7636f4e-1255-11ed-861d-0242ac120002	josh@gmail.com	joshpass	203423111	4	Nashville	Josh	BOTH	../images/josh.jpeg	ADMIN
875b89bd-8109-4f71-b6db-6929180a6d63	\N	johnthelittle	\N	0	\N	johnthelittle	\N	\N	\N
01eb05d6-cacb-444a-9144-e2816e4fb2c1	\N	mayihavearegistration	\N	0	\N	mayihavearegistration	\N	\N	\N
\.


--
-- Name: user_profile user_profile_pkey; Type: CONSTRAINT; Schema: public; Owner: berni
--

ALTER TABLE ONLY public.user_profile
    ADD CONSTRAINT user_profile_pkey PRIMARY KEY (id);


--
-- Name: tasks_to_need fk4eo4kt03t19sf9g74p5hi6dlj; Type: FK CONSTRAINT; Schema: public; Owner: berni
--

ALTER TABLE ONLY public.tasks_to_need
    ADD CONSTRAINT fk4eo4kt03t19sf9g74p5hi6dlj FOREIGN KEY (user_id) REFERENCES public.user_profile(id);


--
-- Name: tasks_to_take fkflymm2agjgwacvjq3hedjuhft; Type: FK CONSTRAINT; Schema: public; Owner: berni
--

ALTER TABLE ONLY public.tasks_to_take
    ADD CONSTRAINT fkflymm2agjgwacvjq3hedjuhft FOREIGN KEY (user_id) REFERENCES public.user_profile(id);


--
-- PostgreSQL database dump complete
--

