﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.DokumentooborotK
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Т ч созд док.
    /// </summary>
    // *** Start programmer edit section *** (ТЧСоздДок CustomAttributes)

    // *** End programmer edit section *** (ТЧСоздДок CustomAttributes)
    [AutoAltered()]
    [Caption("Созданные документы")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧСоздДокE", new string[] {
            "ФормаДокумента as \'Наименование документа\'",
            "ФормаДокумента.Наименование as \'Наименование документа\'",
            "ФормаДокумента.Дата as \'Дата создания\'"}, Hidden=new string[] {
            "ФормаДокумента.Наименование"})]
    [MasterViewDefineAttribute("ТЧСоздДокE", "ФормаДокумента", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    public class ТЧСоздДок : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.DokumentooborotK.ФормаДокумента fФормаДокумента;
        
        private IIS.DokumentooborotK.ХрДок fХрДок;
        
        // *** Start programmer edit section *** (ТЧСоздДок CustomMembers)

        // *** End programmer edit section *** (ТЧСоздДок CustomMembers)

        
        /// <summary>
        /// Т ч созд док.
        /// </summary>
        // *** Start programmer edit section *** (ТЧСоздДок.ФормаДокумента CustomAttributes)

        // *** End programmer edit section *** (ТЧСоздДок.ФормаДокумента CustomAttributes)
        [PropertyStorage(new string[] {
                "ФормаДокумента"})]
        [NotNull()]
        public virtual IIS.DokumentooborotK.ФормаДокумента ФормаДокумента
        {
            get
            {
                // *** Start programmer edit section *** (ТЧСоздДок.ФормаДокумента Get start)

                // *** End programmer edit section *** (ТЧСоздДок.ФормаДокумента Get start)
                IIS.DokumentooborotK.ФормаДокумента result = this.fФормаДокумента;
                // *** Start programmer edit section *** (ТЧСоздДок.ФормаДокумента Get end)

                // *** End programmer edit section *** (ТЧСоздДок.ФормаДокумента Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧСоздДок.ФормаДокумента Set start)

                // *** End programmer edit section *** (ТЧСоздДок.ФормаДокумента Set start)
                this.fФормаДокумента = value;
                // *** Start programmer edit section *** (ТЧСоздДок.ФормаДокумента Set end)

                // *** End programmer edit section *** (ТЧСоздДок.ФормаДокумента Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.DokumentooborotK.ХрДок.
        /// </summary>
        // *** Start programmer edit section *** (ТЧСоздДок.ХрДок CustomAttributes)

        // *** End programmer edit section *** (ТЧСоздДок.ХрДок CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ХрДок"})]
        public virtual IIS.DokumentooborotK.ХрДок ХрДок
        {
            get
            {
                // *** Start programmer edit section *** (ТЧСоздДок.ХрДок Get start)

                // *** End programmer edit section *** (ТЧСоздДок.ХрДок Get start)
                IIS.DokumentooborotK.ХрДок result = this.fХрДок;
                // *** Start programmer edit section *** (ТЧСоздДок.ХрДок Get end)

                // *** End programmer edit section *** (ТЧСоздДок.ХрДок Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧСоздДок.ХрДок Set start)

                // *** End programmer edit section *** (ТЧСоздДок.ХрДок Set start)
                this.fХрДок = value;
                // *** Start programmer edit section *** (ТЧСоздДок.ХрДок Set end)

                // *** End programmer edit section *** (ТЧСоздДок.ХрДок Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧСоздДокE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧСоздДокE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧСоздДокE", typeof(IIS.DokumentooborotK.ТЧСоздДок));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ТЧСоздДок.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfТЧСоздДок CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfТЧСоздДок CustomAttributes)
    public class DetailArrayOfТЧСоздДок : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.DokumentooborotK.DetailArrayOfТЧСоздДок members)

        // *** End programmer edit section *** (IIS.DokumentooborotK.DetailArrayOfТЧСоздДок members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ТЧСоздДок by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ТЧСоздДок.
        /// </summary>
        public DetailArrayOfТЧСоздДок(IIS.DokumentooborotK.ХрДок fХрДок) : 
                base(typeof(ТЧСоздДок), ((ICSSoft.STORMNET.DataObject)(fХрДок)))
        {
        }
        
        public IIS.DokumentooborotK.ТЧСоздДок this[int index]
        {
            get
            {
                return ((IIS.DokumentooborotK.ТЧСоздДок)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.DokumentooborotK.ТЧСоздДок dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
