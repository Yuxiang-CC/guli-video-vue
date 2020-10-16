<template>
  <div class="app-container">
      <el-input style="margin-bottom: 10px;"
        placeholder="输入关键字进行过滤"
        v-model="filterText">
      </el-input>
      
      <el-tree 
        class="filter-tree"
        :data="subjectList" 
        :props="defaultProps"
        default-expand-all
        :filter-node-method="filterNode" 
        ref="tree"
        ></el-tree>
  </div>
</template>

<script>
import subjectApi from '@/api/subject'
export default {
  data() {
    return {
      filterText: '', // 过滤文本
      subjectList: [], // 数据列表
      defaultProps: {
        children: 'children',
        label: 'title'
      }
    }
  },
  watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
  },
  methods: {
    fetchNodeList() {
      subjectApi.getNestedTreeList().then(response => {
        this.subjectList = response.data.items
      })
    },
    filterNode(value, data) {
        if (!value) return true;
        console.log(data)
        return data.title.indexOf(value) !== -1;
    }
  },
  created() {
    this.fetchNodeList()
  }
}
</script>

<style>

</style>