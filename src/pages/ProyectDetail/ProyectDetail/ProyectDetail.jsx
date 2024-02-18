import "./_proyectDetailDesktop.scss"
import "./_proyectDetailIpad.scss"
import "./_proyectDetailMobile.scss"

import { useContext } from "react";
import ReactTag from "../../../components/Tags/ReactTag/ReactTag";
import ExpressTag from "../../../components/Tags/ExpressTag/ExpressTag";
import NodeTag from "../../../components/Tags/NodeTag/NodeTag";
import SassTag from "../../../components/Tags/SassTag/SassTag";
import FramerMotionTag from '../../../components/Tags/FramerMotionTag/FramerMotionTag';
import SQLTag from '../../../components/Tags/SQLTag/SQLTag';
import SequelizeTag from '../../../components/Tags/SequelizeTag/SequelizeTag';
import StyledComponentsTag from '../../../components/Tags/StyledComponentsTag/StyledComponentsTag';
import JavascriptTag from "../../../components/Tags/JavascriptTag/JavascriptTag";
import HtmlTag from "../../../components/Tags/HtmlTag/HtmlTag";
import CssTag from "../../../components/Tags/CssTag/CssTag";
import { OpenNavbarContext } from "../../../context/OpenNavbarContext";
import NavbarPortfolio from "../../../components/NavbarPortfolio/NavbarPortfolio/NavbarPortfolio";
import OpenNavbar from "../../../components/OpenNavbar/OpenNavbar";


const tagComponents = {
  ReactTag,
  ExpressTag,
  NodeTag,
  SassTag,
  FramerMotionTag,
  SQLTag,
  SequelizeTag,
  StyledComponentsTag,
  JavascriptTag,
  HtmlTag,
  CssTag
};

export default function ProyectDetail() {

  const { isMenuOpen, handleExitNavbar } = useContext(OpenNavbarContext);

    return (
        <>
          <div className="contenedorGralProyectsDetail">
          {isMenuOpen ? <OpenNavbar /> : <span />}
          <NavbarPortfolio />

          </div>
        </>
    );

}
