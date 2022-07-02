import BodyHeader from "./BodyHeader";
import Card from "./Card";
import Navbar from "./Navbar";
import ProblemCodeMirror from "./ProblemCodeMirror";
import ProblemDetails from "./ProblemDetails";
import Tab from "./Tab";
import TabItems from "./TabItems";
import TableItems from "./TableItems";
import Table from "../containers/Table";
import AlgorithmsPage from "../pages/AlgorithmsPage";
import ProblemPage from "../pages/ProblemPage";
import Logout from "../components/Logout";
import withAuth from "./withAuth";

const authComponents = {
  BodyHeader,
  Card,
  Navbar,
  Tab,
  TabItems,
  Table,
  TableItems,
  Logout,
};
const protComponents = {
  AlgorithmsPage,
  ProblemPage,
  ProblemCodeMirror,
  ProblemDetails,
};

const authenticatedComponents = {};
const protectedComponents = {};

for (const [key, value] of Object.entries(authComponents)) {
  authenticatedComponents[`Authenticated${key}`] = withAuth(value);
}

for (const [key, value] of Object.entries(protComponents)) {
  protectedComponents[`Protected${key}`] = withAuth(value);
}

export const wrappedComponents = {
  ...authenticatedComponents,
  ...protectedComponents,
};
