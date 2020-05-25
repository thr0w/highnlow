<template>
  <q-page class="column items-center justify-evenly">
    <q-card elevated class="column full-width q-pt-md q-ma-md">
      <q-card-section v-for="(p,i) in traduz('intro')" :key="i">
        <div class="text-body1">{{p}}</div>
      </q-card-section>
    </q-card>

    <q-card
      elevated
      class="column full-width q-pt-md q-ma-md"
      v-for="(section,i) in sections"
      :key="i"
    >
      <q-card-section>
        <p
          v-for="(txt,i) in traduz(section)"
          :key="i"
          :class="i===0?'text-h5 text-uppercase':'text-body1'"
        >{{txt}}</p>
      </q-card-section>
    </q-card>

    <q-card elevated class="column full-width q-pt-md q-ma-md">
      <q-card-section>
        <p class="text-h5">{{traduz('download')}}</p>
        <img
          src="~assets/folder-en.png"
          v-if="enUS()"
          height="100px"
          class="cursor-pointer"
          @click="baixar"
        />
        <img
          src="~assets/folder-pt.png"
          v-if="ptBR()"
          height="100px"
          class="cursor-pointer"
          @click="baixar"
        />
      </q-card-section>
    </q-card>

    <q-card elevated class="column full-width q-pt-md q-ma-md">
      <q-card-section class="row items-center justify-evenly">
        <div
          v-if="enUS()"
          class="row items-center justify-evenly cursor-pointer"
          key="fben"
          @click="abre('https://fb.me/highnlowgame')"
        >
          <img src="~assets/facebook.png" width="30px" class="q-pr-sm" />
          <span class="text-caption">fb.me/highnlowgame</span>
        </div>
        <div
          v-if="ptBR()"
          key="fbpt"
          class="row items-center justify-evenly cursor-pointer"
          @click="abre('https://fb.me/altoebaixo')"
        >
          <img src="~assets/facebook.png" width="30px" class="q-pr-sm" />
          <span class="text-caption">fb.me/altoebaixo</span>
        </div>
        <div
          v-if="enUS()"
          key="insten"
          class="row items-center justify-evenly cursor-pointer"
          @click="abre('https://instagram.com/highnlowgame')"
        >
          <img src="~assets/instagram.png" width="30px" class="q-pr-sm" />
          <span class="text-caption">instagram.com/highnlowgame</span>
        </div>
        <div
          v-if="ptBR()"
          key="instpt"
          class="row items-center justify-evenly cursor-pointer"
          @click="abre('https://instagram.com/altoebaixo')"
        >
          <img src="~assets/instagram.png" width="30px" class="q-pr-sm" />
          <span class="text-caption">instagram.com/altoebaixo</span>
        </div>
        <div
          class="row items-center justify-evenly cursor-pointer"
          @click="abre('https://github.com/thr0w/highnlow')"
        >
          <img src="~assets/github.png" width="30px" class="q-pr-sm" />
          <span class="text-caption">github.com/thr0w/highnlow</span>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">

import { langUtils } from 'components/lang'

export default {
  setup () {
    const l = langUtils()
    return {
      ...l,
      abre (link: string) {
        window.open(link, '_blank')
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      baixar (e: any) {
        window.open(e.target.src, '_blank')
      },
      sections: [
        'purpose',
        'howItWorks',
        'aboutGroups',
        'recommendations',
        'contribue'
      ]
    }
  }
}

</script>
