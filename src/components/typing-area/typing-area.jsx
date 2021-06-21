import React from 'react';

export function TypingAreaComponent() {
    return (
        <form action="#" className="bg-light">
            <div className="input-group">
                <input type="text" name="message" placeholder="Type a message" aria-describedby="button-addon2" className="form-control rounded-0 border-0 py-4 bg-light" />
                    <div className="input-group-append">
                        <button id="button-addon2" type="submit" name="send" className="btn btn-link"><i className="fas icon-envelope"></i></button>
                    </div>
            </div>
        </form>
    )
}