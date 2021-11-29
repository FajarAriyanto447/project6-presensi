<template>
  <div class="col-md-6">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Absensi Dosen</h3><hr>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-hover table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Tanggal</th>
                <th>Materi Pelajaran</th>
                <th>Upload Foto</th>
              </tr>
            </thead>
            <tbody>
              <!-- MELAKUKAN LOOPING DARI COMPUTED PROPERTY agenda() -->
              <tr v-for="(row, index) in Dosen" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ row.hari }}</td>
                <td>{{ row.kegiatan }}</td>
                <td>{{ row.waktu }}</td>
                <td></td>
              </tr>
            </tbody>
            <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dosen",
  computed: {
    // MEMBUAT COMPUTED agenda()
    agenda() {
      // YANG BERISI DATA DARI state listAgenda
      return this.$store.state.Dosen;
    },
  },
};
</script>