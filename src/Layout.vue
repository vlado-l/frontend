<template>
  <v-app>
    <v-app-bar app dark color="indigo">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Todos</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <v-list dense>
        <v-list-item v-for="(route, index) in routes" :key="index" :to="{ name: route.name }" exact>
          <v-list-item-action>
            <v-icon>{{ route.meta.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ route.meta.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-content>

    <v-footer app absolute class="font-weight-medium">
      <v-col cols="12" class="text-center">
        &copy;{{ new Date().getFullYear() }} — <strong>IT Learning</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import filter from 'lodash/filter'
import routes from '@/plugins/router/routes'

export default {
  name: 'Layout',

  data () {
    return {
      drawer: null
    }
  },

  computed: {
    routes () {
      return filter(routes, { drawInMenu: true })
    }
  }
}
</script>

<style>
html {
  overflow-y: auto;
}
</style>
