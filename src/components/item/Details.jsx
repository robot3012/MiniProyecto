import React from "react"
import { author, summary, channel, lastUpdate } from "../../api/ConfigNavbar"

export default function Details(props) {

    return (
        <details>
            <summary >{summary}</summary>
            <p >
                {author(props.author)}
            </p>
            <p >
                {channel(props.channel)}
            </p>
            <p >
                {lastUpdate(props.date)}
            </p>
        </details>
    );
}