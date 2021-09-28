export default {
  name: "daybook",
  component: () =>
    import(
      /* webpackChunkName: "dayBook" */ "@/modules/daybook/layouts/DayBookLayout.vue"
    ),
  children: [
    {
      path: "",
      name: "no-entry",
      component: () =>
        import(
          /* webpackChunkName: "DayBook-No-Entry" */ "../views/NoEntrySelected.vue"
        ),
    },
    {
      path: ":id",
      name: "entry",
      component: () =>
        import(
          /* webpackChunkName: "DayBook-Entry" */ "../views/EntryView.vue"
        ),
    },
  ],
};
