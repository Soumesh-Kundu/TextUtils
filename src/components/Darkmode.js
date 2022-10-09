import React from 'react'

export default function Darkmode(props) {
    return (

        <div>
            <div className={`form-check form-switch text-${(props.mode === "light") ? "dark" : "light"}`}>
                <div>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        onClick={props.toggleMode}
                    />
                    <label className="form-check-label container-fluid" htmlFor="flexSwitchCheckDefault">
                        Enable {(props.mode === "light") ? "dark" : "light"} Mode
                    </label>
                </div>
            </div>
        </div>
    )
}
