export const init = (): void => {
  wx.cloud.init({
    env: 'dev-po01n',
  });
};

let dbInstance;

export const getDB = () => {
  if (dbInstance) {
    return dbInstance;
  }

  return wx.cloud.database();
};
