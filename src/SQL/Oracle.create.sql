



CREATE TABLE "ТЧУтвержДок"
(

	"primaryKey" RAW(16) NOT NULL,

	"РасДок" RAW(16) NOT NULL,

	"ХрДок" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧСоздДок"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФормаДокумента" RAW(16) NOT NULL,

	"ХрДок" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ХрДок"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаСохранения" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧПрава"
(

	"primaryKey" RAW(16) NOT NULL,

	"ПраваПол" NVARCHAR2(14) NULL,

	"АвПользователи" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "АвПользователи"
(

	"primaryKey" RAW(16) NOT NULL,

	"Логин" NVARCHAR2(255) NULL,

	"ДатаРегистрации" DATE NULL,

	"Пароль" NVARCHAR2(255) NULL,

	"IDПользователя" NUMBER(10) NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧПользователь"
(

	"primaryKey" RAW(16) NOT NULL,

	"АвПользователи" RAW(16) NOT NULL,

	"ВходВСистему" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должность"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDДолжности" NUMBER(10) NULL,

	"Должность" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ВходВСистему"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаВхода" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудники"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDСотрудника" NUMBER(10) NULL,

	"ФИОСотрудника" NVARCHAR2(255) NULL,

	"Отделы" NVARCHAR2(14) NULL,

	"ДатаПриема" DATE NULL,

	"Зарплата" FLOAT(126) NULL,

	"НомерТелефона" NUMBER(10) NULL,

	"Пол" NVARCHAR2(7) NULL,

	"Должность" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ФормаДокумента"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Содержание" NVARCHAR2(255) NULL,

	"Дата" DATE NULL,

	"Отделы" NVARCHAR2(14) NULL,

	"АвПользователи" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "РасДок"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"Утверждение" NVARCHAR2(11) NULL,

	"ФормаДокумента" RAW(16) NOT NULL,

	"АвПользователи" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ТЧУтвержДок"
	ADD CONSTRAINT "ТЧУтвержДок_F_9388" FOREIGN KEY ("РасДок") REFERENCES "РасДок" ("primaryKey");

CREATE INDEX "ТЧУтвержДок_I_2050" on "ТЧУтвержДок" ("РасДок");

ALTER TABLE "ТЧУтвержДок"
	ADD CONSTRAINT "ТЧУтвержДок_F_1206" FOREIGN KEY ("ХрДок") REFERENCES "ХрДок" ("primaryKey");

CREATE INDEX "ТЧУтвержДок_IХ_414" on "ТЧУтвержДок" ("ХрДок");

ALTER TABLE "ТЧСоздДок"
	ADD CONSTRAINT "ТЧСоздДок_FФо_4280" FOREIGN KEY ("ФормаДокумента") REFERENCES "ФормаДокумента" ("primaryKey");

CREATE INDEX "ТЧСоздДок_IФо_6582" on "ТЧСоздДок" ("ФормаДокумента");

ALTER TABLE "ТЧСоздДок"
	ADD CONSTRAINT "ТЧСоздДок_FХр_6598" FOREIGN KEY ("ХрДок") REFERENCES "ХрДок" ("primaryKey");

CREATE INDEX "ТЧСоздДок_IХрДок" on "ТЧСоздДок" ("ХрДок");

ALTER TABLE "ТЧПрава"
	ADD CONSTRAINT "ТЧПрава_FАвПо_2785" FOREIGN KEY ("АвПользователи") REFERENCES "АвПользователи" ("primaryKey");

CREATE INDEX "ТЧПрава_IАвПо_4605" on "ТЧПрава" ("АвПользователи");

ALTER TABLE "АвПользователи"
	ADD CONSTRAINT "АвПользовате_1597" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "АвПользовате_1767" on "АвПользователи" ("Сотрудники");

ALTER TABLE "ТЧПользователь"
	ADD CONSTRAINT "ТЧПользовате_1706" FOREIGN KEY ("АвПользователи") REFERENCES "АвПользователи" ("primaryKey");

CREATE INDEX "ТЧПользовате_2569" on "ТЧПользователь" ("АвПользователи");

ALTER TABLE "ТЧПользователь"
	ADD CONSTRAINT "ТЧПользовате_3716" FOREIGN KEY ("ВходВСистему") REFERENCES "ВходВСистему" ("primaryKey");

CREATE INDEX "ТЧПользовате_7170" on "ТЧПользователь" ("ВходВСистему");

ALTER TABLE "Сотрудники"
	ADD CONSTRAINT "Сотрудники_FД_1441" FOREIGN KEY ("Должность") REFERENCES "Должность" ("primaryKey");

CREATE INDEX "Сотрудники_IД_6987" on "Сотрудники" ("Должность");

ALTER TABLE "ФормаДокумента"
	ADD CONSTRAINT "ФормаДокумен_2979" FOREIGN KEY ("АвПользователи") REFERENCES "АвПользователи" ("primaryKey");

CREATE INDEX "ФормаДокумен_8282" on "ФормаДокумента" ("АвПользователи");

ALTER TABLE "РасДок"
	ADD CONSTRAINT "РасДок_FФорма_5428" FOREIGN KEY ("ФормаДокумента") REFERENCES "ФормаДокумента" ("primaryKey");

CREATE INDEX "РасДок_IФорма_2859" on "РасДок" ("ФормаДокумента");

ALTER TABLE "РасДок"
	ADD CONSTRAINT "РасДок_FАвПол_5906" FOREIGN KEY ("АвПользователи") REFERENCES "АвПользователи" ("primaryKey");

CREATE INDEX "РасДок_IАвПол_1396" on "РасДок" ("АвПользователи");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


