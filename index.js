const express = require('express')
const app = express()
const port = process.env.PORT || 1408

app.use(express.static('static'))
app.set("view engine", "ejs")

const DOMAINS = {
  'localhost:1408': 'NguyenChanhDai.com',
  'tienphonggroup.com': 'TienPhongGroup.com',
  'kimcuonggroup.com': 'KimCuongGroup.com',
  'nangluonggio.com': 'NangLuongGio.com',
  'tiendidong.com': 'TienDiDong.com',
  'metabox.vn': 'MetaBox.vn',
  'use.com.vn': 'Use.com.vn',
}

const KEYWORDS = {
  'localhost:1408': 'NguyenChanhDai, Nguyen Chanh Dai, Dai Nguyen, Chanh Dai Nguyen',
  'tienphonggroup.com': 'tienphonggroup, tien phong group, tien phong, tienphong, tien phong group',
  'kimcuonggroup.com': 'kimcuonggroup, kim cuong group, kim cuong, kimcuong',
  'nangluonggio.com': 'nangluonggio, nang luong gio, nang luong, nangluong',
  'tiendidong.com': 'tiendidong, tien di dong, tien di dong, tiendidong',
  'metabox.vn': 'metabox.vn, metabox, meta box',
  'use.com.vn': 'use.com.vn, use',
}

app.get('/', (req, res) => {
  const host = req.get('host')
  const domain = DOMAINS[host]
  const keywords = KEYWORDS[host]

  console.log("host", host)

  res.render("index", {
    domain,
    keywords
  })
})

app.listen(port, () => {
  console.log(`Sale Domain app listening on port ${port}`)
})