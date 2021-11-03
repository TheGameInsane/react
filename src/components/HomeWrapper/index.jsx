import React from "react";
import { ExNavbarComponent, NavbarComponent } from "..";
import home from "../../components/HomeWrapper/Home.css"

export function HomeComponent({ 
    user,
    logged
 }) {

    return (
        <div>
          {logged ? (
            <NavbarComponent user={user}/>
          ) : (
            <ExNavbarComponent />
          )}
        </div>
      );
}