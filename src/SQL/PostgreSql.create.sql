




CREATE TABLE ТЧУтвержДок (
 primaryKey UUID NOT NULL,
 РасДок UUID NOT NULL,
 ХрДок UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧСоздДок (
 primaryKey UUID NOT NULL,
 ФормаДокумента UUID NOT NULL,
 ХрДок UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ХрДок (
 primaryKey UUID NOT NULL,
 ДатаСохранения TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧПрава (
 primaryKey UUID NOT NULL,
 ПраваПол VARCHAR(14) NULL,
 АвПользователи UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE АвПользователи (
 primaryKey UUID NOT NULL,
 Логин VARCHAR(255) NULL,
 ДатаРегистрации TIMESTAMP(3) NULL,
 Пароль VARCHAR(255) NULL,
 IDПользователя INT NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧПользователь (
 primaryKey UUID NOT NULL,
 АвПользователи UUID NOT NULL,
 ВходВСистему UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должность (
 primaryKey UUID NOT NULL,
 IDДолжности INT NULL,
 Должность VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ВходВСистему (
 primaryKey UUID NOT NULL,
 ДатаВхода TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудники (
 primaryKey UUID NOT NULL,
 IDСотрудника INT NULL,
 ФИОСотрудника VARCHAR(255) NULL,
 Отделы VARCHAR(14) NULL,
 ДатаПриема TIMESTAMP(3) NULL,
 Зарплата DOUBLE PRECISION NULL,
 НомерТелефона INT NULL,
 Пол VARCHAR(7) NULL,
 Должность UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ФормаДокумента (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 Содержание VARCHAR(255) NULL,
 Дата TIMESTAMP(3) NULL,
 Отделы VARCHAR(14) NULL,
 АвПользователи UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE РасДок (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 Утверждение VARCHAR(11) NULL,
 ФормаДокумента UUID NOT NULL,
 АвПользователи UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ТЧУтвержДок ADD CONSTRAINT FK4f2831027c707ebbf2354efe02ec3aa6713879f1 FOREIGN KEY (РасДок) REFERENCES РасДок; 
CREATE INDEX Index4f2831027c707ebbf2354efe02ec3aa6713879f1 on ТЧУтвержДок (РасДок); 

 ALTER TABLE ТЧУтвержДок ADD CONSTRAINT FKf56c81df12b56a9386fa22095c5d0d75d4ead913 FOREIGN KEY (ХрДок) REFERENCES ХрДок; 
CREATE INDEX Indexf56c81df12b56a9386fa22095c5d0d75d4ead913 on ТЧУтвержДок (ХрДок); 

 ALTER TABLE ТЧСоздДок ADD CONSTRAINT FKd76bc92214e6ba4ffce523ebd2797fde5ddf8af3 FOREIGN KEY (ФормаДокумента) REFERENCES ФормаДокумента; 
CREATE INDEX Indexd76bc92214e6ba4ffce523ebd2797fde5ddf8af3 on ТЧСоздДок (ФормаДокумента); 

 ALTER TABLE ТЧСоздДок ADD CONSTRAINT FKaed64ff58926a9c052774dba1e253da7dd668258 FOREIGN KEY (ХрДок) REFERENCES ХрДок; 
CREATE INDEX Indexaed64ff58926a9c052774dba1e253da7dd668258 on ТЧСоздДок (ХрДок); 

 ALTER TABLE ТЧПрава ADD CONSTRAINT FKb6857df79b7f1e21c019940d52016bdf623cc46a FOREIGN KEY (АвПользователи) REFERENCES АвПользователи; 
CREATE INDEX Indexb6857df79b7f1e21c019940d52016bdf623cc46a on ТЧПрава (АвПользователи); 

 ALTER TABLE АвПользователи ADD CONSTRAINT FK92000c2f6ca1c502deedf7fb3afff73da9e7ff5c FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index92000c2f6ca1c502deedf7fb3afff73da9e7ff5c on АвПользователи (Сотрудники); 

 ALTER TABLE ТЧПользователь ADD CONSTRAINT FKe46610d3d41d794124b25d1292ef8ee9080c03c3 FOREIGN KEY (АвПользователи) REFERENCES АвПользователи; 
CREATE INDEX Indexe46610d3d41d794124b25d1292ef8ee9080c03c3 on ТЧПользователь (АвПользователи); 

 ALTER TABLE ТЧПользователь ADD CONSTRAINT FK0f8ca137a452edbecf9f6c369d3ab9d696d5edc0 FOREIGN KEY (ВходВСистему) REFERENCES ВходВСистему; 
CREATE INDEX Index0f8ca137a452edbecf9f6c369d3ab9d696d5edc0 on ТЧПользователь (ВходВСистему); 

 ALTER TABLE Сотрудники ADD CONSTRAINT FKdb12690da9c19a13f60fc28ce9dc5fcfae00ada9 FOREIGN KEY (Должность) REFERENCES Должность; 
CREATE INDEX Indexdb12690da9c19a13f60fc28ce9dc5fcfae00ada9 on Сотрудники (Должность); 

 ALTER TABLE ФормаДокумента ADD CONSTRAINT FKa3b9a83ad342bc19ef94537ac1640bb6ce461304 FOREIGN KEY (АвПользователи) REFERENCES АвПользователи; 
CREATE INDEX Indexa3b9a83ad342bc19ef94537ac1640bb6ce461304 on ФормаДокумента (АвПользователи); 

 ALTER TABLE РасДок ADD CONSTRAINT FK51b96f9037c4f1bf720f3b7d887cffbf96f47ea1 FOREIGN KEY (ФормаДокумента) REFERENCES ФормаДокумента; 
CREATE INDEX Index51b96f9037c4f1bf720f3b7d887cffbf96f47ea1 on РасДок (ФормаДокумента); 

 ALTER TABLE РасДок ADD CONSTRAINT FKabb59ee6d5068d28d230ccadc158ff02664831ed FOREIGN KEY (АвПользователи) REFERENCES АвПользователи; 
CREATE INDEX Indexabb59ee6d5068d28d230ccadc158ff02664831ed on РасДок (АвПользователи); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

