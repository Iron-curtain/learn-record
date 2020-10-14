const cfw = {
    name: '陈方闻',
    company: '百度',
    sex: '男',
}

console.log(`${cfw.name}, 性别${cfw.sex}, 就职于${cfw.company}`)
const yds = {
    name: '叶弘丰',
    company: '滴滴',
    sex: '男'
}
console.log(`${yds.name}, 性别${yds.sex}, 就职于${yds.company}`)

// 功能重复了， 函数   功能的封装

function getUserInfo(user){
    if(!user){
        return
    }
    console.log(`${user.name}, 性别${user.sex}, 就职于${user.company}`)
}

getUserInfo(cfw)

getUserInfo({name: '汤镇达', company: '微软'})

