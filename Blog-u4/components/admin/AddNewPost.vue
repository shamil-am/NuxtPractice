<template>
  <form class="bg bg-warning p-3 mt-3">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Post name</label>
      <input class="form-control" />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Header</label>
      <input class="form-control" />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Sub Header</label>
      <input class="form-control" />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Post text</label>
      <textarea class="form-control" />
    </div>
    <button type="submit" class="btn btn-light" @click.prevent="$router.go(-1)">
      Cancel
    </button>
    <button type="submit" class="btn btn-dark" @click.prevent="">Submit</button>
  </form>
</template>