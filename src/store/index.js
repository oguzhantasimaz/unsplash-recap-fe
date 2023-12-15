import create from "zustand";

const store = create((set, get) => ({
  url: "https://urxbdkupvxmm4uroj7ku37ygnq0qqkdf.lambda-url.us-east-1.on.aws/",

  recap: null,
  setRecap: (recap) => set(() => ({ recap })),
  username: "",
  setUsername: (username) => set(() => ({ username })),
  loading: false,
  setLoading: (state) => set(() => ({ loading: state })),

  fetchData: async () => {
    const { setLoading, setRecap, url, username } = get();

    if (!username) return;

    try {
      setLoading(true);

      const res = await fetch(url);
      const data = await res.json();

      if (data?.message) {
        alert(data?.message);
        setLoading(false);
        return;
      }

      setRecap(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      alert("Something went wrong. Please try again later.");
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setLoading(false);
    }
  },
}));

export default store;
