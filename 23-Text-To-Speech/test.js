class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
}

const fetchingUserFromInternet = (isOffline) => {
  return new Promise((resolved, rejected) => {
    setTimeout(() => {
      if (isOffline) {
        rejected(new NetworkError("Gagal mendapatkan data dari internet"));
      }
      resolved({ name: "John", age: 18 });
    }, 500);
  });
};

const testData = async () => {
  try {
    const user = await fetchingUserFromInternet(false);
    console.log(user.name);
  } catch (error) {
    console.log(error);
  }
};

testData();
