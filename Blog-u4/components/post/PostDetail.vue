<template>
  <div class="row">
    <div class="col-12 col-md-6 offset-md-3 mt-3">
      <div class="card text-center">
        <h3 class="card-header">{{singlePost.title}}</h3>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            {{singlePost.description}}
          </p>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["singlePost"],
};
</script>