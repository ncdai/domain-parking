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
  'maytinhviet.com': 'MayTinhViet.com',
  'vuanhadat.com': 'VuaNhaDat.com',
  'vuadidong.com': 'VuaDiDong.com',
  'kiettac.com': 'KietTac.com',
  'dacsac.com': 'DacSac.com',
  'duongsach.com': 'DuongSach.com',
  'san24h.com': 'San24h.com',
  'sieuungdung.com': 'SieuUngDung.com',
  'vuongquochoa.com': 'VuongQuocHoa.com',
  'vuongquoc.net': 'VuongQuoc.net',
}

const KEYWORDS = {
  'localhost:1408': 'NguyenChanhDai, Nguyen Chanh Dai, Dai Nguyen, Chanh Dai Nguyen',
  'tienphonggroup.com': 'tienphonggroup, tien phong group, tien phong, tienphong, tien phong group',
  'kimcuonggroup.com': 'kimcuonggroup, kim cuong group, kim cuong, kimcuong',
  'nangluonggio.com': 'nangluonggio, nang luong gio, nang luong, nangluong',
  'tiendidong.com': 'tiendidong, tien di dong, tien di dong, tiendidong',
  'metabox.vn': 'metabox.vn, metabox, meta box',
  'use.com.vn': 'use.com.vn, use',
  'maytinhviet.com': 'maytinhviet.com, may tinh viet, may tinh, maytinh',
  'vuanhadat.com': 'vuanhadat.com, vua nha dat, vuanhadat',
  'vuadidong.com': 'vuadidong.com, vua di dong, vuadidong',
  'kiettac.com': 'kiettac.com, kiet tac, kiettac',
  'dacsac.com': 'dacsac.com, dac sac, dacsac',
  'duongsach.com': 'duongsach.com, duong sach, duongsach',
  'san24h.com': 'san24h.com, san 24h, san24h',
  'sieuungdung.com': 'sieuungdung.com, sieu ung dung, sieuungdung',
  'vuongquochoa.com': 'vuongquochoa.com, vuong quoc hoa, vuongquochoa',
  'vuongquoc.net': 'vuongquoc.net, vuong quoc, vuongquoc',
}

app.get('/', (req, res) => {
  const host = req.get('host')
  const domain = DOMAINS[host]
  const keywords = KEYWORDS[host]

  res.render("index", {
    domain,
    keywords
  })
})

app.listen(port, () => {
  console.log(`Sale Domain app listening on port ${port}`)
})