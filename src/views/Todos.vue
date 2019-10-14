<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" md="10">
        <todo-table />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TodoTable from '@/components/Todos/TodoTable'

export default {
  name: 'Todos',

  components: {
    TodoTable
  }
}
</script>
