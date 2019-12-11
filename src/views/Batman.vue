<template>
  <div class="batman">
    <h1>SUMMARY</h1>
    <p>
      {{ id }}
    </p>
  </div>
</template>

<script>
export default {
  name: "batman",
  props: ["id"]
};
</script>
