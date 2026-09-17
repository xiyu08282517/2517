// 达人查询站 · 云端配置
// 这个文件是唯一需要改的地方。改完重新上传即可。
//
// KEY：CloudBase 控制台 -> 环境 -> 环境配置 -> API Key 里的「Publishable Key」
//      这一串是给浏览器用的公开钥匙，暴露在前端是正常的，不用担心。
//      切勿把 Service Role Key（管理员钥匙）填在这里！
//
// URL：PG 模式（PostgreSQL）的 RDB RESTful 接口地址
//      格式：https://{环境ID}.api.tcloudbasegateway.com/v1/rdb/rest
//      注意域名是 api.tcloudbasegateway.com，不是 tcb-api.tencentcloudapi.com
window.__CB_CONFIG__ = {
  URL:   'https://daren-d4ggnr09qeea4413a.api.tcloudbasegateway.com/v1/rdb/rest',
  TABLE: 'creators',
  KEY:   'eyJhbGciOiJSUzI1NiIsImtpZCI6IjRmMDQxOWMxLTEyNDAtNGExYy04NzVlLTEwODA1MmZlNzQyMCJ9.eyJpc3MiOiJodHRwczovL2RhcmVuLWQ0Z2ducjA5cWVlYTQ0MTNhLmFwLXNoYW5naGFpLnRjYi1hcGkudGVuY2VudGNsb3VkYXBpLmNvbSIsInN1YiI6ImFub24iLCJhdWQiOiJkYXJlbi1kNGdnbnIwOXFlZWE0NDEzYSIsImV4cCI6NDA5MzMxNjUzNSwiaWF0IjoxNzg5NjMzMzM1LCJub25jZSI6Inhaam9zd3ZpU2JLRjQzZno1dnFRdHciLCJhdF9oYXNoIjoieFpqb3N3dmlTYktGNDNmejV2cVF0dyIsIm5hbWUiOiJBbm9ueW1vdXMiLCJzY29wZSI6ImFub255bW91cyIsInByb2plY3RfaWQiOiJkYXJlbi1kNGdnbnIwOXFlZWE0NDEzYSIsIm1ldGEiOnsicGxhdGZvcm0iOiJQdWJsaXNoYWJsZUtleSJ9LCJyb2xlIjoiYW5vbiIsImlzX2Fub255bW91cyI6dHJ1ZSwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiYW5vbnltb3VzIiwicHJvdmlkZXJzIjpbImFub255bW91cyJdfSwidXNlcl9tZXRhZGF0YSI6eyJuYW1lIjoiQW5vbnltb3VzIn0sInVzZXJfdHlwZSI6IiIsImNsaWVudF90eXBlIjoiY2xpZW50X3VzZXIiLCJpc19zeXN0ZW1fYWRtaW4iOmZhbHNlfQ.lwDGnnTGICmJNorqLufJ0XWfFWlN5LS5SVPQEQHg_pHF3jZopAbiBIkT_szpDA2o14bkj6lNAjLWEdYzU52HPf29e8h1kJElLxzZQuUopbyZMJjf01b8H5QTWdXhKTo7fR3AL-DCFWIlngh9Gl2xZrYdfNWTVTqrCsJJ7FuXsHdUfm6eA4GtAVb5njbQwFL09oXzZBjlxZF-4lD8m9psDel9ViKuBe_4MI-6YLpTbKODsxpJ2ZDMf8r6mZmg5nlESsXpyjoDPjLifLlYevcSFTt3v8_xc2c_bVibV3zZg6jL0r6MceFbECJZDzREL86d3DL6esty-z6GreqYxm0Cyw'
};
