import React from "react";
import { getGuilds, getUserDetails } from "../../utils/api";
import { Link } from 'react-router-dom'

export function MenuComponent({ 
    guilds
 }) {

    return  (
        <div>
            <h1>Hello</h1>
            {guilds.map((guild) => (
                <div>
                    <li>{guild.name}</li>
                    <Link to={`dashboard/${guild.id}`} >View Dashboard</Link>
                </div>
            ))}
        </div>
    )
}