// Hello World
(() => {
  const KEY = "last_alert_time_ms";
  const SIX_HOURS = 6 * 60 * 60 * 1000;
  const YTB_URL = "https://hsa.bk25nkc.com/";

  function maybeConfirm() {
    const now = Date.now();
    const last = Number(localStorage.getItem(KEY) || 0);

    if (!last || now - last >= SIX_HOURS) {
      const ok = confirm(
        "Xin chào các bạn, mình là admin của trang. Hiện tại, mình đã lập một nhóm Zalo để mọi người có thể trao đổi kiến thức và hỗ trợ nhau trong quá trình ôn tập.\nMong các bạn tham gia nhóm để cùng học tập và tiến bộ nhé!\n" +
        "https://hsa.bk25nkc.com/"
      );

      if (ok) {
        // mở tab mới – không bị chặn vì có tương tác người dùng
        window.open(YTB_URL, "_blank");
      }

      // vẫn lưu thời gian dù OK hay Cancel (để khỏi spam)
      localStorage.setItem(KEY, String(now));
    }
  }

  // chạy khi load
  maybeConfirm();

  // nếu mở tab lâu, đủ 6 tiếng thì bật lại
  setInterval(maybeConfirm, 60 * 1000);
})();
