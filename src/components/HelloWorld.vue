<template>
  <div class="hello">
    <p><strong>Teams:</strong></p>
    <ul v-if="builder.teams">
      <li v-for="userTeam in builder.teams">{{userTeam.user.username}} - {{userTeam.layerDataPerfil.team.team}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      builder: {}
    }
  },
  created: function(){
    this.$geodirBuilderApi.builderTeams([this.builder, 'teams']);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
