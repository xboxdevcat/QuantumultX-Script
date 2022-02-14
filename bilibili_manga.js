let obj = JSON.parse($response.body)
delete obj.data.flash
delete obj.data.operate
delete obj.data.activity_tab
obj.data.teenager_frequency = 0
body=JSON.stringify(obj)
$done({body})
