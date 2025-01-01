import { Outlet } from "react-router-dom";
import {Nevigate} from "../componnets/Nevigate"
import { ReactNode } from "react";
type LayoutProps = {
    children: ReactNode;
  }
export const Layout = ({ children }: LayoutProps)=>{
    return (
        <div>
            <Nevigate />
            <main>
            { children }
            </main>
        </div>
    )
}