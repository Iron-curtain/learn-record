<template>
  <div class="note-detail">
    <div class="note-img">
      <img :src="noteContent.head_img" alt="" />
    </div>
    <div class="note-content">
      <div class="tab">
        <span class="comm note-type">{{noteContent.note_type}}</span>
        <span class="comm nickname">{{noteContent.nickname}}</span>
      </div>
      <p class="title">{{noteContent.title}}</p>
      <div class="content" v-html="noteContent.note_content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noteContent: {}
    }
  },
  created() {
    this.initNoteDetail()
  },
  methods: {
    initNoteDetail() {
      let _note_id = this.$route.query.id
      this.$http({
        method: 'post',
        url: this.$util.baseUrl + 'users/getNoteDetailByType',
        data: {
          note_id: _note_id
        }
      }).then(res => {
        console.log(res);
        if(res.data.code === '80000') {
          this.noteContent = res.data.data[0]
          console.log(this.noteContent);
        }
      })
    }
  }
};
</script>

<style lang="less" scoped>
.note-detail {
  width: 100%;
  .note-img {
    width: 100%;
    height: 5.146667rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .note-content {
    margin-top: 0.666667rem;
    padding: 0 0.666667rem;
    .tab {
      display: flex;
      justify-content: space-between;
      .comm {
        color: rgba(16, 16, 16, 0.7);
        font-size: 0.48rem;
        text-align: center;
        font-family: Arial;
        position: relative;
        padding-bottom: 4px;
        border-bottom: 3px solid #e51c23;
      }
      .nickname {
        &::before {
          content: "By";
          position: absolute;
          left: -25px;
          opacity: 0.5;
          color: rgba(16, 16, 16, 1);
          font-size: 0.426667rem;
          font-family: Arial;
        }
      }
    }
    .title {
      margin: 0.533333rem 0;
      line-height: 1.3;
      color: rgba(16, 16, 16, 1);
      font-size: 0.8rem;
      text-align: left;
      font-family: Arial;
    }
    .content {
      padding-bottom: 20px;
      line-height: 1.5;
      opacity: 0.6;
      color: rgba(16, 16, 16, 1);
      font-size: 0.373333rem;
      text-align: left;
      font-family: Arial;
    }
  }
}
</style>