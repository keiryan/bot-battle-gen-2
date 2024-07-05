export default {
  install(app) {
    app.config.globalProperties.$settings = {
      lightMode: true,
      reduceMotion: false,
      autoCloseMessageBar: true,
      username: 'John Doe',
      chatGPTToken: '',
    };
  },
};
