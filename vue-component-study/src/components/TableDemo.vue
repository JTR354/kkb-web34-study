<template>
  <div>
    <k-table :data="tableData">
      <k-table-column prop="date" label="⽇期"></k-table-column>
      <k-table-column prop="name" label="姓名"></k-table-column>
      <k-table-column prop="address" label="地址"></k-table-column>
    </k-table>

    <!-- <current-user>
      <template v-slot:default="slotProps">
        {{ slotProps.user2.firstName }}
      </template>
    </current-user> -->
  </div>
</template>

<script>
import KTable from "./k-table";
import KTableColumn from "./k-table/k-table-column";
// import CurrentUser from "./current-user.vue";
export default {
  components: {
    KTable,
    KTableColumn,
    // CurrentUser,
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.table-demo {
  margin: 0;
}
</style>
