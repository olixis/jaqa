/**
 * Object {status: "connected", authResponse: Object}
 * authResponse: Objectaccess
 * Token: "EAAYywVuGDqQBAMJ04vQx5ZAprJPiCHgQ6uPwqQ5Gn55R5aSGg4BsvO7K7FuTagK0SFq1zkuTItiZCSLoGRM6Pct0OW2D4zIItizMtRpsZBmAyVmJbGsz9rEtxhyTOYeGPP7Bjngw7ZChotsJGFNWWXGGbmnZC6u56ZCS8bR3jdZAAZDZD"
 * expiresIn: 5795
 * signedRequest: "UjosW5RC1_ZlWy17dExe59k7DIN_RUbSzohfbv_IK-Q.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImNvZGUiOiJBUUFJdXhUc3UtYVVRb3o3RXl4Z3phdkpETVpvM1JPelNXeEk5SHpMdDYtWUYxdi1PVmlsR2pSb3FHczB6MGQ2Rk5XVHdfRDBPYzFNLUpDUHNYSW53QW1VcGd1WmV1cXZqaGlBdnkwdWpoZmpCcmhCbEtCUS1SYWZ4R1g5bUJlR1lKTlc5QTdwSGxKTFRUUU9rQlZsNmFZMjUxMzJlM2dvRERLSE85X0RTVWJLWjR2MHpid0F0dTBrRE9McDg5SnRXV25iZThkcGxObEI1ZVRmZFFLYjV2OVJnSzRsSXQtVHo4Nm9Ec01YUFBOUURTWEtLcFEtd2NEeVFlYTV6TkNyN0xObXhJSmpRREo5U2ZVNWNQZFMxcHVianlKcHZkbThjUmFEcjk4amlTaERpa1BkRUx6VGZqdVgweVAzTkpuWWVZeDhJVVI0azFhWW40QWFjOGVBWHBmbyIsImlzc3VlZF9hdCI6MTQ4MzA0MzAwNSwidXNlcl9pZCI6IjEzMjMwNzM2NDEwNDkwOTYifQ"
 * userID: "1323073641049096"
 * Objectstatus: "connected"
 *
 * {name: "William Correa", id: "1323073641049096"}
 */
const Facebook = {
  /**
   * @var object
   */
  FB: window.FB,
  /**
   * @var boolean
   */
  loaded: false,
  /**
   *
   */
  init () {
    if (!this.loaded) {
      this.FB.init({
        appId: '1744655905853092',
        cookie: true,  // enable cookies to allow the server to access the session
        xfbml: true,  // parse social plugins on this page
        version: 'v2.8' // use graph api version 2.8
      });
      this.loaded = true;
    }
  },
  /**
   * @param response
   */
  statusChangeCallback (response) {
    if (response.status === 'connected') {
      this.getUser();
    }
    else {
      if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
      }
      else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
      }
    }
  },
  /**
   *
   */
  checkLoginState () {
    // noinspection JSUnresolvedFunction
    this.FB.getLoginStatus(function (response) {
      this.statusChangeCallback(response);
    });
  },
  /**
   *
   */
  getUser () {
    this.FB.api('/me', function (response) {
      console.log(response);
    });
  },
  /**
   *
   */
  requestAccess () {
    this.init();
    this.FB.login(function (response) {
      if (response.authResponse) {
        this.checkLoginState();
      }
    }, {
      scope: 'public_profile,email'
    });
  }
};

export default Facebook;
