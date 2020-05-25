/* eslint-disable @typescript-eslint/no-explicit-any */
import QuasarX from 'quasar'
import { ref } from '@vue/composition-api'
import { i18n } from '../boot/i18n'

const atual = ref<string>('pt-br')

export function langUtils (init?: boolean) {
  const Quasar: any = QuasarX

  const ret = {
    traduz (k: string) {
      const msg = i18n.getLocaleMessage(atual.value)
      return msg[k]
    },
    getLang () {
      return atual
    },
    enUS () {
      return atual.value === 'en-us'
    },
    ptBR () {
      return atual.value === 'pt-br'
    },
    setaLang (lng: string) {
      Quasar.lang.set(lng)
      atual.value = lng
    }
  }
  if (init) {
    ret.setaLang(Quasar.lang.getLocale())
  }
  return ret
}
