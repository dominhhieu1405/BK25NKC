// Hello World
(() => {
  const KEY = "last_alert_time_ms";
  const SIX_HOURS = 6 * 60 * 60 * 1000;
  const YTB_URL = "https://www.youtube.com/watch?v=3ZLDORgDXO0&list=PLsA4zf5P02rG5B0QvIEYJbavBt9ARjBFr";

  function maybeConfirm() {
    const now = Date.now();
    const last = Number(localStorage.getItem(KEY) || 0);

    if (!last || now - last >= SIX_HOURS) {
      const ok = confirm(
        "Hi, ad mới lập 1 kênh ytb review phim, hi vọng mọi người cho xin 1 sub :D:\n\n" +
        "https://www.youtube.com/@MoonReviewVN"
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
