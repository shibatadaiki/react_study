// このオプションのコードは、サービスワーカーを登録するために使用されます。
// register（）はデフォルトでは呼び出されません。

// これにより、本番環境での次回の訪問時にアプリの読み込みが速くなり、
// オフライン機能しかし、それは開発者（そしてユーザー）も意味します。
// 最後にページにアクセスしたときに、デプロイされた更新のみが表示されます。
// そのページで開かれている既存のタブは、以前にキャッシュされてから閉じられています
// リソースはバックグラウンドで更新されます。

// このモデルの利点とその使用方法についての説明
// オプトイン、https://bit.ly/CRA-PWAを読む

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [:: 1]はIPv6ローカルホストアドレスです。
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8はIPv4のローカルホストと見なされます。
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // URLコンストラクタは、SWをサポートするすべてのブラウザで利用可能です。
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // PUBLIC_URLの起源が異なる場合、サービス担当者は機能しません
      //私たちのページが提供されているものから。 CDNを使用して
      //資産を扱う。 https://github.com/facebook/create-react-app/issues/2374を参照してください。
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // これはlocalhostで動作しています。サービスワーカーがまだ存在するかどうかを確認しましょう。
        checkValidServiceWorker(swUrl, config);

        // localhostにログを追加し、開発者に
        //サービスワーカー/ PWAの文書
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This web app is being served cache-first by a service ' +
              'worker. To learn more, visit https://bit.ly/CRA-PWA'
          );
        });
      } else {
        // localhostではありません。サービス担当者を登録するだけ
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              //この時点で、更新されたプレキャッシュコンテンツは取得されています
              //しかし前のサービスワーカーはまだ年上のサービスを提供します
              //すべてのクライアントタブが閉じられるまで内容
              console.log(
                'New content is available and will be used when all ' +
                  'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
              );

              // コールバックを実行する
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              //この時点で、すべてのことが予言されています。
              //を表示するのに最適な時期です
              //「コンテンツはオフラインで使用するためにキャッシュされます。」メッセージ。
              console.log('コンテンツはオフラインで使用するためにキャッシュされます。');

              // コールバックを実行する
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // サービス担当者が見つかるかどうかを確認してください。ページをリロードできない場合
  fetch(swUrl)
    .then(response => {
      // Service Workerが存在していることを確認し、実際にJSファイルを入手していることを確認してください。
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // サービス担当者は見つかりませんでした。おそらく別のアプリです。ページを再読み込みしてください。
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // サービス担当者が見つかりました。通常どおりに進みます。
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
