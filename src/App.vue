<template>
  <v-app>
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      class="purple white--text"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>

    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>

    <v-footer fixed app class="purple white--text">
      <span>AdvanceOS v0.1</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Applications'
      },
      {
        icon: 'timelapse',
        title: 'Clock In/Out'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'AdvanceOS Employee Interface',
      user: null
    }
  },
  created () {
    this.user = this.$ls.get('loggedInUser', null);
    if (this.user) {
      this.title = `AdvanceOS Employee Interface: ${this.user.firstName} ${this.user.lastName}`;
    }
  },
  name: 'App'
}
</script>
