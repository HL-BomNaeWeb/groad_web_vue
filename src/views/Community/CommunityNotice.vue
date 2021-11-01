<template>
    <div>
        <h1>{{item.name}}</h1>
        <section>
            <h2>{{item.title}}</h2>
            <h3>{{item.content}}</h3>
        </section>
    </div>
</template>
<script>
export default {
    created: function(){
        var id=this.$route.params.id;
        this.$http.get(`/api/notice/${id}`)
            .then((response)=>{
                this.item=response.data[0]
            })
    },
    data() {
        return {
            item:{}
        }
    },
}
</script>