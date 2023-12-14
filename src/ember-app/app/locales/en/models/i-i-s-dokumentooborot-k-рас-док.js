export default {
  projections: {
    РасДокE: {
      дата: {
        __caption__: 'Дата рассмотрения'
      },
      утверждение: {
        __caption__: 'Статус '
      },
      формаДокумента: {
        __caption__: 'Форма документа',
        наименование: {
          __caption__: 'Наименование'
        }
      },
      авПользователи: {
        __caption__: 'Ав пользователи',
        логин: {
          __caption__: 'Логин'
        }
      }
    },
    РасДокL: {
      дата: {
        __caption__: 'Дата рассмотрения'
      },
      авПользователи: {
        __caption__: 'Утверждающее лицо',
        сотрудники: {
          __caption__: '',
          фИОСотрудника: {
            __caption__: 'Утверждающее лицо'
          },
          отделы: {
            __caption__: 'Утверждающий отдел'
          }
        }
      },
      формаДокумента: {
        __caption__: 'Наименование документа',
        наименование: {
          __caption__: 'Наименование документа'
        }
      },
      утверждение: {
        __caption__: 'Статус решения'
      }
    }
  },
  validations: {
    дата: {
      __caption__: 'Дата рассмотрения'
    },
    утверждение: {
      __caption__: 'Статус '
    },
    авПользователи: {
      __caption__: 'Ав пользователи'
    },
    формаДокумента: {
      __caption__: 'Форма документа'
    }
  }
};
