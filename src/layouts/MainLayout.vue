<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal class="bg-primary text-white q-pa-none q-ma-none">
      <q-toolbar class="row full-width items-start content-start q-pa-none q-ma-none">
        <q-img src="~assets/h-en.png" v-if="enUS()" width="100%" transition='fade' />
        <q-img src="~assets/h-pt.png" v-if="ptBR()" width="100%" transition='fade'/>
      </q-toolbar>
      <div style="position: absolute; right: 0px">
        <q-btn :flat="!ptBR()" :round="ptBR()" @click="setaLang('pt-br')">>
          <img src="~assets/flag-br.jpg" width="25px" />
          <q-tooltip>Mostrar em português</q-tooltip>
        </q-btn>

        <q-btn :flat="!enUS()" :round="enUS()" @click="setaLang('en-us')">
          <img src="~assets/flag-us.png" width="25px" />
        <q-tooltip>Show in English</q-tooltip>
        </q-btn>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { langUtils } from 'components/lang'

export default {
  setup () {
    const l = langUtils(true)
    return l
  }
}

</script>
