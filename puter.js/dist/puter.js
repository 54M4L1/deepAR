(() => {
    var e = {
        330: e => {
            class t extends HTMLElement {
                constructor(e, t) {
                    super(),
                        this.attachShadow({
                            mode: "open"
                        }),
                        this.reject = t,
                        this.resolve = e,
                        this.shadowRoot.innerHTML = `
    <style>
        dialog {
            background:rgb(26 26 26);
            border: none;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            outline: none;
            padding: 20px; 
            border-radius: 8px; 
        }
        .puter-dialog-content {
            padding: 20px;
            color: #e0e0e0;
            position: relative;
        }
        dialog * {
            max-width: 500px;
            font-family: "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif;
        }
        dialog p.about {
            text-align: center;
            font-size: 16px;
            padding: 10px 0;
            color: #d1d1d1;
        }
        dialog .buttons {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            margin-top: 20px;
            text-align: center;
            margin-bottom: 20px;
        }
        dialog .close-btn {
            position: absolute;
            right: 15px;
            top: 10px;
            font-size: 17px;
            color: #d1d1d1;
            cursor: pointer;
        }
        dialog .close-btn:hover {
            color: #ffffff;
        }
        dialog .button {
                color: #ffffff;
    background-color: #333333;
    border: 1px solid #555;
    font-size: 14px;
    text-decoration: none;
    text-align: center;
    line-height: 40px;
    text-box: auto;
    height: 35px;
    padding: 0 30px;
    margin: 0 5px;
    display: inline-block;
    cursor: pointer;
    border-radius: 4px;
    outline: none;
        }
        dialog .button:hover {
            background-color: #444;
        }
        dialog .button-primary {
            border-color: #088ef0;
            background-color: #088ef0;
            color: white;
        }
        dialog .button-primary:hover {
            background-color: #2798eb;
        }
        dialog .button-auth {
            margin-bottom: 10px;
        }
        dialog a, dialog a:visited {
            color: rgb(0 69 238);
            text-decoration: none;
        }
        dialog a:hover {
            text-decoration: underline;
        }
        @media (max-width:480px) {
            dialog .buttons {
                flex-direction: column-reverse;
            }
            dialog .button-auth {
                width: 100% !important;
                margin: 0 !important;
                margin-bottom: 10px !important;
            }
        }
    </style>
    <dialog>
        <div class="puter-dialog-content">
            <span class="close-btn">&#x2715</span>
<a style="display: block; padding-right: 5px; width: 100px; height: 70px; filter: drop-shadow(0px 0px 3px cyan); margin: 0 auto; border-radius: 4px; transform: scale(4);">
    <img src="https://i.imgur.com/FBbU5Z1.png" alt="Puter Logo" style="width: 100%; height: 100%; border-radius: 4px;" />
</a>
            </a>
            <p class="about">This website uses Sinker to bring you safe, secure, and private AI features.</p>
            <div class="buttons">
                <button class="button button-auth" id="launch-auth-popup-cancel">Cancel</button>
                <button class="button button-primary button-auth" id="launch-auth-popup">Continue</button>
            </div>
            <p style="text-align: center; margin-top: -15px; font-size: 14px;">Powered by <a href="https://docs.puter.com/" target="_blank">Sinker.js</a></p>
            <p class="launch-auth-popup-footnote">By clicking 'Continue' you agree to DeepSinker's <a href="https://puter.com/terms" target="_blank">Terms of Service</a> and <a href="https://puter.com/privacy" target="_blank">Privacy Policy</a>.</p>
        </div>
    </dialog>
`;                        this.messageListener = async e => {
                            "puter.token" === e.data.msg && (this.close(),
                                puter.setAuthToken(e.data.token),
                                puter.setAppID(e.data.app_uid),
                                window.removeEventListener("message", this.messageListener),
                                puter.puterAuthState.authGranted = !0,
                                this.resolve(),
                                puter.onAuth && "function" == typeof puter.onAuth && puter.getUser().then((e => {
                                    puter.onAuth(e)
                                }
                                )),
                                puter.puterAuthState.isPromptOpen = !1,
                                puter.puterAuthState.resolver && (puter.puterAuthState.authGranted ? puter.puterAuthState.resolver.resolve() : puter.puterAuthState.resolver.reject(),
                                    puter.puterAuthState.resolver = null))
                        }
                }
                cancelListener = () => {
                    this.close(),
                        window.removeEventListener("message", this.messageListener),
                        puter.puterAuthState.authGranted = !1,
                        puter.puterAuthState.isPromptOpen = !1,
                        this.reject(new Error("User cancelled the authentication")),
                        puter.puterAuthState.resolver && (puter.puterAuthState.resolver.reject(new Error("User cancelled the authentication")),
                            puter.puterAuthState.resolver = null)
                }
                    ;
                connectedCallback() {
                    this.shadowRoot.querySelector("#launch-auth-popup").addEventListener("click", (() => {
                        var e = screen.width / 2 - 300
                            , t = screen.height / 2 - 200;
                        window.open(puter.defaultGUIOrigin + "/?embedded_in_popup=true&request_auth=true", "Puter", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=600, height=400, top=" + t + ", left=" + e)
                    }
                    )),
                        window.addEventListener("message", this.messageListener),
                        this.shadowRoot.querySelector("#launch-auth-popup-cancel").addEventListener("click", this.cancelListener),
                        this.shadowRoot.querySelector(".close-btn").addEventListener("click", this.cancelListener)
                }
                open() {
                    this.shadowRoot.querySelector("dialog").showModal()
                }
                close() {
                    this.shadowRoot.querySelector("dialog").close()
                }
            }
            customElements.define("puter-dialog", t),
                e.exports = t
        }
    }
        , t = {};
    function n(s) {
        var i = t[s];
        if (void 0 !== i)
            return i.exports;
        var r = t[s] = {
            exports: {}
        };
        return e[s](r, r.exports, n),
            r.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }),
            t
    }
        ,
        n.d = (e, t) => {
            for (var s in t)
                n.o(t, s) && !n.o(e, s) && Object.defineProperty(e, s, {
                    enumerable: !0,
                    get: t[s]
                })
        }
        ,
        n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        (() => {
            "use strict";
            async function e(e) {
                if ("blob" === e.responseType) {
                    const t = e.getResponseHeader("content-type");
                    if (t.startsWith("application/json")) {
                        const t = await e.response.text();
                        try {
                            return JSON.parse(t)
                        } catch (e) {
                            return t
                        }
                    } else if (t.startsWith("application/octet-stream"))
                        return e.response;
                    return {
                        success: !0,
                        result: e.response
                    }
                }
                const t = e.responseText;
                try {
                    return JSON.parse(t)
                } catch (e) {
                    return t
                }
            }
            function t(e, t, n, s = "post", i = "application/json;charset=UTF-8", r = void 0) {
                const o = new XMLHttpRequest;
                return o.open(s, t + e, !0),
                    o.setRequestHeader("Authorization", "Bearer " + n),
                    o.setRequestHeader("Content-Type", i),
                    o.responseType = r,
                    o
            }
            function s(e, t, n) {
                return e && "function" == typeof e && e(n),
                    t(n)
            }
            function i(t, n, i, r, o) {
                t.addEventListener("load", (function (t) {
                    return async function (t, n, s, i, r) {
                        const o = await e(r);
                        return 401 === r.status ? (n && "function" == typeof n && n({
                            status: 401,
                            message: "Unauthorized"
                        }),
                            i({
                                status: 401,
                                message: "Unauthorized"
                            })) : 200 !== r.status ? (n && "function" == typeof n && n(o),
                                i(o)) : (!1 === o.success && "permission_denied" === o.error?.code && (await puter.ui.requestPermission({
                                    permission: "driver:puter-image-generation:generate"
                                })).granted,
                                    t && "function" == typeof t && t(o),
                                    s(o))
                    }(n, i, r, o, this)
                }
                )),
                    t.addEventListener("error", (function (e) {
                        return s(i, o, this)
                    }
                    ))
            }
            const r = () => { }
                ;
            class o {
                static callback(e) {
                    return e && "function" == typeof e ? e : void 0
                }
            }
            function a(e, t, n, s = {}) {
                return async function (...i) {
                    let r = {}
                        , o = {};
                    return 1 !== i.length || "object" != typeof i[0] || Array.isArray(i[0]) ? (e.forEach(((e, t) => {
                        r[e] = i[t]
                    }
                    )),
                        o = {
                            success: i[e.length],
                            error: i[e.length + 1]
                        }) : (r = {
                            ...i[0]
                        },
                            o = {
                                success: r.success,
                                error: r.error
                            },
                            delete r.success,
                            delete r.error),
                        s.preprocess && "function" == typeof s.preprocess && (r = s.preprocess(r)),
                        await async function (e, t, n, s, i) {
                            const r = new u;
                            return c(e, r.resolve.bind(r), r.reject.bind(r), t, n, s, void 0, void 0, i),
                                await r
                        }(o, t, n, r, s)
                }
            }
            async function c(n = {}, i, a, u, h, p, l, d = "application/json;charset=UTF-8", f = {}) {
                if (!puter.authToken && "web" === puter.env)
                    try {
                        await puter.ui.authenticateWithPuter()
                    } catch (e) {
                        return a({
                            error: {
                                code: "auth_canceled",
                                message: "Authentication canceled"
                            }
                        })
                    }
                const g = o.callback(n.success) ?? r
                    , m = o.callback(n.error) ?? r
                    , b = t("/drivers/call", puter.APIOrigin, puter.authToken, "POST", d);
                f.responseType && (b.responseType = f.responseType),
                    b.addEventListener("load", (async function (t) {
                        const s = await e(t.target);
                        if (401 === t.status || "token_auth_failed" === s?.code) {
                            if ("token_auth_failed" === s?.code && "web" === puter.env)
                                try {
                                    puter.resetAuthToken(),
                                        await puter.ui.authenticateWithPuter()
                                } catch (e) {
                                    return a({
                                        error: {
                                            code: "auth_canceled",
                                            message: "Authentication canceled"
                                        }
                                    })
                                }
                            return m && "function" == typeof m && m({
                                status: 401,
                                message: "Unauthorized"
                            }),
                                a({
                                    status: 401,
                                    message: "Unauthorized"
                                })
                        }
                        if (t.status && 200 !== t.status)
                            return m(s),
                                a(s);
                        {
                            if (!1 === s.success && "permission_denied" === s.error?.code)
                                return (await puter.ui.requestPermission({
                                    permission: "driver:" + u + ":" + h
                                })).granted ? c(n, i, a, u, h, p, l, d, f) : (m(s),
                                    a(s));
                            if (!1 === s.success)
                                return m(s),
                                    a(s);
                            let e = void 0 !== s.result ? s.result : s;
                            return f.transform && (e = await f.transform(e)),
                                i.success && g(e),
                                i(e)
                        }
                    }
                    )),
                    b.addEventListener("error", (function (e) {
                        return s(m, a, this)
                    }
                    )),
                    b.send(JSON.stringify({
                        interface: u,
                        test_mode: f?.test_mode,
                        method: h,
                        args: p
                    }))
            }
            class u {
                static STATUS_PENDING = {};
                static STATUS_RUNNING = {};
                static STATUS_DONE = {};
                constructor() {
                    this.status_ = this.constructor.STATUS_PENDING,
                        this.donePromise = new Promise(((e, t) => {
                            this.doneResolve = e,
                                this.doneReject = t
                        }
                        ))
                }
                get status() {
                    return this.status_
                }
                set status(e) {
                    this.status_ = e,
                        e === this.constructor.STATUS_DONE && this.doneResolve()
                }
                resolve(e) {
                    this.status_ = this.constructor.STATUS_DONE,
                        this.doneResolve(e)
                }
                awaitDone() {
                    return this.donePromise
                }
                then(e, t) {
                    return this.donePromise.then(e, t)
                }
                reject(e) {
                    this.status_ = this.constructor.STATUS_DONE,
                        this.doneReject(e)
                }
                onComplete(e) {
                    return this.then(e)
                }
            }
            async function h(e) {
                const t = new u
                    , n = new FileReader;
                return n.onloadend = () => t.resolve(n.result),
                    n.readAsDataURL(e),
                    await t
            }
            function p(e) {
                return new Promise(((t, n) => {
                    const s = new FileReader;
                    s.onload = function (e) {
                        t(e.target.result)
                    }
                        ,
                        s.onerror = function (e) {
                            n(e)
                        }
                        ,
                        s.readAsDataURL(e)
                }
                ))
            }
            const l = class {
                constructor(e, t, n) {
                    this.authToken = e,
                        this.APIOrigin = t,
                        this.appID = n
                }
                setAuthToken(e) {
                    this.authToken = e
                }
                setAPIOrigin(e) {
                    this.APIOrigin = e
                }
                user = function (...e) {
                    let n;
                    return n = "object" == typeof e[0] && null !== e[0] ? e[0] : {
                        success: e[0],
                        error: e[1]
                    },
                        new Promise(((e, s) => {
                            const r = t("/whoami", this.APIOrigin, this.authToken, "get");
                            i(r, n.success, n.error, e, s),
                                r.send()
                        }
                        ))
                }
                    ;
                version = function (...e) {
                    let n;
                    return n = "object" == typeof e[0] && null !== e[0] ? e[0] : {
                        success: e[0],
                        error: e[1]
                    },
                        new Promise(((e, s) => {
                            const r = t("/version", this.APIOrigin, this.authToken, "get");
                            i(r, n.success, n.error, e, s),
                                r.send()
                        }
                        ))
                }
            }
                , d = Object.create(null);
            d.open = "0",
                d.close = "1",
                d.ping = "2",
                d.pong = "3",
                d.message = "4",
                d.upgrade = "5",
                d.noop = "6";
            const f = Object.create(null);
            Object.keys(d).forEach((e => {
                f[d[e]] = e
            }
            ));
            const g = {
                type: "error",
                data: "parser error"
            }
                , m = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob)
                , b = "function" == typeof ArrayBuffer
                , y = e => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer
                , w = ({ type: e, data: t }, n, s) => m && t instanceof Blob ? n ? s(t) : A(t, s) : b && (t instanceof ArrayBuffer || y(t)) ? n ? s(t) : A(new Blob([t]), s) : s(d[e] + (t || ""))
                , A = (e, t) => {
                    const n = new FileReader;
                    return n.onload = function () {
                        const e = n.result.split(",")[1];
                        t("b" + (e || ""))
                    }
                        ,
                        n.readAsDataURL(e)
                }
                ;
            function v(e) {
                return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
            }
            let k;
            const I = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
            for (let e = 0; e < 64; e++)
                I["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(e)] = e;
            const x = "function" == typeof ArrayBuffer
                , E = (e, t) => {
                    if ("string" != typeof e)
                        return {
                            type: "message",
                            data: C(e, t)
                        };
                    const n = e.charAt(0);
                    return "b" === n ? {
                        type: "message",
                        data: P(e.substring(1), t)
                    } : f[n] ? e.length > 1 ? {
                        type: f[n],
                        data: e.substring(1)
                    } : {
                        type: f[n]
                    } : g
                }
                , P = (e, t) => {
                    if (x) {
                        const n = (e => {
                            let t, n, s, i, r, o = .75 * e.length, a = e.length, c = 0;
                            "=" === e[e.length - 1] && (o--,
                                "=" === e[e.length - 2] && o--);
                            const u = new ArrayBuffer(o)
                                , h = new Uint8Array(u);
                            for (t = 0; t < a; t += 4)
                                n = I[e.charCodeAt(t)],
                                    s = I[e.charCodeAt(t + 1)],
                                    i = I[e.charCodeAt(t + 2)],
                                    r = I[e.charCodeAt(t + 3)],
                                    h[c++] = n << 2 | s >> 4,
                                    h[c++] = (15 & s) << 4 | i >> 2,
                                    h[c++] = (3 & i) << 6 | 63 & r;
                            return u
                        }
                        )(e);
                        return C(n, t)
                    }
                    return {
                        base64: !0,
                        data: e
                    }
                }
                , C = (e, t) => "blob" === t ? e instanceof Blob ? e : new Blob([e]) : e instanceof ArrayBuffer ? e : e.buffer
                , T = String.fromCharCode(30);
            function O() {
                return new TransformStream({
                    transform(e, t) {
                        !function (e, t) {
                            m && e.data instanceof Blob ? e.data.arrayBuffer().then(v).then(t) : b && (e.data instanceof ArrayBuffer || y(e.data)) ? t(v(e.data)) : w(e, !1, (e => {
                                k || (k = new TextEncoder),
                                    t(k.encode(e))
                            }
                            ))
                        }(e, (n => {
                            const s = n.length;
                            let i;
                            if (s < 126)
                                i = new Uint8Array(1),
                                    new DataView(i.buffer).setUint8(0, s);
                            else if (s < 65536) {
                                i = new Uint8Array(3);
                                const e = new DataView(i.buffer);
                                e.setUint8(0, 126),
                                    e.setUint16(1, s)
                            } else {
                                i = new Uint8Array(9);
                                const e = new DataView(i.buffer);
                                e.setUint8(0, 127),
                                    e.setBigUint64(1, BigInt(s))
                            }
                            e.data && "string" != typeof e.data && (i[0] |= 128),
                                t.enqueue(i),
                                t.enqueue(n)
                        }
                        ))
                    }
                })
            }
            let S;
            function D(e) {
                return e.reduce(((e, t) => e + t.length), 0)
            }
            function L(e, t) {
                if (e[0].length === t)
                    return e.shift();
                const n = new Uint8Array(t);
                let s = 0;
                for (let i = 0; i < t; i++)
                    n[i] = e[0][s++],
                        s === e[0].length && (e.shift(),
                            s = 0);
                return e.length && s < e[0].length && (e[0] = e[0].slice(s)),
                    n
            }
            function U(e) {
                if (e)
                    return function (e) {
                        for (var t in U.prototype)
                            e[t] = U.prototype[t];
                        return e
                    }(e)
            }
            U.prototype.on = U.prototype.addEventListener = function (e, t) {
                return this._callbacks = this._callbacks || {},
                    (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
                    this
            }
                ,
                U.prototype.once = function (e, t) {
                    function n() {
                        this.off(e, n),
                            t.apply(this, arguments)
                    }
                    return n.fn = t,
                        this.on(e, n),
                        this
                }
                ,
                U.prototype.off = U.prototype.removeListener = U.prototype.removeAllListeners = U.prototype.removeEventListener = function (e, t) {
                    if (this._callbacks = this._callbacks || {},
                        0 == arguments.length)
                        return this._callbacks = {},
                            this;
                    var n, s = this._callbacks["$" + e];
                    if (!s)
                        return this;
                    if (1 == arguments.length)
                        return delete this._callbacks["$" + e],
                            this;
                    for (var i = 0; i < s.length; i++)
                        if ((n = s[i]) === t || n.fn === t) {
                            s.splice(i, 1);
                            break
                        }
                    return 0 === s.length && delete this._callbacks["$" + e],
                        this
                }
                ,
                U.prototype.emit = function (e) {
                    this._callbacks = this._callbacks || {};
                    for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], s = 1; s < arguments.length; s++)
                        t[s - 1] = arguments[s];
                    if (n) {
                        s = 0;
                        for (var i = (n = n.slice(0)).length; s < i; ++s)
                            n[s].apply(this, t)
                    }
                    return this
                }
                ,
                U.prototype.emitReserved = U.prototype.emit,
                U.prototype.listeners = function (e) {
                    return this._callbacks = this._callbacks || {},
                        this._callbacks["$" + e] || []
                }
                ,
                U.prototype.hasListeners = function (e) {
                    return !!this.listeners(e).length
                }
                ;
            const _ = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")();
            function B(e, ...t) {
                return t.reduce(((t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]),
                    t)), {})
            }
            const R = _.setTimeout
                , F = _.clearTimeout;
            function N(e, t) {
                t.useNativeTimers ? (e.setTimeoutFn = R.bind(_),
                    e.clearTimeoutFn = F.bind(_)) : (e.setTimeoutFn = _.setTimeout.bind(_),
                        e.clearTimeoutFn = _.clearTimeout.bind(_))
            }
            class q extends Error {
                constructor(e, t, n) {
                    super(e),
                        this.description = t,
                        this.context = n,
                        this.type = "TransportError"
                }
            }
            class z extends U {
                constructor(e) {
                    super(),
                        this.writable = !1,
                        N(this, e),
                        this.opts = e,
                        this.query = e.query,
                        this.socket = e.socket
                }
                onError(e, t, n) {
                    return super.emitReserved("error", new q(e, t, n)),
                        this
                }
                open() {
                    return this.readyState = "opening",
                        this.doOpen(),
                        this
                }
                close() {
                    return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(),
                        this.onClose()),
                        this
                }
                send(e) {
                    "open" === this.readyState && this.write(e)
                }
                onOpen() {
                    this.readyState = "open",
                        this.writable = !0,
                        super.emitReserved("open")
                }
                onData(e) {
                    const t = E(e, this.socket.binaryType);
                    this.onPacket(t)
                }
                onPacket(e) {
                    super.emitReserved("packet", e)
                }
                onClose(e) {
                    this.readyState = "closed",
                        super.emitReserved("close", e)
                }
                pause(e) { }
                createUri(e, t = {}) {
                    return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(t)
                }
                _hostname() {
                    const e = this.opts.hostname;
                    return -1 === e.indexOf(":") ? e : "[" + e + "]"
                }
                _port() {
                    return this.opts.port && (this.opts.secure && Number(443 !== this.opts.port) || !this.opts.secure && 80 !== Number(this.opts.port)) ? ":" + this.opts.port : ""
                }
                _query(e) {
                    const t = function (e) {
                        let t = "";
                        for (let n in e)
                            e.hasOwnProperty(n) && (t.length && (t += "&"),
                                t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                        return t
                    }(e);
                    return t.length ? "?" + t : ""
                }
            }
            const M = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("")
                , j = 64
                , X = {};
            let W, V = 0, K = 0;
            function G(e) {
                let t = "";
                do {
                    t = M[e % j] + t,
                        e = Math.floor(e / j)
                } while (e > 0);
                return t
            }
            function Q() {
                const e = G(+new Date);
                return e !== W ? (V = 0,
                    W = e) : e + "." + G(V++)
            }
            for (; K < j; K++)
                X[M[K]] = K;
            let Y = !1;
            try {
                Y = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
            } catch (d) { }
            const H = Y;
            function Z(e) {
                const t = e.xdomain;
                try {
                    if ("undefined" != typeof XMLHttpRequest && (!t || H))
                        return new XMLHttpRequest
                } catch (e) { }
                if (!t)
                    try {
                        return new (_[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                    } catch (e) { }
            }
            function J() { }
            const $ = null != new Z({
                xdomain: !1
            }).responseType;
            class ee extends U {
                constructor(e, t) {
                    super(),
                        N(this, t),
                        this.opts = t,
                        this.method = t.method || "GET",
                        this.uri = e,
                        this.data = void 0 !== t.data ? t.data : null,
                        this.create()
                }
                create() {
                    var e;
                    const t = B(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
                    t.xdomain = !!this.opts.xd;
                    const n = this.xhr = new Z(t);
                    try {
                        n.open(this.method, this.uri, !0);
                        try {
                            if (this.opts.extraHeaders) {
                                n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
                                for (let e in this.opts.extraHeaders)
                                    this.opts.extraHeaders.hasOwnProperty(e) && n.setRequestHeader(e, this.opts.extraHeaders[e])
                            }
                        } catch (e) { }
                        if ("POST" === this.method)
                            try {
                                n.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                            } catch (e) { }
                        try {
                            n.setRequestHeader("Accept", "*/*")
                        } catch (e) { }
                        null === (e = this.opts.cookieJar) || void 0 === e || e.addCookies(n),
                            "withCredentials" in n && (n.withCredentials = this.opts.withCredentials),
                            this.opts.requestTimeout && (n.timeout = this.opts.requestTimeout),
                            n.onreadystatechange = () => {
                                var e;
                                3 === n.readyState && (null === (e = this.opts.cookieJar) || void 0 === e || e.parseCookies(n)),
                                    4 === n.readyState && (200 === n.status || 1223 === n.status ? this.onLoad() : this.setTimeoutFn((() => {
                                        this.onError("number" == typeof n.status ? n.status : 0)
                                    }
                                    ), 0))
                            }
                            ,
                            n.send(this.data)
                    } catch (e) {
                        return void this.setTimeoutFn((() => {
                            this.onError(e)
                        }
                        ), 0)
                    }
                    "undefined" != typeof document && (this.index = ee.requestsCount++,
                        ee.requests[this.index] = this)
                }
                onError(e) {
                    this.emitReserved("error", e, this.xhr),
                        this.cleanup(!0)
                }
                cleanup(e) {
                    if (void 0 !== this.xhr && null !== this.xhr) {
                        if (this.xhr.onreadystatechange = J,
                            e)
                            try {
                                this.xhr.abort()
                            } catch (e) { }
                        "undefined" != typeof document && delete ee.requests[this.index],
                            this.xhr = null
                    }
                }
                onLoad() {
                    const e = this.xhr.responseText;
                    null !== e && (this.emitReserved("data", e),
                        this.emitReserved("success"),
                        this.cleanup())
                }
                abort() {
                    this.cleanup()
                }
            }
            function te() {
                for (let e in ee.requests)
                    ee.requests.hasOwnProperty(e) && ee.requests[e].abort()
            }
            ee.requestsCount = 0,
                ee.requests = {},
                "undefined" != typeof document && ("function" == typeof attachEvent ? attachEvent("onunload", te) : "function" == typeof addEventListener && addEventListener("onpagehide" in _ ? "pagehide" : "unload", te, !1));
            const ne = "function" == typeof Promise && "function" == typeof Promise.resolve ? e => Promise.resolve().then(e) : (e, t) => t(e, 0)
                , se = _.WebSocket || _.MozWebSocket
                , ie = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase()
                , re = {
                    websocket: class extends z {
                        constructor(e) {
                            super(e),
                                this.supportsBinary = !e.forceBase64
                        }
                        get name() {
                            return "websocket"
                        }
                        doOpen() {
                            if (!this.check())
                                return;
                            const e = this.uri()
                                , t = this.opts.protocols
                                , n = ie ? {} : B(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
                            this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
                            try {
                                this.ws = ie ? new se(e, t, n) : t ? new se(e, t) : new se(e)
                            } catch (e) {
                                return this.emitReserved("error", e)
                            }
                            this.ws.binaryType = this.socket.binaryType,
                                this.addEventListeners()
                        }
                        addEventListeners() {
                            this.ws.onopen = () => {
                                this.opts.autoUnref && this.ws._socket.unref(),
                                    this.onOpen()
                            }
                                ,
                                this.ws.onclose = e => this.onClose({
                                    description: "websocket connection closed",
                                    context: e
                                }),
                                this.ws.onmessage = e => this.onData(e.data),
                                this.ws.onerror = e => this.onError("websocket error", e)
                        }
                        write(e) {
                            this.writable = !1;
                            for (let t = 0; t < e.length; t++) {
                                const n = e[t]
                                    , s = t === e.length - 1;
                                w(n, this.supportsBinary, (e => {
                                    try {
                                        this.ws.send(e)
                                    } catch (e) { }
                                    s && ne((() => {
                                        this.writable = !0,
                                            this.emitReserved("drain")
                                    }
                                    ), this.setTimeoutFn)
                                }
                                ))
                            }
                        }
                        doClose() {
                            void 0 !== this.ws && (this.ws.close(),
                                this.ws = null)
                        }
                        uri() {
                            const e = this.opts.secure ? "wss" : "ws"
                                , t = this.query || {};
                            return this.opts.timestampRequests && (t[this.opts.timestampParam] = Q()),
                                this.supportsBinary || (t.b64 = 1),
                                this.createUri(e, t)
                        }
                        check() {
                            return !!se
                        }
                    }
                    ,
                    webtransport: class extends z {
                        get name() {
                            return "webtransport"
                        }
                        doOpen() {
                            "function" == typeof WebTransport && (this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]),
                                this.transport.closed.then((() => {
                                    this.onClose()
                                }
                                )).catch((e => {
                                    this.onError("webtransport error", e)
                                }
                                )),
                                this.transport.ready.then((() => {
                                    this.transport.createBidirectionalStream().then((e => {
                                        const t = function (e, t) {
                                            S || (S = new TextDecoder);
                                            const n = [];
                                            let s = 0
                                                , i = -1
                                                , r = !1;
                                            return new TransformStream({
                                                transform(o, a) {
                                                    for (n.push(o); ;) {
                                                        if (0 === s) {
                                                            if (D(n) < 1)
                                                                break;
                                                            const e = L(n, 1);
                                                            r = 128 == (128 & e[0]),
                                                                i = 127 & e[0],
                                                                s = i < 126 ? 3 : 126 === i ? 1 : 2
                                                        } else if (1 === s) {
                                                            if (D(n) < 2)
                                                                break;
                                                            const e = L(n, 2);
                                                            i = new DataView(e.buffer, e.byteOffset, e.length).getUint16(0),
                                                                s = 3
                                                        } else if (2 === s) {
                                                            if (D(n) < 8)
                                                                break;
                                                            const e = L(n, 8)
                                                                , t = new DataView(e.buffer, e.byteOffset, e.length)
                                                                , r = t.getUint32(0);
                                                            if (r > Math.pow(2, 21) - 1) {
                                                                a.enqueue(g);
                                                                break
                                                            }
                                                            i = r * Math.pow(2, 32) + t.getUint32(4),
                                                                s = 3
                                                        } else {
                                                            if (D(n) < i)
                                                                break;
                                                            const e = L(n, i);
                                                            a.enqueue(E(r ? e : S.decode(e), t)),
                                                                s = 0
                                                        }
                                                        if (0 === i || i > e) {
                                                            a.enqueue(g);
                                                            break
                                                        }
                                                    }
                                                }
                                            })
                                        }(Number.MAX_SAFE_INTEGER, this.socket.binaryType)
                                            , n = e.readable.pipeThrough(t).getReader()
                                            , s = O();
                                        s.readable.pipeTo(e.writable),
                                            this.writer = s.writable.getWriter();
                                        const i = () => {
                                            n.read().then((({ done: e, value: t }) => {
                                                e || (this.onPacket(t),
                                                    i())
                                            }
                                            )).catch((e => { }
                                            ))
                                        }
                                            ;
                                        i();
                                        const r = {
                                            type: "open"
                                        };
                                        this.query.sid && (r.data = `{"sid":"${this.query.sid}"}`),
                                            this.writer.write(r).then((() => this.onOpen()))
                                    }
                                    ))
                                }
                                )))
                        }
                        write(e) {
                            this.writable = !1;
                            for (let t = 0; t < e.length; t++) {
                                const n = e[t]
                                    , s = t === e.length - 1;
                                this.writer.write(n).then((() => {
                                    s && ne((() => {
                                        this.writable = !0,
                                            this.emitReserved("drain")
                                    }
                                    ), this.setTimeoutFn)
                                }
                                ))
                            }
                        }
                        doClose() {
                            var e;
                            null === (e = this.transport) || void 0 === e || e.close()
                        }
                    }
                    ,
                    polling: class extends z {
                        constructor(e) {
                            if (super(e),
                                this.polling = !1,
                                "undefined" != typeof location) {
                                const t = "https:" === location.protocol;
                                let n = location.port;
                                n || (n = t ? "443" : "80"),
                                    this.xd = "undefined" != typeof location && e.hostname !== location.hostname || n !== e.port
                            }
                            const t = e && e.forceBase64;
                            this.supportsBinary = $ && !t,
                                this.opts.withCredentials && (this.cookieJar = void 0)
                        }
                        get name() {
                            return "polling"
                        }
                        doOpen() {
                            this.poll()
                        }
                        pause(e) {
                            this.readyState = "pausing";
                            const t = () => {
                                this.readyState = "paused",
                                    e()
                            }
                                ;
                            if (this.polling || !this.writable) {
                                let e = 0;
                                this.polling && (e++,
                                    this.once("pollComplete", (function () {
                                        --e || t()
                                    }
                                    ))),
                                    this.writable || (e++,
                                        this.once("drain", (function () {
                                            --e || t()
                                        }
                                        )))
                            } else
                                t()
                        }
                        poll() {
                            this.polling = !0,
                                this.doPoll(),
                                this.emitReserved("poll")
                        }
                        onData(e) {
                            ((e, t) => {
                                const n = e.split(T)
                                    , s = [];
                                for (let e = 0; e < n.length; e++) {
                                    const i = E(n[e], t);
                                    if (s.push(i),
                                        "error" === i.type)
                                        break
                                }
                                return s
                            }
                            )(e, this.socket.binaryType).forEach((e => {
                                if ("opening" === this.readyState && "open" === e.type && this.onOpen(),
                                    "close" === e.type)
                                    return this.onClose({
                                        description: "transport closed by the server"
                                    }),
                                        !1;
                                this.onPacket(e)
                            }
                            )),
                                "closed" !== this.readyState && (this.polling = !1,
                                    this.emitReserved("pollComplete"),
                                    "open" === this.readyState && this.poll())
                        }
                        doClose() {
                            const e = () => {
                                this.write([{
                                    type: "close"
                                }])
                            }
                                ;
                            "open" === this.readyState ? e() : this.once("open", e)
                        }
                        write(e) {
                            this.writable = !1,
                                ((e, t) => {
                                    const n = e.length
                                        , s = new Array(n);
                                    let i = 0;
                                    e.forEach(((e, r) => {
                                        w(e, !1, (e => {
                                            s[r] = e,
                                                ++i === n && t(s.join(T))
                                        }
                                        ))
                                    }
                                    ))
                                }
                                )(e, (e => {
                                    this.doWrite(e, (() => {
                                        this.writable = !0,
                                            this.emitReserved("drain")
                                    }
                                    ))
                                }
                                ))
                        }
                        uri() {
                            const e = this.opts.secure ? "https" : "http"
                                , t = this.query || {};
                            return !1 !== this.opts.timestampRequests && (t[this.opts.timestampParam] = Q()),
                                this.supportsBinary || t.sid || (t.b64 = 1),
                                this.createUri(e, t)
                        }
                        request(e = {}) {
                            return Object.assign(e, {
                                xd: this.xd,
                                cookieJar: this.cookieJar
                            }, this.opts),
                                new ee(this.uri(), e)
                        }
                        doWrite(e, t) {
                            const n = this.request({
                                method: "POST",
                                data: e
                            });
                            n.on("success", t),
                                n.on("error", ((e, t) => {
                                    this.onError("xhr post error", e, t)
                                }
                                ))
                        }
                        doPoll() {
                            const e = this.request();
                            e.on("data", this.onData.bind(this)),
                                e.on("error", ((e, t) => {
                                    this.onError("xhr poll error", e, t)
                                }
                                )),
                                this.pollXhr = e
                        }
                    }
                }
                , oe = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                , ae = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
            function ce(e) {
                const t = e
                    , n = e.indexOf("[")
                    , s = e.indexOf("]");
                -1 != n && -1 != s && (e = e.substring(0, n) + e.substring(n, s).replace(/:/g, ";") + e.substring(s, e.length));
                let i = oe.exec(e || "")
                    , r = {}
                    , o = 14;
                for (; o--;)
                    r[ae[o]] = i[o] || "";
                return -1 != n && -1 != s && (r.source = t,
                    r.host = r.host.substring(1, r.host.length - 1).replace(/;/g, ":"),
                    r.authority = r.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
                    r.ipv6uri = !0),
                    r.pathNames = function (e, t) {
                        const n = t.replace(/\/{2,9}/g, "/").split("/");
                        return "/" != t.slice(0, 1) && 0 !== t.length || n.splice(0, 1),
                            "/" == t.slice(-1) && n.splice(n.length - 1, 1),
                            n
                    }(0, r.path),
                    r.queryKey = function (e, t) {
                        const n = {};
                        return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (function (e, t, s) {
                            t && (n[t] = s)
                        }
                        )),
                            n
                    }(0, r.query),
                    r
            }
            class ue extends U {
                constructor(e, t = {}) {
                    super(),
                        this.binaryType = "arraybuffer",
                        this.writeBuffer = [],
                        e && "object" == typeof e && (t = e,
                            e = null),
                        e ? (e = ce(e),
                            t.hostname = e.host,
                            t.secure = "https" === e.protocol || "wss" === e.protocol,
                            t.port = e.port,
                            e.query && (t.query = e.query)) : t.host && (t.hostname = ce(t.host).host),
                        N(this, t),
                        this.secure = null != t.secure ? t.secure : "undefined" != typeof location && "https:" === location.protocol,
                        t.hostname && !t.port && (t.port = this.secure ? "443" : "80"),
                        this.hostname = t.hostname || ("undefined" != typeof location ? location.hostname : "localhost"),
                        this.port = t.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? "443" : "80"),
                        this.transports = t.transports || ["polling", "websocket", "webtransport"],
                        this.writeBuffer = [],
                        this.prevBufferLen = 0,
                        this.opts = Object.assign({
                            path: "/engine.io",
                            agent: !1,
                            withCredentials: !1,
                            upgrade: !0,
                            timestampParam: "t",
                            rememberUpgrade: !1,
                            addTrailingSlash: !0,
                            rejectUnauthorized: !0,
                            perMessageDeflate: {
                                threshold: 1024
                            },
                            transportOptions: {},
                            closeOnBeforeunload: !1
                        }, t),
                        this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""),
                        "string" == typeof this.opts.query && (this.opts.query = function (e) {
                            let t = {}
                                , n = e.split("&");
                            for (let e = 0, s = n.length; e < s; e++) {
                                let s = n[e].split("=");
                                t[decodeURIComponent(s[0])] = decodeURIComponent(s[1])
                            }
                            return t
                        }(this.opts.query)),
                        this.id = null,
                        this.upgrades = null,
                        this.pingInterval = null,
                        this.pingTimeout = null,
                        this.pingTimeoutTimer = null,
                        "function" == typeof addEventListener && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
                            this.transport && (this.transport.removeAllListeners(),
                                this.transport.close())
                        }
                            ,
                            addEventListener("beforeunload", this.beforeunloadEventListener, !1)),
                            "localhost" !== this.hostname && (this.offlineEventListener = () => {
                                this.onClose("transport close", {
                                    description: "network connection lost"
                                })
                            }
                                ,
                                addEventListener("offline", this.offlineEventListener, !1))),
                        this.open()
                }
                createTransport(e) {
                    const t = Object.assign({}, this.opts.query);
                    t.EIO = 4,
                        t.transport = e,
                        this.id && (t.sid = this.id);
                    const n = Object.assign({}, this.opts, {
                        query: t,
                        socket: this,
                        hostname: this.hostname,
                        secure: this.secure,
                        port: this.port
                    }, this.opts.transportOptions[e]);
                    return new re[e](n)
                }
                open() {
                    let e;
                    if (this.opts.rememberUpgrade && ue.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket"))
                        e = "websocket";
                    else {
                        if (0 === this.transports.length)
                            return void this.setTimeoutFn((() => {
                                this.emitReserved("error", "No transports available")
                            }
                            ), 0);
                        e = this.transports[0]
                    }
                    this.readyState = "opening";
                    try {
                        e = this.createTransport(e)
                    } catch (e) {
                        return this.transports.shift(),
                            void this.open()
                    }
                    e.open(),
                        this.setTransport(e)
                }
                setTransport(e) {
                    this.transport && this.transport.removeAllListeners(),
                        this.transport = e,
                        e.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (e => this.onClose("transport close", e)))
                }
                probe(e) {
                    let t = this.createTransport(e)
                        , n = !1;
                    ue.priorWebsocketSuccess = !1;
                    const s = () => {
                        n || (t.send([{
                            type: "ping",
                            data: "probe"
                        }]),
                            t.once("packet", (e => {
                                if (!n)
                                    if ("pong" === e.type && "probe" === e.data) {
                                        if (this.upgrading = !0,
                                            this.emitReserved("upgrading", t),
                                            !t)
                                            return;
                                        ue.priorWebsocketSuccess = "websocket" === t.name,
                                            this.transport.pause((() => {
                                                n || "closed" !== this.readyState && (u(),
                                                    this.setTransport(t),
                                                    t.send([{
                                                        type: "upgrade"
                                                    }]),
                                                    this.emitReserved("upgrade", t),
                                                    t = null,
                                                    this.upgrading = !1,
                                                    this.flush())
                                            }
                                            ))
                                    } else {
                                        const e = new Error("probe error");
                                        e.transport = t.name,
                                            this.emitReserved("upgradeError", e)
                                    }
                            }
                            )))
                    }
                        ;
                    function i() {
                        n || (n = !0,
                            u(),
                            t.close(),
                            t = null)
                    }
                    const r = e => {
                        const n = new Error("probe error: " + e);
                        n.transport = t.name,
                            i(),
                            this.emitReserved("upgradeError", n)
                    }
                        ;
                    function o() {
                        r("transport closed")
                    }
                    function a() {
                        r("socket closed")
                    }
                    function c(e) {
                        t && e.name !== t.name && i()
                    }
                    const u = () => {
                        t.removeListener("open", s),
                            t.removeListener("error", r),
                            t.removeListener("close", o),
                            this.off("close", a),
                            this.off("upgrading", c)
                    }
                        ;
                    t.once("open", s),
                        t.once("error", r),
                        t.once("close", o),
                        this.once("close", a),
                        this.once("upgrading", c),
                        -1 !== this.upgrades.indexOf("webtransport") && "webtransport" !== e ? this.setTimeoutFn((() => {
                            n || t.open()
                        }
                        ), 200) : t.open()
                }
                onOpen() {
                    if (this.readyState = "open",
                        ue.priorWebsocketSuccess = "websocket" === this.transport.name,
                        this.emitReserved("open"),
                        this.flush(),
                        "open" === this.readyState && this.opts.upgrade) {
                        let e = 0;
                        const t = this.upgrades.length;
                        for (; e < t; e++)
                            this.probe(this.upgrades[e])
                    }
                }
                onPacket(e) {
                    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
                        switch (this.emitReserved("packet", e),
                        this.emitReserved("heartbeat"),
                        this.resetPingTimeout(),
                        e.type) {
                            case "open":
                                this.onHandshake(JSON.parse(e.data));
                                break;
                            case "ping":
                                this.sendPacket("pong"),
                                    this.emitReserved("ping"),
                                    this.emitReserved("pong");
                                break;
                            case "error":
                                const t = new Error("server error");
                                t.code = e.data,
                                    this.onError(t);
                                break;
                            case "message":
                                this.emitReserved("data", e.data),
                                    this.emitReserved("message", e.data)
                        }
                }
                onHandshake(e) {
                    this.emitReserved("handshake", e),
                        this.id = e.sid,
                        this.transport.query.sid = e.sid,
                        this.upgrades = this.filterUpgrades(e.upgrades),
                        this.pingInterval = e.pingInterval,
                        this.pingTimeout = e.pingTimeout,
                        this.maxPayload = e.maxPayload,
                        this.onOpen(),
                        "closed" !== this.readyState && this.resetPingTimeout()
                }
                resetPingTimeout() {
                    this.clearTimeoutFn(this.pingTimeoutTimer),
                        this.pingTimeoutTimer = this.setTimeoutFn((() => {
                            this.onClose("ping timeout")
                        }
                        ), this.pingInterval + this.pingTimeout),
                        this.opts.autoUnref && this.pingTimeoutTimer.unref()
                }
                onDrain() {
                    this.writeBuffer.splice(0, this.prevBufferLen),
                        this.prevBufferLen = 0,
                        0 === this.writeBuffer.length ? this.emitReserved("drain") : this.flush()
                }
                flush() {
                    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                        const e = this.getWritablePackets();
                        this.transport.send(e),
                            this.prevBufferLen = e.length,
                            this.emitReserved("flush")
                    }
                }
                getWritablePackets() {
                    if (!(this.maxPayload && "polling" === this.transport.name && this.writeBuffer.length > 1))
                        return this.writeBuffer;
                    let e = 1;
                    for (let n = 0; n < this.writeBuffer.length; n++) {
                        const s = this.writeBuffer[n].data;
                        if (s && (e += "string" == typeof (t = s) ? function (e) {
                            let t = 0
                                , n = 0;
                            for (let s = 0, i = e.length; s < i; s++)
                                t = e.charCodeAt(s),
                                    t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (s++,
                                        n += 4);
                            return n
                        }(t) : Math.ceil(1.33 * (t.byteLength || t.size))),
                            n > 0 && e > this.maxPayload)
                            return this.writeBuffer.slice(0, n);
                        e += 2
                    }
                    var t;
                    return this.writeBuffer
                }
                write(e, t, n) {
                    return this.sendPacket("message", e, t, n),
                        this
                }
                send(e, t, n) {
                    return this.sendPacket("message", e, t, n),
                        this
                }
                sendPacket(e, t, n, s) {
                    if ("function" == typeof t && (s = t,
                        t = void 0),
                        "function" == typeof n && (s = n,
                            n = null),
                        "closing" === this.readyState || "closed" === this.readyState)
                        return;
                    (n = n || {}).compress = !1 !== n.compress;
                    const i = {
                        type: e,
                        data: t,
                        options: n
                    };
                    this.emitReserved("packetCreate", i),
                        this.writeBuffer.push(i),
                        s && this.once("flush", s),
                        this.flush()
                }
                close() {
                    const e = () => {
                        this.onClose("forced close"),
                            this.transport.close()
                    }
                        , t = () => {
                            this.off("upgrade", t),
                                this.off("upgradeError", t),
                                e()
                        }
                        , n = () => {
                            this.once("upgrade", t),
                                this.once("upgradeError", t)
                        }
                        ;
                    return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing",
                        this.writeBuffer.length ? this.once("drain", (() => {
                            this.upgrading ? n() : e()
                        }
                        )) : this.upgrading ? n() : e()),
                        this
                }
                onError(e) {
                    ue.priorWebsocketSuccess = !1,
                        this.emitReserved("error", e),
                        this.onClose("transport error", e)
                }
                onClose(e, t) {
                    "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (this.clearTimeoutFn(this.pingTimeoutTimer),
                        this.transport.removeAllListeners("close"),
                        this.transport.close(),
                        this.transport.removeAllListeners(),
                        "function" == typeof removeEventListener && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1),
                            removeEventListener("offline", this.offlineEventListener, !1)),
                        this.readyState = "closed",
                        this.id = null,
                        this.emitReserved("close", e, t),
                        this.writeBuffer = [],
                        this.prevBufferLen = 0)
                }
                filterUpgrades(e) {
                    const t = [];
                    let n = 0;
                    const s = e.length;
                    for (; n < s; n++)
                        ~this.transports.indexOf(e[n]) && t.push(e[n]);
                    return t
                }
            }
            ue.protocol = 4;
            const he = "function" == typeof ArrayBuffer
                , pe = e => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer
                , le = Object.prototype.toString
                , de = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === le.call(Blob)
                , fe = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === le.call(File);
            function ge(e) {
                return he && (e instanceof ArrayBuffer || pe(e)) || de && e instanceof Blob || fe && e instanceof File
            }
            function me(e, t) {
                if (!e || "object" != typeof e)
                    return !1;
                if (Array.isArray(e)) {
                    for (let t = 0, n = e.length; t < n; t++)
                        if (me(e[t]))
                            return !0;
                    return !1
                }
                if (ge(e))
                    return !0;
                if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length)
                    return me(e.toJSON(), !0);
                for (const t in e)
                    if (Object.prototype.hasOwnProperty.call(e, t) && me(e[t]))
                        return !0;
                return !1
            }
            function be(e) {
                const t = []
                    , n = e.data
                    , s = e;
                return s.data = ye(n, t),
                    s.attachments = t.length,
                {
                    packet: s,
                    buffers: t
                }
            }
            function ye(e, t) {
                if (!e)
                    return e;
                if (ge(e)) {
                    const n = {
                        _placeholder: !0,
                        num: t.length
                    };
                    return t.push(e),
                        n
                }
                if (Array.isArray(e)) {
                    const n = new Array(e.length);
                    for (let s = 0; s < e.length; s++)
                        n[s] = ye(e[s], t);
                    return n
                }
                if ("object" == typeof e && !(e instanceof Date)) {
                    const n = {};
                    for (const s in e)
                        Object.prototype.hasOwnProperty.call(e, s) && (n[s] = ye(e[s], t));
                    return n
                }
                return e
            }
            function we(e, t) {
                return e.data = Ae(e.data, t),
                    delete e.attachments,
                    e
            }
            function Ae(e, t) {
                if (!e)
                    return e;
                if (e && !0 === e._placeholder) {
                    if ("number" == typeof e.num && e.num >= 0 && e.num < t.length)
                        return t[e.num];
                    throw new Error("illegal attachments")
                }
                if (Array.isArray(e))
                    for (let n = 0; n < e.length; n++)
                        e[n] = Ae(e[n], t);
                else if ("object" == typeof e)
                    for (const n in e)
                        Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Ae(e[n], t));
                return e
            }
            const ve = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
            var ke;
            function Ie(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }
            !function (e) {
                e[e.CONNECT = 0] = "CONNECT",
                    e[e.DISCONNECT = 1] = "DISCONNECT",
                    e[e.EVENT = 2] = "EVENT",
                    e[e.ACK = 3] = "ACK",
                    e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR",
                    e[e.BINARY_EVENT = 5] = "BINARY_EVENT",
                    e[e.BINARY_ACK = 6] = "BINARY_ACK"
            }(ke || (ke = {}));
            class xe extends U {
                constructor(e) {
                    super(),
                        this.reviver = e
                }
                add(e) {
                    let t;
                    if ("string" == typeof e) {
                        if (this.reconstructor)
                            throw new Error("got plaintext data when reconstructing a packet");
                        t = this.decodeString(e);
                        const n = t.type === ke.BINARY_EVENT;
                        n || t.type === ke.BINARY_ACK ? (t.type = n ? ke.EVENT : ke.ACK,
                            this.reconstructor = new Ee(t),
                            0 === t.attachments && super.emitReserved("decoded", t)) : super.emitReserved("decoded", t)
                    } else {
                        if (!ge(e) && !e.base64)
                            throw new Error("Unknown type: " + e);
                        if (!this.reconstructor)
                            throw new Error("got binary data when not reconstructing a packet");
                        t = this.reconstructor.takeBinaryData(e),
                            t && (this.reconstructor = null,
                                super.emitReserved("decoded", t))
                    }
                }
                decodeString(e) {
                    let t = 0;
                    const n = {
                        type: Number(e.charAt(0))
                    };
                    if (void 0 === ke[n.type])
                        throw new Error("unknown packet type " + n.type);
                    if (n.type === ke.BINARY_EVENT || n.type === ke.BINARY_ACK) {
                        const s = t + 1;
                        for (; "-" !== e.charAt(++t) && t != e.length;)
                            ;
                        const i = e.substring(s, t);
                        if (i != Number(i) || "-" !== e.charAt(t))
                            throw new Error("Illegal attachments");
                        n.attachments = Number(i)
                    }
                    if ("/" === e.charAt(t + 1)) {
                        const s = t + 1;
                        for (; ++t && "," !== e.charAt(t) && t !== e.length;)
                            ;
                        n.nsp = e.substring(s, t)
                    } else
                        n.nsp = "/";
                    const s = e.charAt(t + 1);
                    if ("" !== s && Number(s) == s) {
                        const s = t + 1;
                        for (; ++t;) {
                            const n = e.charAt(t);
                            if (null == n || Number(n) != n) {
                                --t;
                                break
                            }
                            if (t === e.length)
                                break
                        }
                        n.id = Number(e.substring(s, t + 1))
                    }
                    if (e.charAt(++t)) {
                        const s = this.tryParse(e.substr(t));
                        if (!xe.isPayloadValid(n.type, s))
                            throw new Error("invalid payload");
                        n.data = s
                    }
                    return n
                }
                tryParse(e) {
                    try {
                        return JSON.parse(e, this.reviver)
                    } catch (e) {
                        return !1
                    }
                }
                static isPayloadValid(e, t) {
                    switch (e) {
                        case ke.CONNECT:
                            return Ie(t);
                        case ke.DISCONNECT:
                            return void 0 === t;
                        case ke.CONNECT_ERROR:
                            return "string" == typeof t || Ie(t);
                        case ke.EVENT:
                        case ke.BINARY_EVENT:
                            return Array.isArray(t) && ("number" == typeof t[0] || "string" == typeof t[0] && -1 === ve.indexOf(t[0]));
                        case ke.ACK:
                        case ke.BINARY_ACK:
                            return Array.isArray(t)
                    }
                }
                destroy() {
                    this.reconstructor && (this.reconstructor.finishedReconstruction(),
                        this.reconstructor = null)
                }
            }
            class Ee {
                constructor(e) {
                    this.packet = e,
                        this.buffers = [],
                        this.reconPack = e
                }
                takeBinaryData(e) {
                    if (this.buffers.push(e),
                        this.buffers.length === this.reconPack.attachments) {
                        const e = we(this.reconPack, this.buffers);
                        return this.finishedReconstruction(),
                            e
                    }
                    return null
                }
                finishedReconstruction() {
                    this.reconPack = null,
                        this.buffers = []
                }
            }
            var Pe = Object.freeze({
                __proto__: null,
                protocol: 5,
                get PacketType() {
                    return ke
                },
                Encoder: class {
                    constructor(e) {
                        this.replacer = e
                    }
                    encode(e) {
                        return e.type !== ke.EVENT && e.type !== ke.ACK || !me(e) ? [this.encodeAsString(e)] : this.encodeAsBinary({
                            type: e.type === ke.EVENT ? ke.BINARY_EVENT : ke.BINARY_ACK,
                            nsp: e.nsp,
                            data: e.data,
                            id: e.id
                        })
                    }
                    encodeAsString(e) {
                        let t = "" + e.type;
                        return e.type !== ke.BINARY_EVENT && e.type !== ke.BINARY_ACK || (t += e.attachments + "-"),
                            e.nsp && "/" !== e.nsp && (t += e.nsp + ","),
                            null != e.id && (t += e.id),
                            null != e.data && (t += JSON.stringify(e.data, this.replacer)),
                            t
                    }
                    encodeAsBinary(e) {
                        const t = be(e)
                            , n = this.encodeAsString(t.packet)
                            , s = t.buffers;
                        return s.unshift(n),
                            s
                    }
                }
                ,
                Decoder: xe
            });
            function Ce(e, t, n) {
                return e.on(t, n),
                    function () {
                        e.off(t, n)
                    }
            }
            const Te = Object.freeze({
                connect: 1,
                connect_error: 1,
                disconnect: 1,
                disconnecting: 1,
                newListener: 1,
                removeListener: 1
            });
            class Oe extends U {
                constructor(e, t, n) {
                    super(),
                        this.connected = !1,
                        this.recovered = !1,
                        this.receiveBuffer = [],
                        this.sendBuffer = [],
                        this._queue = [],
                        this._queueSeq = 0,
                        this.ids = 0,
                        this.acks = {},
                        this.flags = {},
                        this.io = e,
                        this.nsp = t,
                        n && n.auth && (this.auth = n.auth),
                        this._opts = Object.assign({}, n),
                        this.io._autoConnect && this.open()
                }
                get disconnected() {
                    return !this.connected
                }
                subEvents() {
                    if (this.subs)
                        return;
                    const e = this.io;
                    this.subs = [Ce(e, "open", this.onopen.bind(this)), Ce(e, "packet", this.onpacket.bind(this)), Ce(e, "error", this.onerror.bind(this)), Ce(e, "close", this.onclose.bind(this))]
                }
                get active() {
                    return !!this.subs
                }
                connect() {
                    return this.connected || (this.subEvents(),
                        this.io._reconnecting || this.io.open(),
                        "open" === this.io._readyState && this.onopen()),
                        this
                }
                open() {
                    return this.connect()
                }
                send(...e) {
                    return e.unshift("message"),
                        this.emit.apply(this, e),
                        this
                }
                emit(e, ...t) {
                    if (Te.hasOwnProperty(e))
                        throw new Error('"' + e.toString() + '" is a reserved event name');
                    if (t.unshift(e),
                        this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
                        return this._addToQueue(t),
                            this;
                    const n = {
                        type: ke.EVENT,
                        data: t,
                        options: {}
                    };
                    if (n.options.compress = !1 !== this.flags.compress,
                        "function" == typeof t[t.length - 1]) {
                        const e = this.ids++
                            , s = t.pop();
                        this._registerAckCallback(e, s),
                            n.id = e
                    }
                    const s = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
                    return this.flags.volatile && (!s || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(n),
                        this.packet(n)) : this.sendBuffer.push(n)),
                        this.flags = {},
                        this
                }
                _registerAckCallback(e, t) {
                    var n;
                    const s = null !== (n = this.flags.timeout) && void 0 !== n ? n : this._opts.ackTimeout;
                    if (void 0 === s)
                        return void (this.acks[e] = t);
                    const i = this.io.setTimeoutFn((() => {
                        delete this.acks[e];
                        for (let t = 0; t < this.sendBuffer.length; t++)
                            this.sendBuffer[t].id === e && this.sendBuffer.splice(t, 1);
                        t.call(this, new Error("operation has timed out"))
                    }
                    ), s);
                    this.acks[e] = (...e) => {
                        this.io.clearTimeoutFn(i),
                            t.apply(this, [null, ...e])
                    }
                }
                emitWithAck(e, ...t) {
                    const n = void 0 !== this.flags.timeout || void 0 !== this._opts.ackTimeout;
                    return new Promise(((s, i) => {
                        t.push(((e, t) => n ? e ? i(e) : s(t) : s(e))),
                            this.emit(e, ...t)
                    }
                    ))
                }
                _addToQueue(e) {
                    let t;
                    "function" == typeof e[e.length - 1] && (t = e.pop());
                    const n = {
                        id: this._queueSeq++,
                        tryCount: 0,
                        pending: !1,
                        args: e,
                        flags: Object.assign({
                            fromQueue: !0
                        }, this.flags)
                    };
                    e.push(((e, ...s) => {
                        if (n === this._queue[0])
                            return null !== e ? n.tryCount > this._opts.retries && (this._queue.shift(),
                                t && t(e)) : (this._queue.shift(),
                                    t && t(null, ...s)),
                                n.pending = !1,
                                this._drainQueue()
                    }
                    )),
                        this._queue.push(n),
                        this._drainQueue()
                }
                _drainQueue(e = !1) {
                    if (!this.connected || 0 === this._queue.length)
                        return;
                    const t = this._queue[0];
                    t.pending && !e || (t.pending = !0,
                        t.tryCount++,
                        this.flags = t.flags,
                        this.emit.apply(this, t.args))
                }
                packet(e) {
                    e.nsp = this.nsp,
                        this.io._packet(e)
                }
                onopen() {
                    "function" == typeof this.auth ? this.auth((e => {
                        this._sendConnectPacket(e)
                    }
                    )) : this._sendConnectPacket(this.auth)
                }
                _sendConnectPacket(e) {
                    this.packet({
                        type: ke.CONNECT,
                        data: this._pid ? Object.assign({
                            pid: this._pid,
                            offset: this._lastOffset
                        }, e) : e
                    })
                }
                onerror(e) {
                    this.connected || this.emitReserved("connect_error", e)
                }
                onclose(e, t) {
                    this.connected = !1,
                        delete this.id,
                        this.emitReserved("disconnect", e, t)
                }
                onpacket(e) {
                    if (e.nsp === this.nsp)
                        switch (e.type) {
                            case ke.CONNECT:
                                e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                                break;
                            case ke.EVENT:
                            case ke.BINARY_EVENT:
                                this.onevent(e);
                                break;
                            case ke.ACK:
                            case ke.BINARY_ACK:
                                this.onack(e);
                                break;
                            case ke.DISCONNECT:
                                this.ondisconnect();
                                break;
                            case ke.CONNECT_ERROR:
                                this.destroy();
                                const t = new Error(e.data.message);
                                t.data = e.data.data,
                                    this.emitReserved("connect_error", t)
                        }
                }
                onevent(e) {
                    const t = e.data || [];
                    null != e.id && t.push(this.ack(e.id)),
                        this.connected ? this.emitEvent(t) : this.receiveBuffer.push(Object.freeze(t))
                }
                emitEvent(e) {
                    if (this._anyListeners && this._anyListeners.length) {
                        const t = this._anyListeners.slice();
                        for (const n of t)
                            n.apply(this, e)
                    }
                    super.emit.apply(this, e),
                        this._pid && e.length && "string" == typeof e[e.length - 1] && (this._lastOffset = e[e.length - 1])
                }
                ack(e) {
                    const t = this;
                    let n = !1;
                    return function (...s) {
                        n || (n = !0,
                            t.packet({
                                type: ke.ACK,
                                id: e,
                                data: s
                            }))
                    }
                }
                onack(e) {
                    const t = this.acks[e.id];
                    "function" == typeof t && (t.apply(this, e.data),
                        delete this.acks[e.id])
                }
                onconnect(e, t) {
                    this.id = e,
                        this.recovered = t && this._pid === t,
                        this._pid = t,
                        this.connected = !0,
                        this.emitBuffered(),
                        this.emitReserved("connect"),
                        this._drainQueue(!0)
                }
                emitBuffered() {
                    this.receiveBuffer.forEach((e => this.emitEvent(e))),
                        this.receiveBuffer = [],
                        this.sendBuffer.forEach((e => {
                            this.notifyOutgoingListeners(e),
                                this.packet(e)
                        }
                        )),
                        this.sendBuffer = []
                }
                ondisconnect() {
                    this.destroy(),
                        this.onclose("io server disconnect")
                }
                destroy() {
                    this.subs && (this.subs.forEach((e => e())),
                        this.subs = void 0),
                        this.io._destroy(this)
                }
                disconnect() {
                    return this.connected && this.packet({
                        type: ke.DISCONNECT
                    }),
                        this.destroy(),
                        this.connected && this.onclose("io client disconnect"),
                        this
                }
                close() {
                    return this.disconnect()
                }
                compress(e) {
                    return this.flags.compress = e,
                        this
                }
                get volatile() {
                    return this.flags.volatile = !0,
                        this
                }
                timeout(e) {
                    return this.flags.timeout = e,
                        this
                }
                onAny(e) {
                    return this._anyListeners = this._anyListeners || [],
                        this._anyListeners.push(e),
                        this
                }
                prependAny(e) {
                    return this._anyListeners = this._anyListeners || [],
                        this._anyListeners.unshift(e),
                        this
                }
                offAny(e) {
                    if (!this._anyListeners)
                        return this;
                    if (e) {
                        const t = this._anyListeners;
                        for (let n = 0; n < t.length; n++)
                            if (e === t[n])
                                return t.splice(n, 1),
                                    this
                    } else
                        this._anyListeners = [];
                    return this
                }
                listenersAny() {
                    return this._anyListeners || []
                }
                onAnyOutgoing(e) {
                    return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
                        this._anyOutgoingListeners.push(e),
                        this
                }
                prependAnyOutgoing(e) {
                    return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
                        this._anyOutgoingListeners.unshift(e),
                        this
                }
                offAnyOutgoing(e) {
                    if (!this._anyOutgoingListeners)
                        return this;
                    if (e) {
                        const t = this._anyOutgoingListeners;
                        for (let n = 0; n < t.length; n++)
                            if (e === t[n])
                                return t.splice(n, 1),
                                    this
                    } else
                        this._anyOutgoingListeners = [];
                    return this
                }
                listenersAnyOutgoing() {
                    return this._anyOutgoingListeners || []
                }
                notifyOutgoingListeners(e) {
                    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
                        const t = this._anyOutgoingListeners.slice();
                        for (const n of t)
                            n.apply(this, e.data)
                    }
                }
            }
            function Se(e) {
                e = e || {},
                    this.ms = e.min || 100,
                    this.max = e.max || 1e4,
                    this.factor = e.factor || 2,
                    this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0,
                    this.attempts = 0
            }
            Se.prototype.duration = function () {
                var e = this.ms * Math.pow(this.factor, this.attempts++);
                if (this.jitter) {
                    var t = Math.random()
                        , n = Math.floor(t * this.jitter * e);
                    e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
                }
                return 0 | Math.min(e, this.max)
            }
                ,
                Se.prototype.reset = function () {
                    this.attempts = 0
                }
                ,
                Se.prototype.setMin = function (e) {
                    this.ms = e
                }
                ,
                Se.prototype.setMax = function (e) {
                    this.max = e
                }
                ,
                Se.prototype.setJitter = function (e) {
                    this.jitter = e
                }
                ;
            class De extends U {
                constructor(e, t) {
                    var n;
                    super(),
                        this.nsps = {},
                        this.subs = [],
                        e && "object" == typeof e && (t = e,
                            e = void 0),
                        (t = t || {}).path = t.path || "/socket.io",
                        this.opts = t,
                        N(this, t),
                        this.reconnection(!1 !== t.reconnection),
                        this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0),
                        this.reconnectionDelay(t.reconnectionDelay || 1e3),
                        this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3),
                        this.randomizationFactor(null !== (n = t.randomizationFactor) && void 0 !== n ? n : .5),
                        this.backoff = new Se({
                            min: this.reconnectionDelay(),
                            max: this.reconnectionDelayMax(),
                            jitter: this.randomizationFactor()
                        }),
                        this.timeout(null == t.timeout ? 2e4 : t.timeout),
                        this._readyState = "closed",
                        this.uri = e;
                    const s = t.parser || Pe;
                    this.encoder = new s.Encoder,
                        this.decoder = new s.Decoder,
                        this._autoConnect = !1 !== t.autoConnect,
                        this._autoConnect && this.open()
                }
                reconnection(e) {
                    return arguments.length ? (this._reconnection = !!e,
                        this) : this._reconnection
                }
                reconnectionAttempts(e) {
                    return void 0 === e ? this._reconnectionAttempts : (this._reconnectionAttempts = e,
                        this)
                }
                reconnectionDelay(e) {
                    var t;
                    return void 0 === e ? this._reconnectionDelay : (this._reconnectionDelay = e,
                        null === (t = this.backoff) || void 0 === t || t.setMin(e),
                        this)
                }
                randomizationFactor(e) {
                    var t;
                    return void 0 === e ? this._randomizationFactor : (this._randomizationFactor = e,
                        null === (t = this.backoff) || void 0 === t || t.setJitter(e),
                        this)
                }
                reconnectionDelayMax(e) {
                    var t;
                    return void 0 === e ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e,
                        null === (t = this.backoff) || void 0 === t || t.setMax(e),
                        this)
                }
                timeout(e) {
                    return arguments.length ? (this._timeout = e,
                        this) : this._timeout
                }
                maybeReconnectOnOpen() {
                    !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
                }
                open(e) {
                    if (~this._readyState.indexOf("open"))
                        return this;
                    this.engine = new ue(this.uri, this.opts);
                    const t = this.engine
                        , n = this;
                    this._readyState = "opening",
                        this.skipReconnect = !1;
                    const s = Ce(t, "open", (function () {
                        n.onopen(),
                            e && e()
                    }
                    ))
                        , i = t => {
                            this.cleanup(),
                                this._readyState = "closed",
                                this.emitReserved("error", t),
                                e ? e(t) : this.maybeReconnectOnOpen()
                        }
                        , r = Ce(t, "error", i);
                    if (!1 !== this._timeout) {
                        const e = this._timeout
                            , n = this.setTimeoutFn((() => {
                                s(),
                                    i(new Error("timeout")),
                                    t.close()
                            }
                            ), e);
                        this.opts.autoUnref && n.unref(),
                            this.subs.push((() => {
                                this.clearTimeoutFn(n)
                            }
                            ))
                    }
                    return this.subs.push(s),
                        this.subs.push(r),
                        this
                }
                connect(e) {
                    return this.open(e)
                }
                onopen() {
                    this.cleanup(),
                        this._readyState = "open",
                        this.emitReserved("open");
                    const e = this.engine;
                    this.subs.push(Ce(e, "ping", this.onping.bind(this)), Ce(e, "data", this.ondata.bind(this)), Ce(e, "error", this.onerror.bind(this)), Ce(e, "close", this.onclose.bind(this)), Ce(this.decoder, "decoded", this.ondecoded.bind(this)))
                }
                onping() {
                    this.emitReserved("ping")
                }
                ondata(e) {
                    try {
                        this.decoder.add(e)
                    } catch (e) {
                        this.onclose("parse error", e)
                    }
                }
                ondecoded(e) {
                    ne((() => {
                        this.emitReserved("packet", e)
                    }
                    ), this.setTimeoutFn)
                }
                onerror(e) {
                    this.emitReserved("error", e)
                }
                socket(e, t) {
                    let n = this.nsps[e];
                    return n ? this._autoConnect && !n.active && n.connect() : (n = new Oe(this, e, t),
                        this.nsps[e] = n),
                        n
                }
                _destroy(e) {
                    const t = Object.keys(this.nsps);
                    for (const e of t)
                        if (this.nsps[e].active)
                            return;
                    this._close()
                }
                _packet(e) {
                    const t = this.encoder.encode(e);
                    for (let n = 0; n < t.length; n++)
                        this.engine.write(t[n], e.options)
                }
                cleanup() {
                    this.subs.forEach((e => e())),
                        this.subs.length = 0,
                        this.decoder.destroy()
                }
                _close() {
                    this.skipReconnect = !0,
                        this._reconnecting = !1,
                        this.onclose("forced close"),
                        this.engine && this.engine.close()
                }
                disconnect() {
                    return this._close()
                }
                onclose(e, t) {
                    this.cleanup(),
                        this.backoff.reset(),
                        this._readyState = "closed",
                        this.emitReserved("close", e, t),
                        this._reconnection && !this.skipReconnect && this.reconnect()
                }
                reconnect() {
                    if (this._reconnecting || this.skipReconnect)
                        return this;
                    const e = this;
                    if (this.backoff.attempts >= this._reconnectionAttempts)
                        this.backoff.reset(),
                            this.emitReserved("reconnect_failed"),
                            this._reconnecting = !1;
                    else {
                        const t = this.backoff.duration();
                        this._reconnecting = !0;
                        const n = this.setTimeoutFn((() => {
                            e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts),
                                e.skipReconnect || e.open((t => {
                                    t ? (e._reconnecting = !1,
                                        e.reconnect(),
                                        this.emitReserved("reconnect_error", t)) : e.onreconnect()
                                }
                                )))
                        }
                        ), t);
                        this.opts.autoUnref && n.unref(),
                            this.subs.push((() => {
                                this.clearTimeoutFn(n)
                            }
                            ))
                    }
                }
                onreconnect() {
                    const e = this.backoff.attempts;
                    this._reconnecting = !1,
                        this.backoff.reset(),
                        this.emitReserved("reconnect", e)
                }
            }
            const Le = {};
            function Ue(e, t) {
                "object" == typeof e && (t = e,
                    e = void 0);
                const n = function (e, t = "", n) {
                    let s = e;
                    n = n || "undefined" != typeof location && location,
                        null == e && (e = n.protocol + "//" + n.host),
                        "string" == typeof e && ("/" === e.charAt(0) && (e = "/" === e.charAt(1) ? n.protocol + e : n.host + e),
                            /^(https?|wss?):\/\//.test(e) || (e = void 0 !== n ? n.protocol + "//" + e : "https://" + e),
                            s = ce(e)),
                        s.port || (/^(http|ws)$/.test(s.protocol) ? s.port = "80" : /^(http|ws)s$/.test(s.protocol) && (s.port = "443")),
                        s.path = s.path || "/";
                    const i = -1 !== s.host.indexOf(":") ? "[" + s.host + "]" : s.host;
                    return s.id = s.protocol + "://" + i + ":" + s.port + t,
                        s.href = s.protocol + "://" + i + (n && n.port === s.port ? "" : ":" + s.port),
                        s
                }(e, (t = t || {}).path || "/socket.io")
                    , s = n.source
                    , i = n.id
                    , r = n.path
                    , o = Le[i] && r in Le[i].nsps;
                let a;
                return t.forceNew || t["force new connection"] || !1 === t.multiplex || o ? a = new De(s, t) : (Le[i] || (Le[i] = new De(s, t)),
                    a = Le[i]),
                    n.query && !t.query && (t.query = n.queryKey),
                    a.socket(n.path, t)
            }
            Object.assign(Ue, {
                Manager: De,
                Socket: Oe,
                io: Ue,
                connect: Ue
            });
            const _e = 47;
            function Be(e) {
                return e === _e
            }
            function Re(e, t, n, s) {
                let i = ""
                    , r = 0
                    , o = -1
                    , a = 0
                    , c = 0;
                for (let u = 0; u <= e.length; ++u) {
                    if (u < e.length)
                        c = e.charCodeAt(u);
                    else {
                        if (s(c))
                            break;
                        c = _e
                    }
                    if (s(c)) {
                        if (o === u - 1 || 1 === a)
                            ;
                        else if (2 === a) {
                            if (i.length < 2 || 2 !== r || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2)) {
                                if (i.length > 2) {
                                    const e = i.lastIndexOf(n);
                                    -1 === e ? (i = "",
                                        r = 0) : (i = i.slice(0, e),
                                            r = i.length - 1 - i.lastIndexOf(i, n)),
                                        o = u,
                                        a = 0;
                                    continue
                                }
                                if (0 !== i.length) {
                                    i = "",
                                        r = 0,
                                        o = u,
                                        a = 0;
                                    continue
                                }
                            }
                            t && (i += i.length > 0 ? `${n}..` : "..",
                                r = 2)
                        } else
                            i.length > 0 ? i += `${n}${e.slice(o + 1, u)}` : i = e.slice(o + 1, u),
                                r = u - o - 1;
                        o = u,
                            a = 0
                    } else
                        46 === c && -1 !== a ? ++a : a = -1
                }
                return i
            }
            const Fe = {
                resolve(...e) {
                    let t = ""
                        , n = !1;
                    for (let s = e.length - 1; s >= -1 && !n; s--) {
                        const i = s >= 0 ? e[s] : "/";
                        0 !== i.length && (t = `${i}/${t}`,
                            n = i.charCodeAt(0) === _e)
                    }
                    return t = Re(t, !n, "/", Be),
                        n ? `/${t}` : t.length > 0 ? t : "."
                },
                normalize(e) {
                    if (0 === e.length)
                        return ".";
                    const t = e.charCodeAt(0) === _e
                        , n = e.charCodeAt(e.length - 1) === _e;
                    return 0 === (e = Re(e, !t, "/", Be)).length ? t ? "/" : n ? "./" : "." : (n && (e += "/"),
                        t ? `/${e}` : e)
                },
                isAbsolute: e => e.length > 0 && e.charCodeAt(0) === _e,
                join(...e) {
                    if (0 === e.length)
                        return ".";
                    let t;
                    for (let n = 0; n < e.length; ++n) {
                        const s = e[n];
                        s.length > 0 && (void 0 === t ? t = s : t += `/${s}`)
                    }
                    return void 0 === t ? "." : Fe.normalize(t)
                },
                relative(e, t) {
                    if (e === t)
                        return "";
                    if ((e = Fe.resolve(e)) === (t = Fe.resolve(t)))
                        return "";
                    const n = e.length
                        , s = n - 1
                        , i = t.length - 1
                        , r = s < i ? s : i;
                    let o = -1
                        , a = 0;
                    for (; a < r; a++) {
                        const n = e.charCodeAt(1 + a);
                        if (n !== t.charCodeAt(1 + a))
                            break;
                        n === _e && (o = a)
                    }
                    if (a === r)
                        if (i > r) {
                            if (t.charCodeAt(1 + a) === _e)
                                return t.slice(1 + a + 1);
                            if (0 === a)
                                return t.slice(1 + a)
                        } else
                            s > r && (e.charCodeAt(1 + a) === _e ? o = a : 0 === a && (o = 0));
                    let c = "";
                    for (a = 1 + o + 1; a <= n; ++a)
                        a !== n && e.charCodeAt(a) !== _e || (c += 0 === c.length ? ".." : "/..");
                    return `${c}${t.slice(1 + o)}`
                },
                toNamespacedPath: e => e,
                dirname(e) {
                    if (0 === e.length)
                        return ".";
                    const t = e.charCodeAt(0) === _e;
                    let n = -1
                        , s = !0;
                    for (let t = e.length - 1; t >= 1; --t)
                        if (e.charCodeAt(t) === _e) {
                            if (!s) {
                                n = t;
                                break
                            }
                        } else
                            s = !1;
                    return -1 === n ? t ? "/" : "." : t && 1 === n ? "//" : e.slice(0, n)
                },
                basename(e, t) {
                    let n = 0
                        , s = -1
                        , i = !0;
                    if (void 0 !== t && t.length > 0 && t.length <= e.length) {
                        if (t === e)
                            return "";
                        let r = t.length - 1
                            , o = -1;
                        for (let a = e.length - 1; a >= 0; --a) {
                            const c = e.charCodeAt(a);
                            if (c === _e) {
                                if (!i) {
                                    n = a + 1;
                                    break
                                }
                            } else
                                -1 === o && (i = !1,
                                    o = a + 1),
                                    r >= 0 && (c === t.charCodeAt(r) ? -1 == --r && (s = a) : (r = -1,
                                        s = o))
                        }
                        return n === s ? s = o : -1 === s && (s = e.length),
                            e.slice(n, s)
                    }
                    for (let t = e.length - 1; t >= 0; --t)
                        if (e.charCodeAt(t) === _e) {
                            if (!i) {
                                n = t + 1;
                                break
                            }
                        } else
                            -1 === s && (i = !1,
                                s = t + 1);
                    return -1 === s ? "" : e.slice(n, s)
                },
                extname(e) {
                    let t = -1
                        , n = 0
                        , s = -1
                        , i = !0
                        , r = 0;
                    for (let o = e.length - 1; o >= 0; --o) {
                        const a = e.charCodeAt(o);
                        if (a !== _e)
                            -1 === s && (i = !1,
                                s = o + 1),
                                46 === a ? -1 === t ? t = o : 1 !== r && (r = 1) : -1 !== t && (r = -1);
                        else if (!i) {
                            n = o + 1;
                            break
                        }
                    }
                    return -1 === t || -1 === s || 0 === r || 1 === r && t === s - 1 && t === n + 1 ? "" : e.slice(t, s)
                },
                format: function (e, t) {
                    validateObject(t, "pathObject");
                    const n = t.dir || t.root
                        , s = t.base || `${t.name || ""}${t.ext || ""}`;
                    return n ? n === t.root ? `${n}${s}` : `${n}${e}${s}` : s
                }
                    .bind(null, "/"),
                parse(e) {
                    const t = {
                        root: "",
                        dir: "",
                        base: "",
                        ext: "",
                        name: ""
                    };
                    if (0 === e.length)
                        return t;
                    const n = e.charCodeAt(0) === _e;
                    let s;
                    n ? (t.root = "/",
                        s = 1) : s = 0;
                    let i = -1
                        , r = 0
                        , o = -1
                        , a = !0
                        , c = e.length - 1
                        , u = 0;
                    for (; c >= s; --c) {
                        const t = e.charCodeAt(c);
                        if (t !== _e)
                            -1 === o && (a = !1,
                                o = c + 1),
                                46 === t ? -1 === i ? i = c : 1 !== u && (u = 1) : -1 !== i && (u = -1);
                        else if (!a) {
                            r = c + 1;
                            break
                        }
                    }
                    if (-1 !== o) {
                        const s = 0 === r && n ? 1 : r;
                        -1 === i || 0 === u || 1 === u && i === o - 1 && i === r + 1 ? t.base = t.name = e.slice(s, o) : (t.name = e.slice(s, i),
                            t.base = e.slice(s, o),
                            t.ext = e.slice(i, o))
                    }
                    return r > 0 ? t.dir = e.slice(0, r - 1) : n && (t.dir = "/"),
                        t
                },
                sep: "/",
                delimiter: ":",
                win32: null,
                posix: null
            }
                , Ne = Fe
                , qe = e => ("gui" === puter.env || (e || (e = "."),
                    e && (e.startsWith("/") || e.startsWith("~") || !puter.appID) || (e = Ne.join("~/AppData", puter.appID, e))),
                    e)
                , ze = async function (...e) {
                    let n;
                    return n = "object" == typeof e[0] && null !== e[0] ? e[0] : {
                        path: e[0],
                        success: e[1],
                        error: e[2]
                    },
                        new Promise((async (e, s) => {
                            if (!n.path)
                                throw new Error({
                                    code: "NO_PATH",
                                    message: "No path provided."
                                });
                            if (!puter.authToken && "web" === puter.env)
                                try {
                                    await puter.ui.authenticateWithPuter()
                                } catch (e) {
                                    s("Authentication failed.")
                                }
                            const r = t("/readdir", this.APIOrigin, this.authToken);
                            i(r, n.success, n.error, e, s),
                                r.send(JSON.stringify({
                                    path: qe(n.path)
                                }))
                        }
                        ))
                }
                , Me = async function (...e) {
                    let n;
                    return n = "object" == typeof e[0] && null !== e[0] ? e[0] : {
                        path: e[0],
                        options: "object" == typeof e[1] ? e[1] : {},
                        success: "object" == typeof e[1] ? e[2] : e[1],
                        error: "object" == typeof e[1] ? e[3] : e[2]
                    },
                        new Promise((async (e, s) => {
                            if (!puter.authToken && "web" === puter.env)
                                try {
                                    await puter.ui.authenticateWithPuter()
                                } catch (e) {
                                    s("Authentication failed.")
                                }
                            const r = t("/stat", this.APIOrigin, this.authToken);
                            i(r, n.success, n.error, e, s);
                            let o = {};
                            void 0 !== n.uid ? o.uid = n.uid : void 0 !== n.path && (o.path = qe(n.path)),
                                o.return_subdomains = n.returnSubdomains,
                                o.return_permissions = n.returnPermissions,
                                o.return_versions = n.returnVersions,
                                o.return_size = n.returnSize,
                                r.send(JSON.stringify(o))
                        }
                        ))
                }
                , je = function (...e) {
                    let n;
                    return n = "object" == typeof e[0] && null !== e[0] ? e[0] : {
                        success: e[0],
                        error: e[1]
                    },
                        new Promise((async (e, s) => {
                            if (!puter.authToken && "web" === puter.env)
                                try {
                                    await puter.ui.authenticateWithPuter()
                                } catch (e) {
                                    s("Authentication failed.")
                                }
                            const r = t("/df", this.APIOrigin, this.authToken);
                            i(r, n.success, n.error, e, s),
                                r.send()
                        }
                        ))
                }
                , Xe = function (...e) {
                    let n = {};
                    return "string" == typeof e[0] && "object" == typeof e[1] && !(e[1] instanceof Function) || "object" == typeof e[0] && null !== e[0] ? "string" == typeof e[0] ? (n.path = e[0],
                        Object.assign(n, e[1]),
                        n.success = e[2],
                        n.error = e[3]) : n = e[0] : "string" == typeof e[0] && (n.path = e[0],
                            n.success = e[1],
                            n.error = e[2]),
                        new Promise((async (e, s) => {
                            if (!puter.authToken && "web" === puter.env)
                                try {
                                    await puter.ui.authenticateWithPuter()
                                } catch (e) {
                                    s("Authentication failed.")
                                }
                            const r = t("/mkdir", this.APIOrigin, this.authToken);
                            i(r, n.success, n.error, e, s),
                                n.path = qe(n.path),
                                r.send(JSON.stringify({
                                    parent: Ne.dirname(n.path),
                                    path: Ne.basename(n.path),
                                    overwrite: n.overwrite ?? !1,
                                    dedupe_name: (n.rename || n.dedupeName) ?? !1,
                                    shortcut_to: n.shortcutTo,
                                    original_client_socket_id: this.socket.id,
                                    create_missing_parents: (n.recursive || n.createMissingParents) ?? !1
                                }))
                        }
                        ))
                }
                , We = function (...e) {
                    let n;
                    return n = "object" == typeof e[0] && null !== e[0] ? e[0] : {
                        source: e[0],
                        destination: e[1],
                        overwrite: e[2]?.overwrite,
                        new_name: e[2]?.newName || e[2]?.new_name,
                        create_missing_parents: e[2]?.createMissingParents || e[2]?.create_missing_parents,
                        new_metadata: e[2]?.newMetadata || e[2]?.new_metadata,
                        original_client_socket_id: e[2]?.excludeSocketID || e[2]?.original_client_socket_id,
                        success: e[3],
                        error: e[4]
                    },
                        new Promise((async (e, s) => {
                            if (!puter.authToken && "web" === puter.env)
                                try {
                                    await puter.ui.authenticateWithPuter()
                                } catch (e) {
                                    s("Authentication failed.")
                                }
                            n.source = qe(n.source),
                                n.destination = qe(n.destination);
                            const r = t("/copy", this.APIOrigin, this.authToken);
                            i(r, n.success, n.error, e, s),
                                r.send(JSON.stringify({
                                    original_client_socket_id: this.socket.id,
                                    socket_id: this.socket.id,
                                    source: n.source,
                                    destination: n.destination,
                                    overwrite: n.overwrite,
                                    new_name: n.new_name || n.newName,
                                    dedupe_name: n.dedupe_name || n.dedupeName
                                }))
                        }
                        ))
                }
                , Ve = function (...e) {
                    let n;
                    return n = "object" == typeof e[0] && null !== e[0] ? e[0] : {
                        path: e[0],
                        new_name: e[1],
                        success: e[2],
                        error: e[3]
                    },
                        new Promise((async (e, s) => {
                            if (!puter.authToken && "web" === puter.env)
                                try {
                                    await puter.ui.authenticateWithPuter()
                                } catch (e) {
                                    s("Authentication failed.")
                                }
                            const r = t("/rename", this.APIOrigin, this.authToken);
                            i(r, n.success, n.error, e, s);
                            let o = {
                                original_client_socket_id: n.excludeSocketID || n.original_client_socket_id,
                                new_name: n.new_name || n.newName
                            };
                            void 0 !== n.uid ? o.uid = n.uid : void 0 !== n.path && (o.path = qe(n.path)),
                                r.send(JSON.stringify(o))
                        }
                        ))
                }
                , Ke = async function (t, n, s = {}) {
                    return new Promise((async (i, r) => {
                        if (!puter.authToken && "web" === puter.env)
                            try {
                                await puter.ui.authenticateWithPuter()
                            } catch (e) {
                                r(e)
                            }
                        let o = new XMLHttpRequest;
                        if ("/" === n)
                            return s.error && "function" == typeof s.error && s.error("Can not upload to root directory."),
                                r("Can not upload to root directory.");
                        n = qe(n);
                        const a = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)));
                        s.init && "function" == typeof s.init && s.init(a, o);
                        let c, u = 0, h = 0, p = 0, l = !1;
                        if (Array.isArray(t) && t.length > 0)
                            for (let e = 0; e < t.length; e++)
                                (t[e] instanceof DataTransferItem || t[e] instanceof DataTransferItemList) && (l = !0);
                        if (t instanceof DataTransferItemList || t instanceof DataTransferItem || t[0] instanceof DataTransferItem || s.parsedDataTransferItems)
                            c = s.parsedDataTransferItems ? t : await puter.ui.getEntriesFromDataTransferItems(t),
                                c.sort(((e, t) => e.isDirectory && !t.isDirectory ? -1 : !e.isDirectory && t.isDirectory ? 1 : e.isDirectory && t.isDirectory ? 0 : e.size - t.size));
                        else if (t instanceof File || t[0] instanceof File || t instanceof FileList || t[0] instanceof FileList) {
                            c = Array.isArray(t) ? t : t instanceof FileList ? Array.from(t) : [t],
                                c.sort(((e, t) => e.size - t.size));
                            for (let e = 0; e < c.length; e++)
                                c[e].filepath = c[e].name,
                                    c[e].fullPath = c[e].name
                        } else if (t instanceof Blob) {
                            c = [new File([t], s.name, {
                                type: "text/plain"
                            })];
                            for (let e = 0; e < c.length; e++)
                                c[e].filepath = c[e].name,
                                    c[e].fullPath = c[e].name
                        } else if ("string" == typeof t) {
                            c = [new File([t], "default.txt", {
                                type: "text/plain"
                            })];
                            for (let e = 0; e < c.length; e++)
                                c[e].filepath = c[e].name,
                                    c[e].fullPath = c[e].name
                        }
                        let d, f = [], g = [];
                        for (let e = 0; e < c.length; e++)
                            c[e] && (c[e].isDirectory ? f.push({
                                path: Ne.join(n, c[e].finalPath ? c[e].finalPath : c[e].fullPath)
                            }) : g.push(c[e]),
                                void 0 !== c[e].size && (p += c[e].size));
                        if (0 === f.length && 0 === g.length)
                            return s.error && "function" == typeof s.error && s.error({
                                code: "EMPTY_UPLOAD",
                                message: "No files or directories to upload."
                            }),
                                r({
                                    code: "EMPTY_UPLOAD",
                                    message: "No files or directories to upload."
                                });
                        if ("web" !== puter.env)
                            try {
                                if (d = await this.space(),
                                    d.capacity - d.used < p)
                                    return s.error && "function" == typeof s.error && s.error({
                                        code: "NOT_ENOUGH_SPACE",
                                        message: "Not enough storage space available."
                                    }),
                                        r({
                                            code: "NOT_ENOUGH_SPACE",
                                            message: "Not enough storage space available."
                                        })
                            } catch (e) { }
                        p *= 2;
                        const m = new FormData;
                        f.sort();
                        let b = [];
                        for (let e = 0; e < f.length; e++) {
                            for (let t = 0; t < g.length; t++)
                                !g[t].puter_path_param && Ne.join(n, g[t].filepath).startsWith(f[e].path + "/") && (g[t].puter_path_param = `$dir_${e}/` + Ne.basename(g[t].filepath));
                            for (let t = 0; t < f.length; t++)
                                !f[t].puter_path_param && f[t].path.startsWith(f[e].path + "/") && (f[t].puter_path_param = `$dir_${e}/` + Ne.basename(f[t].path))
                        }
                        for (let e = 0; e < f.length; e++) {
                            let t = Ne.dirname(f[e].puter_path_param || f[e].path)
                                , n = f[e].puter_path_param || f[e].path;
                            "/" !== t && (n = n.replace(t, "")),
                                b.push({
                                    op: "mkdir",
                                    parent: t,
                                    path: n,
                                    overwrite: s.overwrite ?? !1,
                                    dedupe_name: s.dedupeName ?? !0,
                                    create_missing_ancestors: s.createMissingAncestors ?? !0,
                                    as: `dir_${e}`
                                })
                        }
                        b.reverse(),
                            m.append("operation_id", a),
                            m.append("socket_id", this.socket.id),
                            m.append("original_client_socket_id", this.socket.id);
                        for (let e = 0; e < b.length; e++)
                            m.append("operation", JSON.stringify(b[e]));
                        if (!s.shortcutTo)
                            for (let e = 0; e < g.length; e++)
                                m.append("fileinfo", JSON.stringify({
                                    name: g[e].name,
                                    type: g[e].type,
                                    size: g[e].size
                                }));
                        for (let e = 0; e < g.length; e++)
                            m.append("operation", JSON.stringify({
                                op: s.shortcutTo ? "shortcut" : "write",
                                dedupe_name: s.dedupeName ?? !0,
                                overwrite: s.overwrite ?? !1,
                                create_missing_ancestors: s.createMissingAncestors || s.createMissingParents,
                                operation_id: a,
                                path: g[e].puter_path_param && Ne.dirname(g[e].puter_path_param ?? "") || g[e].filepath && Ne.join(n, Ne.dirname(g[e].filepath)) || "",
                                name: Ne.basename(g[e].filepath),
                                item_upload_id: e,
                                shortcut_to: s.shortcutTo,
                                shortcut_to_uid: s.shortcutTo,
                                app_uid: s.appUID
                            }));
                        if (!s.shortcutTo)
                            for (let e = 0; e < g.length; e++)
                                m.append("file", g[e] ?? "");
                        const y = e => {
                            e.operation_id === a && (h += e.loaded_diff)
                        }
                            ;
                        this.socket.on("upload.progress", y);
                        let w = null;
                        o.open("post", this.APIOrigin + "/batch", !0),
                            o.setRequestHeader("Authorization", "Bearer " + this.authToken),
                            o.upload.addEventListener("progress", (function (e) {
                                let t;
                                null === w ? (t = e.loaded,
                                    w = 0) : t = e.loaded - w,
                                    w += t,
                                    u += t;
                                let n = ((h + u) / p * 100).toFixed(2);
                                n = n > 100 ? 100 : n,
                                    s.progress && "function" == typeof s.progress && s.progress(a, n)
                            }
                            ));
                        let A = setInterval((function () {
                            let e = ((h + u) / p * 100).toFixed(2);
                            e = e > 100 ? 100 : e,
                                s.progress && "function" == typeof s.progress && s.progress(a, e)
                        }
                        ), 100);
                        o.onabort = () => {
                            clearInterval(A),
                                this.socket.off("upload.progress", y),
                                s.abort && "function" == typeof s.abort && s.abort(a)
                        }
                            ,
                            o.onreadystatechange = async t => {
                                if (4 === o.readyState) {
                                    const t = await e(o);
                                    if (o.status >= 400 && o.status < 600 || s.strict && 218 === o.status) {
                                        if (clearInterval(A),
                                            this.socket.off("upload.progress", y),
                                            s.strict && 218 === o.status) {
                                            let e;
                                            for (let n = 0; n < t.results?.length; n++)
                                                if (200 !== t.results[n].status) {
                                                    e = t.results[n];
                                                    break
                                                }
                                            return s.error && "function" == typeof s.error && s.error(e),
                                                r(e)
                                        }
                                        return s.error && "function" == typeof s.error && s.error(t),
                                            r(t)
                                    }
                                    {
                                        t && t.results && 0 !== t.results.length || console.log("no results");
                                        let e = t.results;
                                        return e = 1 === e.length ? e[0] : e,
                                            s.success && "function" == typeof s.success && s.success(e),
                                            clearInterval(A),
                                            this.socket.off("upload.progress", y),
                                            i(e)
                                    }
                                }
                            }
                            ,
                            s.start && "function" == typeof s.start && s.start(),
                            o.send(m)
                    }
                    ))
                }
                , Ge = function (...e) {
                    let n;
                    return n = "object" == typeof e[0] && null !== e[0] ? e[0] : {
                        path: "string" == typeof e[0] ? e[0] : "object" == typeof e[0] && null !== e[0] ? e[0].path : e[0],
                        success: e[1],
                        error: e[2]
                    },
                        new Promise((async (e, s) => {
                            if (!puter.authToken && "web" === puter.env)
                                try {
                                    await puter.ui.authenticateWithPuter()
                                } catch (e) {
                                    s("Authentication failed.")
                                }
                            n.path = qe(n.path);
                            const r = t("/read?file=" + encodeURIComponent(n.path), this.APIOrigin, this.authToken, "get", "application/json;charset=UTF-8", "blob");
                            i(r, n.success, n.error, e, s),
                                r.send()
                        }
                        ))
                }
                , Qe = function (...e) {
                    let n;
                    return n = "object" == typeof e[0] && null !== e[0] ? e[0] : {
                        source: e[0],
                        destination: e[1],
                        overwrite: e[2]?.overwrite,
                        new_name: e[2]?.newName || e[2]?.new_name,
                        create_missing_parents: e[2]?.createMissingParents || e[2]?.create_missing_parents,
                        new_metadata: e[2]?.newMetadata || e[2]?.new_metadata,
                        original_client_socket_id: e[2]?.excludeSocketID || e[2]?.original_client_socket_id
                    },
                        new Promise((async (e, s) => {
                            if (!puter.authToken && "web" === puter.env)
                                try {
                                    await puter.ui.authenticateWithPuter()
                                } catch (e) {
                                    s("Authentication failed.")
                                }
                            n.source = qe(n.source),
                                n.destination = qe(n.destination);
                            const r = t("/move", this.APIOrigin, this.authToken);
                            i(r, n.success, n.error, e, s),
                                r.send(JSON.stringify({
                                    source: n.source,
                                    destination: n.destination,
                                    overwrite: n.overwrite,
                                    new_name: n.new_name || n.newName,
                                    create_missing_parents: n.create_missing_parents || n.createMissingParents,
                                    new_metadata: n.new_metadata || n.newMetadata,
                                    original_client_socket_id: n.excludeSocketID
                                }))
                        }
                        ))
                }
                , Ye = async function (e, t, n = {}) {
                    if (!e)
                        throw new Error({
                            code: "NO_TARGET_PATH",
                            message: "No target path provided."
                        });
                    e instanceof File && void 0 === t && (e = (t = e).name),
                        n.strict = !0,
                        n.overwrite = n.overwrite ?? !0,
                        n.overwrite && void 0 === n.dedupeName && (n.dedupeName = !1),
                        e = qe(e);
                    const s = Ne.basename(e)
                        , i = Ne.dirname(e);
                    return "string" == typeof t ? t = new File([t ?? ""], s ?? "Untitled.txt", {
                        type: "text/plain"
                    }) : t instanceof Blob && (t = new File([t ?? ""], s ?? "Untitled", {
                        type: t.type
                    })),
                        t || (t = new File([t ?? ""], s)),
                        this.upload(t, i, n)
                }
                , He = function (...n) {
                    let i;
                    return i = {
                        app_uid: n[0],
                        items: n[1],
                        success: n[2],
                        error: n[3]
                    },
                        new Promise((async (n, r) => {
                            if (!puter.authToken && "web" === puter.env)
                                try {
                                    await puter.ui.authenticateWithPuter()
                                } catch (e) {
                                    r("Authentication failed.")
                                }
                            let o = i.items;
                            Array.isArray(o) || (o = [o]);
                            const a = t("/sign", this.APIOrigin, this.authToken);
                            a.addEventListener("load", (async function (t) {
                                const s = await e(this);
                                if (200 !== this.status)
                                    return i.error && "function" == typeof i.error && i.error(s),
                                        r(s);
                                {
                                    let e, t = s, r = t.token;
                                    if (1 == o.length)
                                        e = {
                                            ...t.signatures[0]
                                        };
                                    else {
                                        let n = [];
                                        for (let e = 0; e < t.signatures.length; e++)
                                            n.push({
                                                ...t.signatures[e]
                                            });
                                        e = n
                                    }
                                    return i.success && "function" == typeof i.success && i.success({
                                        token: r,
                                        items: e
                                    }),
                                        n({
                                            token: r,
                                            items: e
                                        })
                                }
                            }
                            )),
                                a.upload.addEventListener("progress", (function (e) { }
                                )),
                                a.addEventListener("error", (function (e) {
                                    return s(i.error, r, this)
                                }
                                )),
                                a.send(JSON.stringify({
                                    app_uid: i.app_uid,
                                    items: o
                                }))
                        }
                        ))
                }
                , Ze = async function (...e) {
                    let n;
                    n = "object" == typeof e[0] && null !== e[0] ? e[0] : {
                        paths: e[0],
                        recursive: e[1]?.recursive ?? !0,
                        descendantsOnly: e[1]?.descendantsOnly ?? !1
                    };
                    let s = n.paths;
                    return "string" == typeof s && (s = [s]),
                        new Promise((async (e, r) => {
                            if (!puter.authToken && "web" === puter.env)
                                try {
                                    await puter.ui.authenticateWithPuter()
                                } catch (e) {
                                    r("Authentication failed.")
                                }
                            const o = t("/delete", this.APIOrigin, this.authToken);
                            i(o, n.success, n.error, e, r),
                                s = s.map((e => qe(e))),
                                o.send(JSON.stringify({
                                    paths: s,
                                    descendants_only: (n.descendants_only || n.descendantsOnly) ?? !1,
                                    recursive: n.recursive ?? !0
                                }))
                        }
                        ))
                }
                , Je = class {
                    readdir = ze;
                    stat = Me;
                    space = je;
                    mkdir = Xe;
                    copy = We;
                    rename = Ve;
                    upload = Ke;
                    read = Ge;
                    delete = Ze;
                    move = Qe;
                    write = Ye;
                    sign = He;
                    constructor(e, t, n) {
                        this.authToken = e,
                            this.APIOrigin = t,
                            this.appID = n,
                            this.initializeSocket()
                    }
                    initializeSocket() {
                        this.socket && this.socket.disconnect(),
                            this.socket = Ue(this.APIOrigin, {
                                query: {
                                    auth_token: this.authToken
                                }
                            }),
                            this.bindSocketEvents()
                    }
                    bindSocketEvents() {
                        this.socket.on("connect", (() => {
                            console.log("FileSystem Socket: Connected", this.socket.id)
                        }
                        )),
                            this.socket.on("disconnect", (() => {
                                console.log("FileSystem Socket: Disconnected")
                            }
                            )),
                            this.socket.on("reconnect", (e => {
                                console.log("FileSystem Socket: Reconnected", this.socket.id)
                            }
                            )),
                            this.socket.on("reconnect_attempt", (e => {
                                console.log("FileSystem Socket: Reconnection Attemps", e)
                            }
                            )),
                            this.socket.on("reconnect_error", (e => {
                                console.log("FileSystem Socket: Reconnection Error", e)
                            }
                            )),
                            this.socket.on("reconnect_failed", (() => {
                                console.log("FileSystem Socket: Reconnection Failed")
                            }
                            )),
                            this.socket.on("error", (e => {
                                console.error("FileSystem Socket Error:", e)
                            }
                            ))
                    }
                    setAuthToken(e) {
                        this.authToken = e,
                            this.initializeSocket()
                    }
                    setAPIOrigin(e) {
                        this.APIOrigin = e,
                            this.initializeSocket()
                    }
                }
                , $e = class {
                    constructor(e, t, n) {
                        this.authToken = e,
                            this.APIOrigin = t,
                            this.appID = n
                    }
                    setAuthToken(e) {
                        this.authToken = e
                    }
                    setAPIOrigin(e) {
                        this.APIOrigin = e
                    }
                    list = a([], "puter-subdomains", "select");
                    create = async (...e) => {
                        let t = {};
                        return "string" == typeof e[0] && 1 === e.length ? (e[0].match(/^[a-z0-9]+\.puter\.(site|com)$/) && (e[0] = e[0].split(".")[0]),
                            t = {
                                object: {
                                    subdomain: e[0]
                                }
                            }) : Array.isArray(e) && 2 === e.length && "string" == typeof e[0] ? (e[0].match(/^[a-z0-9]+\.puter\.(site|com)$/) && (e[0] = e[0].split(".")[0]),
                                e[1] && (e[1] = qe(e[1])),
                                t = {
                                    object: {
                                        subdomain: e[0],
                                        root_dir: e[1]
                                    }
                                }) : "object" == typeof e[0] && (t = {
                                    object: e[0]
                                }),
                            await a(["object"], "puter-subdomains", "create").call(this, t)
                    }
                        ;
                    update = async (...e) => {
                        let t = {};
                        return Array.isArray(e) && "string" == typeof e[0] && (e[0].match(/^[a-z0-9]+\.puter\.(site|com)$/) && (e[0] = e[0].split(".")[0]),
                            e[1] && (e[1] = qe(e[1])),
                            t = {
                                id: {
                                    subdomain: e[0]
                                },
                                object: {
                                    root_dir: e[1] ?? null
                                }
                            }),
                            await a(["object"], "puter-subdomains", "update").call(this, t)
                    }
                        ;
                    get = async (...e) => {
                        let t = {};
                        return Array.isArray(e) && "string" == typeof e[0] && (e[0].match(/^[a-z0-9]+\.puter\.(site|com)$/) && (e[0] = e[0].split(".")[0]),
                            t = {
                                id: {
                                    subdomain: e[0]
                                }
                            }),
                            a(["uid"], "puter-subdomains", "read").call(this, t)
                    }
                        ;
                    delete = async (...e) => {
                        let t = {};
                        return Array.isArray(e) && "string" == typeof e[0] && (e[0].match(/^[a-z0-9]+\.puter\.(site|com)$/) && (e[0] = e[0].split(".")[0]),
                            t = {
                                id: {
                                    subdomain: e[0]
                                }
                            }),
                            a(["uid"], "puter-subdomains", "delete").call(this, t)
                    }
                }
                , et = class {
                    constructor(e, t, n) {
                        this.authToken = e,
                            this.APIOrigin = t,
                            this.appID = n
                    }
                    setAuthToken(e) {
                        this.authToken = e
                    }
                    setAPIOrigin(e) {
                        this.APIOrigin = e
                    }
                    list = async (...e) => {
                        let t = {};
                        return t = {
                            predicate: ["user-can-edit"]
                        },
                            a(["uid"], "puter-apps", "select").call(this, t)
                    }
                        ;
                    create = async (...e) => {
                        let t = {};
                        if ("string" == typeof e[0]) {
                            let n = e[1]
                                , s = e[2] ?? e[0];
                            t = {
                                object: {
                                    name: e[0],
                                    index_url: n,
                                    title: s
                                }
                            }
                        } else if ("object" == typeof e[0] && null !== e[0]) {
                            let n = e[0];
                            t = {
                                object: {
                                    name: n.name,
                                    index_url: n.indexURL,
                                    title: n.title,
                                    description: n.description,
                                    icon: n.icon,
                                    maximize_on_start: n.maximizeOnStart,
                                    filetype_associations: n.filetypeAssociations
                                }
                            }
                        }
                        return await a(["object"], "puter-apps", "create").call(this, t)
                    }
                        ;
                    update = async (...e) => {
                        let t = {};
                        if (Array.isArray(e) && "string" == typeof e[0]) {
                            let n = e[1]
                                , s = {
                                    name: n.name,
                                    index_url: n.indexURL,
                                    title: n.title,
                                    description: n.description,
                                    icon: n.icon,
                                    maximize_on_start: n.maximizeOnStart,
                                    filetype_associations: n.filetypeAssociations
                                };
                            t = {
                                id: {
                                    name: e[0]
                                },
                                object: s
                            }
                        }
                        return await a(["object"], "puter-apps", "update").call(this, t)
                    }
                        ;
                    get = async (...e) => {
                        let t = {};
                        return Array.isArray(e) && "string" == typeof e[0] && (t = {
                            id: {
                                name: e[0]
                            }
                        }),
                            a(["uid"], "puter-apps", "read").call(this, t)
                    }
                        ;
                    delete = async (...e) => {
                        let t = {};
                        return Array.isArray(e) && "string" == typeof e[0] && (t = {
                            id: {
                                name: e[0]
                            }
                        }),
                            a(["uid"], "puter-apps", "delete").call(this, t)
                    }
                        ;
                    getDeveloperProfile = function (...e) {
                        let n;
                        return n = "object" == typeof e[0] && null !== e[0] ? e[0] : {
                            success: e[0],
                            error: e[1]
                        },
                            new Promise(((n, s) => {
                                let r;
                                return r = "object" == typeof e[0] && null !== e[0] ? e[0] : {
                                    success: e[0],
                                    error: e[1]
                                },
                                    new Promise(((e, n) => {
                                        const s = t("/get-dev-profile", puter.APIOrigin, puter.authToken, "get");
                                        i(s, r.success, r.error, e, n),
                                            s.send()
                                    }
                                    ))
                            }
                            ))
                    }
                }
                , tt = class {
                    constructor(e) {
                        this.readURL = e.readURL ?? e.read_url,
                            this.writeURL = e.writeURL ?? e.write_url,
                            this.metadataURL = e.metadataURL ?? e.metadata_url,
                            this.name = e.name ?? e.fsentry_name,
                            this.uid = e.uid ?? e.uuid ?? e.fsentry_uid ?? e.fsentry_id ?? e.fsentry_uuid ?? e.id,
                            this.id = this.uid,
                            this.uuid = this.uid,
                            this.path = e.path ?? e.fsentry_path,
                            this.size = e.size ?? e.fsentry_size,
                            this.accessed = e.accessed ?? e.fsentry_accessed,
                            this.modified = e.modified ?? e.fsentry_modified,
                            this.created = e.created ?? e.fsentry_created,
                            this.isDirectory = !!(e.isDirectory || e.is_dir || e.fsentry_is_dir)
                    }
                    write = async function (e) {
                        return puter.fs.write(this.path, new File([e], this.name), {
                            overwrite: !0,
                            dedupeName: !1
                        })
                    }
                        ;
                    watch = function (e) { }
                        ;
                    open = function (e) { }
                        ;
                    setAsWallpaper = function (e, t) { }
                        ;
                    rename = function (e) {
                        return puter.fs.rename(this.uid, e)
                    }
                        ;
                    move = function (e, t = !1, n) {
                        return puter.fs.move(this.path, e, t, n)
                    }
                        ;
                    copy = function (e, t = !1, n = !1) {
                        return puter.fs.copy(this.path, e, t, n)
                    }
                        ;
                    delete = function () {
                        return puter.fs.delete(this.path)
                    }
                        ;
                    versions = async function () { }
                        ;
                    trash = function () { }
                        ;
                    mkdir = async function (e, t = !1) {
                        if (!this.isDirectory)
                            throw new Error("mkdir() can only be called on a directory");
                        return puter.fs.mkdir(Ne.join(this.path, e))
                    }
                        ;
                    metadata = async function () { }
                        ;
                    readdir = async function () {
                        if (!this.isDirectory)
                            throw new Error("readdir() can only be called on a directory");
                        return puter.fs.readdir(this.path)
                    }
                        ;
                    read = async function () {
                        return puter.fs.read(this.path)
                    }
                }
                ;
            var nt = n(330)
                , st = n.n(nt);
            class it {
                #e;
                #t;
                constructor(e) {
                    this.#e = e,
                        this.#t = (() => {
                            const e = new Map;
                            for (let t of this.#e)
                                e[t] = [];
                            return e
                        }
                        )()
                }
                emit(e, t) {
                    this.#e.includes(e) ? this.#t[e].forEach((e => {
                        e(t)
                    }
                    )) : console.error(`Event name '${e}' not supported`)
                }
                on(e, t) {
                    this.#e.includes(e) ? this.#t[e].push(t) : console.error(`Event name '${e}' not supported`)
                }
                off(e, t) {
                    if (!this.#e.includes(e))
                        return void console.error(`Event name '${e}' not supported`);
                    const n = this.#t[e]
                        , s = n.indexOf(t);
                    -1 !== s && n.splice(s, 1)
                }
            }
            class rt extends it {
                #n = "*";
                #s;
                constructor(e, t, n) {
                    super(["message", "close"]),
                        this.messageTarget = e,
                        this.appInstanceID = t,
                        this.targetAppInstanceID = n,
                        this.#s = !0,
                        window.addEventListener("message", (e => {
                            if ("messageToApp" === e.data.msg) {
                                if (e.data.appInstanceID !== this.targetAppInstanceID)
                                    return;
                                return e.data.targetAppInstanceID !== this.appInstanceID ? void console.error(`AppConnection received message intended for wrong app! appInstanceID=${this.appInstanceID}, target=${e.data.targetAppInstanceID}`) : void this.emit("message", e.data.contents)
                            }
                            if ("appClosed" === e.data.msg) {
                                if (e.data.appInstanceID !== this.targetAppInstanceID)
                                    return;
                                this.#s = !1,
                                    this.emit("close", {
                                        appInstanceID: this.targetAppInstanceID
                                    })
                            }
                        }
                        ))
                }
                postMessage(e) {
                    this.#s ? this.messageTarget.postMessage({
                        msg: "messageToApp",
                        appInstanceID: this.appInstanceID,
                        targetAppInstanceID: this.targetAppInstanceID,
                        targetAppOrigin: "*",
                        contents: e
                    }, this.#n) : console.warn("Trying to post message on a closed AppConnection")
                }
                close() {
                    this.#s ? this.messageTarget.postMessage({
                        msg: "closeApp",
                        appInstanceID: this.appInstanceID,
                        targetAppInstanceID: this.targetAppInstanceID
                    }, this.#n) : console.warn("Trying to close an app on a closed AppConnection")
                }
            }
            const ot = class extends it {
                #i = 1;
                itemWatchCallbackFunctions = [];
                appInstanceID;
                parentInstanceID;
                #r = null;
                #o = [];
                #a;
                #c;
                #u;
                #e;
                #h = new Map;
                #p = function (e, t, n = {}) {
                    const s = this.#i++;
                    this.messageTarget?.postMessage({
                        msg: e,
                        env: this.env,
                        appInstanceID: this.appInstanceID,
                        uuid: s,
                        ...n
                    }, "*"),
                        this.#o[s] = t
                }
                    ;
                constructor(e, t, n, s) {
                    const i = ["localeChanged", "themeChanged"];
                    if (super(i),
                        this.#e = i,
                        this.appInstanceID = e,
                        this.parentInstanceID = t,
                        this.appID = n,
                        this.env = s,
                        "app" === this.env)
                        this.messageTarget = window.parent;
                    else if ("gui" === this.env)
                        return;
                    this.parentInstanceID && (this.#r = new rt(this.messageTarget, this.appInstanceID, this.parentInstanceID)),
                        this.messageTarget?.postMessage({
                            msg: "READY",
                            appInstanceID: this.appInstanceID
                        }, "*"),
                        window.addEventListener("focus", (e => {
                            this.messageTarget?.postMessage({
                                msg: "windowFocused",
                                appInstanceID: this.appInstanceID
                            }, "*")
                        }
                        ));
                    let r = null;
                    window.addEventListener("message", (async e => {
                        if (e.data.error)
                            throw e.data.error;
                        if (e.data.msg && "focus" === e.data.msg)
                            window.focus();
                        else if (e.data.msg && "click" === e.data.msg) {
                            const t = document.elementFromPoint(e.data.x, e.data.y);
                            null !== t && t.click()
                        } else if (e.data.msg && "drag" === e.data.msg) {
                            const t = document.elementFromPoint(e.data.x, e.data.y);
                            if (t !== r) {
                                if (r) {
                                    const t = new Event("dragleave", {
                                        bubbles: !0,
                                        cancelable: !0,
                                        clientX: e.data.x,
                                        clientY: e.data.y
                                    });
                                    r.dispatchEvent(t)
                                }
                                if (t) {
                                    const n = new Event("dragenter", {
                                        bubbles: !0,
                                        cancelable: !0,
                                        clientX: e.data.x,
                                        clientY: e.data.y
                                    });
                                    t.dispatchEvent(n)
                                }
                                r = t
                            }
                        } else if (e.data.msg && "drop" === e.data.msg) {
                            if (r) {
                                const t = new CustomEvent("drop", {
                                    bubbles: !0,
                                    cancelable: !0,
                                    detail: {
                                        clientX: e.data.x,
                                        clientY: e.data.y,
                                        items: e.data.items
                                    }
                                });
                                r.dispatchEvent(t),
                                    r = null
                            }
                        } else if ("windowWillClose" === e.data.msg)
                            void 0 === this.#a ? this.messageTarget?.postMessage({
                                msg: !0,
                                appInstanceID: this.appInstanceID,
                                original_msg_id: e.data.msg_id
                            }, "*") : (this.messageTarget?.postMessage({
                                msg: !1,
                                appInstanceID: this.appInstanceID,
                                original_msg_id: e.data.msg_id
                            }, "*"),
                                this.#a());
                        else if ("itemsOpened" === e.data.msg)
                            if (void 0 === this.#c)
                                this.messageTarget?.postMessage({
                                    msg: !0,
                                    appInstanceID: this.appInstanceID,
                                    original_msg_id: e.data.msg_id
                                }, "*");
                            else {
                                this.messageTarget?.postMessage({
                                    msg: !1,
                                    appInstanceID: this.appInstanceID,
                                    original_msg_id: e.data.msg_id
                                }, "*");
                                let t = [];
                                if (e.data.items.length > 0)
                                    for (let n = 0; n < e.data.items.length; n++)
                                        t.push(new tt(e.data.items[n]));
                                this.#c(t)
                            }
                        else if ("getAppDataSucceeded" === e.data.msg) {
                            let t = new tt(e.data.item);
                            e.data.original_msg_id && this.#o[e.data.original_msg_id] && this.#o[e.data.original_msg_id](t)
                        } else if ("readAppDataFileSucceeded" === e.data.msg) {
                            let t = new tt(e.data.item);
                            e.data.original_msg_id && this.#o[e.data.original_msg_id] && this.#o[e.data.original_msg_id](t)
                        } else if ("readAppDataFileFailed" === e.data.msg)
                            e.data.original_msg_id && this.#o[e.data.original_msg_id] && this.#o[e.data.original_msg_id](null);
                        else if (e.data.original_msg_id && this.#o[e.data.original_msg_id]) {
                            if ("fileOpenPicked" === e.data.msg) {
                                if (1 === e.data.items.length)
                                    this.#o[e.data.original_msg_id](new tt(e.data.items[0]));
                                else if (e.data.items.length > 1) {
                                    let t = [];
                                    for (let n = 0; n < e.data.items.length; n++)
                                        t.push(new tt(e.data.items[n]));
                                    this.#o[e.data.original_msg_id](t)
                                }
                            } else if ("directoryPicked" === e.data.msg) {
                                if (1 === e.data.items.length)
                                    this.#o[e.data.original_msg_id](new tt({
                                        uid: e.data.items[0].uid,
                                        name: e.data.items[0].fsentry_name,
                                        path: e.data.items[0].path,
                                        readURL: e.data.items[0].read_url,
                                        writeURL: e.data.items[0].write_url,
                                        metadataURL: e.data.items[0].metadata_url,
                                        isDirectory: !0,
                                        size: e.data.items[0].fsentry_size,
                                        accessed: e.data.items[0].fsentry_accessed,
                                        modified: e.data.items[0].fsentry_modified,
                                        created: e.data.items[0].fsentry_created
                                    }));
                                else if (e.data.items.length > 1) {
                                    let t = [];
                                    for (let n = 0; n < e.data.items.length; n++)
                                        t.push(new tt(e.data.items[n]));
                                    this.#o[e.data.original_msg_id](t)
                                }
                            } else if ("colorPicked" === e.data.msg)
                                this.#o[e.data.original_msg_id](e.data.color);
                            else if ("fontPicked" === e.data.msg)
                                this.#o[e.data.original_msg_id](e.data.font);
                            else if ("alertResponded" === e.data.msg)
                                this.#o[e.data.original_msg_id](e.data.response);
                            else if ("promptResponded" === e.data.msg)
                                this.#o[e.data.original_msg_id](e.data.response);
                            else if ("fileSaved" === e.data.msg)
                                this.#o[e.data.original_msg_id](new tt(e.data.saved_file));
                            else if ("childAppLaunched" === e.data.msg) {
                                const t = new rt(this.messageTarget, this.appInstanceID, e.data.child_instance_id);
                                this.#o[e.data.original_msg_id](t)
                            } else
                                this.#o[e.data.original_msg_id](e.data);
                            delete this.#o[e.data.original_msg_id]
                        } else if ("itemChanged" === e.data.msg && e.data.data && e.data.data.uid)
                            itemWatchCallbackFunctions[e.data.data.uid] && "function" == typeof itemWatchCallbackFunctions[e.data.data.uid] && itemWatchCallbackFunctions[e.data.data.uid](e.data.data);
                        else if ("broadcast" === e.data.msg) {
                            const { name: t, data: n } = e.data;
                            if (!this.#e.includes(t))
                                return;
                            this.emit(t, n),
                                this.#h.set(t, n)
                        }
                    }
                    ))
                }
                onWindowClose = function (e) {
                    this.#a = e
                }
                    ;
                onItemsOpened = function (e) {
                    if (!this.#c) {
                        let t = new URLSearchParams(window.location.search);
                        if (t.has("puter.item.name") && t.has("puter.item.uid") && t.has("puter.item.read_url")) {
                            let n = t.get("puter.item.path");
                            n = "~/" + n.split("/").slice(2).join("/"),
                                e([new tt({
                                    name: t.get("puter.item.name"),
                                    path: n,
                                    uid: t.get("puter.item.uid"),
                                    readURL: t.get("puter.item.read_url"),
                                    writeURL: t.get("puter.item.write_url"),
                                    metadataURL: t.get("puter.item.metadata_url"),
                                    size: t.get("puter.item.size"),
                                    accessed: t.get("puter.item.accessed"),
                                    modified: t.get("puter.item.modified"),
                                    created: t.get("puter.item.created")
                                })])
                        }
                    }
                    this.#c = e
                }
                    ;
                onLaunchedWithItems = function (e) {
                    if (!this.#u) {
                        let t = new URLSearchParams(window.location.search);
                        if (t.has("puter.item.name") && t.has("puter.item.uid") && t.has("puter.item.read_url")) {
                            let n = t.get("puter.item.path");
                            n = "~/" + n.split("/").slice(2).join("/"),
                                e([new tt({
                                    name: t.get("puter.item.name"),
                                    path: n,
                                    uid: t.get("puter.item.uid"),
                                    readURL: t.get("puter.item.read_url"),
                                    writeURL: t.get("puter.item.write_url"),
                                    metadataURL: t.get("puter.item.metadata_url"),
                                    size: t.get("puter.item.size"),
                                    accessed: t.get("puter.item.accessed"),
                                    modified: t.get("puter.item.modified"),
                                    created: t.get("puter.item.created")
                                })])
                        }
                    }
                    this.#u = e
                }
                    ;
                alert = function (e, t, n, s) {
                    return new Promise((s => {
                        this.#p("ALERT", s, {
                            message: e,
                            buttons: t,
                            options: n
                        })
                    }
                    ))
                }
                    ;
                prompt = function (e, t, n, s) {
                    return new Promise((s => {
                        this.#p("PROMPT", s, {
                            message: e,
                            placeholder: t,
                            options: n
                        })
                    }
                    ))
                }
                    ;
                showDirectoryPicker = function (e, t) {
                    return new Promise((t => {
                        const n = this.#i++;
                        if ("app" === this.env)
                            this.messageTarget?.postMessage({
                                msg: "showDirectoryPicker",
                                appInstanceID: this.appInstanceID,
                                uuid: n,
                                options: e,
                                env: this.env
                            }, "*");
                        else {
                            let t = 700
                                , r = 400
                                , o = "Puter: Open Directory";
                            var s = screen.width / 2 - t / 2
                                , i = screen.height / 2 - r / 2;
                            window.open(`${puter.defaultGUIOrigin}/action/show-directory-picker?embedded_in_popup=true&msg_id=${n}&appInstanceID=${this.appInstanceID}&env=${this.env}&options=${JSON.stringify(e)}`, o, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + t + ", height=" + r + ", top=" + i + ", left=" + s)
                        }
                        this.#o[n] = t
                    }
                    ))
                }
                    ;
                showOpenFilePicker = function (e, t) {
                    return new Promise((t => {
                        const n = this.#i++;
                        if ("app" === this.env)
                            this.messageTarget?.postMessage({
                                msg: "showOpenFilePicker",
                                appInstanceID: this.appInstanceID,
                                uuid: n,
                                options: e ?? {},
                                env: this.env
                            }, "*");
                        else {
                            let t = 700
                                , r = 400
                                , o = "Puter: Open File";
                            var s = screen.width / 2 - t / 2
                                , i = screen.height / 2 - r / 2;
                            window.open(`${puter.defaultGUIOrigin}/action/show-open-file-picker?embedded_in_popup=true&msg_id=${n}&appInstanceID=${this.appInstanceID}&env=${this.env}&options=${JSON.stringify(e ?? {})}`, o, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + t + ", height=" + r + ", top=" + i + ", left=" + s)
                        }
                        this.#o[n] = t
                    }
                    ))
                }
                    ;
                showFontPicker = function (e) {
                    return new Promise((t => {
                        this.#p("showFontPicker", t, {
                            options: e ?? {}
                        })
                    }
                    ))
                }
                    ;
                showColorPicker = function (e) {
                    return new Promise((t => {
                        this.#p("showColorPicker", t, {
                            options: e ?? {}
                        })
                    }
                    ))
                }
                    ;
                showSaveFilePicker = function (e, t) {
                    return new Promise((n => {
                        const s = this.#i++
                            , i = "[object URL]" === Object.prototype.toString.call(e) ? e : void 0;
                        if ("app" === this.env)
                            this.messageTarget?.postMessage({
                                msg: "showSaveFilePicker",
                                appInstanceID: this.appInstanceID,
                                content: i ? void 0 : e,
                                url: i ? i.toString() : void 0,
                                suggestedName: t ?? "",
                                env: this.env,
                                uuid: s
                            }, "*");
                        else {
                            window.addEventListener("message", (async n => {
                                "sendMeFileData" === n.data?.msg && (n.source.postMessage({
                                    msg: "showSaveFilePickerPopup",
                                    content: i ? void 0 : e,
                                    url: i ? i.toString() : void 0,
                                    suggestedName: t ?? "",
                                    env: this.env,
                                    uuid: s
                                }, "*"),
                                    window.removeEventListener("message", this))
                            }
                            ));
                            let n = new Blob([e], {
                                type: "application/octet-stream"
                            })
                                , a = URL.createObjectURL(n)
                                , c = 700
                                , u = 400
                                , h = "Puter: Save File";
                            var r = screen.width / 2 - c / 2
                                , o = screen.height / 2 - u / 2;
                            window.open(`${puter.defaultGUIOrigin}/action/show-save-file-picker?embedded_in_popup=true&msg_id=${s}&appInstanceID=${this.appInstanceID}&env=${this.env}&blobUrl=${encodeURIComponent(a)}`, h, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + c + ", height=" + u + ", top=" + o + ", left=" + r)
                        }
                        this.#o[s] = n
                    }
                    ))
                }
                    ;
                setWindowTitle = function (e, t) {
                    return new Promise((t => {
                        this.#p("setWindowTitle", t, {
                            new_title: e
                        })
                    }
                    ))
                }
                    ;
                setWindowWidth = function (e, t) {
                    return new Promise((t => {
                        this.#p("setWindowWidth", t, {
                            width: e
                        })
                    }
                    ))
                }
                    ;
                setWindowHeight = function (e, t) {
                    return new Promise((t => {
                        this.#p("setWindowHeight", t, {
                            height: e
                        })
                    }
                    ))
                }
                    ;
                setWindowSize = function (e, t, n) {
                    return new Promise((n => {
                        this.#p("setWindowSize", n, {
                            width: e,
                            height: t
                        })
                    }
                    ))
                }
                    ;
                setWindowPosition = function (e, t, n) {
                    return new Promise((n => {
                        this.#p("setWindowPosition", n, {
                            x: e,
                            y: t
                        })
                    }
                    ))
                }
                    ;
                getEntriesFromDataTransferItems = async function (e, t = {
                    raw: !1
                }) {
                    const n = e => {
                        if (this.getEntriesFromDataTransferItems.didShowInfo)
                            return;
                        if ("EncodingError" !== e.name)
                            return;
                        this.getEntriesFromDataTransferItems.didShowInfo = !0;
                        const t = `${e.name} occured within datatransfer-files-promise module\nError message: "${e.message}"\nTry serving html over http if currently you are running it from the filesystem.`;
                        console.warn(t)
                    }
                        , s = (e, t) => new Promise(((s, r) => {
                            e.readEntries((async e => {
                                let n = [];
                                for (let s of e) {
                                    const e = await i(s, t);
                                    n = n.concat(e)
                                }
                                s(n)
                            }
                            ), (e => {
                                n(e),
                                    r(e)
                            }
                            ))
                        }
                        ))
                        , i = async (e, i = "") => {
                            if (null !== e) {
                                if (e.isFile) {
                                    const s = await ((e, s = "") => new Promise(((i, r) => {
                                        e.file((e => {
                                            t.raw || (e.filepath = s + e.name),
                                                i(e)
                                        }
                                        ), (e => {
                                            n(e),
                                                r(e)
                                        }
                                        ))
                                    }
                                    )))(e, i);
                                    return [s]
                                }
                                if (e.isDirectory) {
                                    const t = await (async (e, t) => {
                                        const n = e.createReader()
                                            , i = t + e.name + "/";
                                        let r, o = [];
                                        do {
                                            r = await s(n, i),
                                                o = o.concat(r)
                                        } while (r.length > 0);
                                        return o
                                    }
                                    )(e, i);
                                    return t.push(e),
                                        t
                                }
                            }
                        }
                        ;
                    let r = []
                        , o = [];
                    for (let t = 0, n = e.length; t < n; t++)
                        o.push(e[t].webkitGetAsEntry());
                    for (let e of o) {
                        const t = await i(e);
                        r = r.concat(t)
                    }
                    return r
                }
                    ;
                authenticateWithPuter = function () {
                    if ("web" === this.env)
                        return this.authToken ? new Promise((e => {
                            e()
                        }
                        )) : puter.puterAuthState.isPromptOpen ? new Promise(((e, t) => {
                            puter.puterAuthState.resolver = {
                                resolve: e,
                                reject: t
                            }
                        }
                        )) : (puter.puterAuthState.isPromptOpen = !0,
                            puter.puterAuthState.authGranted = null,
                            new Promise(((e, t) => {
                                if (puter.authToken)
                                    e();
                                else {
                                    const n = new (st())(e, t);
                                    document.body.appendChild(n),
                                        n.open()
                                }
                            }
                            )))
                }
                    ;
                launchApp = function (e, t, n) {
                    return new Promise((n => {
                        "object" != typeof e || t || (t = e,
                            e = void 0),
                            this.#p("launchApp", n, {
                                app_name: e,
                                args: t
                            })
                    }
                    ))
                }
                    ;
                parentApp() {
                    return this.#r
                }
                createWindow = function (e, t) {
                    return new Promise((t => {
                        this.#p("createWindow", t, {
                            options: e ?? {}
                        })
                    }
                    ))
                }
                    ;
                menubar = function () {
                    document.querySelectorAll("style.puter-stylesheet").forEach((function (e) {
                        e.remove()
                    }
                    ));
                    const e = document.createElement("style");
                    e.classList.add("puter-stylesheet"),
                        e.innerHTML = "\n        .--puter-menubar {\n            border-bottom: 1px solid #e9e9e9;\n            background-color: #fbf9f9;\n            padding-top: 3px;\n            padding-bottom: 2px;\n            display: inline-block;\n            position: fixed;\n            top: 0;\n            width: 100%;\n            margin: 0;\n            padding: 0;\n            height: 31px;\n            font-family: Arial, Helvetica, sans-serif;\n            font-size: 13px;\n            z-index: 9999;\n        }\n        \n        .--puter-menubar, .--puter-menubar * {\n            user-select: none;\n            -webkit-user-select: none;\n            cursor: default;\n        }\n        \n        .--puter-menubar .dropdown-item-divider>hr {\n            margin-top: 5px;\n            margin-bottom: 5px;\n            border-bottom: none;\n            border-top: 1px solid #00000033;\n        }\n        \n        .--puter-menubar>li {\n            display: inline-block;\n            padding: 10px 5px;\n        }\n        \n        .--puter-menubar>li>ul {\n            display: none;\n            z-index: 999999999999;\n            list-style: none;\n            background-color: rgb(233, 233, 233);\n            width: 200px;\n            border: 1px solid #e4ebf3de;\n            box-shadow: 0px 0px 5px #00000066;\n            padding-left: 6px;\n            padding-right: 6px;\n            padding-top: 4px;\n            padding-bottom: 4px;\n            color: #333;\n            border-radius: 4px;\n            padding: 2px;\n            min-width: 200px;\n            margin-top: 5px;\n            position: absolute;\n        }\n        \n        .--puter-menubar .menubar-item {\n            display: block;\n            line-height: 24px;\n            margin-top: -7px;\n            text-align: center;\n            border-radius: 3px;\n            padding: 0 5px;\n        }\n        \n        .--puter-menubar .menubar-item-open {\n            background-color: rgb(216, 216, 216);\n        }\n        \n        .--puter-menubar .dropdown-item {\n            padding: 5px;\n            padding: 5px 30px;\n            list-style-type: none;\n            user-select: none;\n            font-size: 13px;\n        }\n        \n        .--puter-menubar .dropdown-item-icon, .--puter-menubar .dropdown-item-icon-active {\n            pointer-events: none;\n            width: 18px;\n            height: 18px;\n            margin-left: -23px;\n            margin-bottom: -4px;\n            margin-right: 5px;\n        }\n        .--puter-menubar .dropdown-item-disabled .dropdown-item-icon{\n            display: inline-block !important;\n        }\n        .--puter-menubar .dropdown-item-disabled .dropdown-item-icon-active{\n            display: none !important;\n        }\n        .--puter-menubar .dropdown-item-icon-active {\n            display:none;\n        }\n        .--puter-menubar .dropdown-item:hover .dropdown-item-icon{\n            display: none;\n        }\n        .--puter-menubar .dropdown-item:hover .dropdown-item-icon-active{\n            display: inline-block;\n        }\n        .--puter-menubar .dropdown-item-hide-icon .dropdown-item-icon, .--puter-menubar .dropdown-item-hide-icon .dropdown-item-icon-active{\n            display: none !important;\n        }\n        .--puter-menubar .dropdown-item a {\n            color: #333;\n            text-decoration: none;\n        }\n        \n        .--puter-menubar .dropdown-item:hover, .--puter-menubar .dropdown-item:hover a {\n            background-color: rgb(59 134 226);\n            color: white;\n            border-radius: 4px;\n        }\n        \n        .--puter-menubar .dropdown-item-disabled, .--puter-menubar .dropdown-item-disabled:hover {\n            opacity: 0.5;\n            background-color: transparent;\n            color: initial;\n            cursor: initial;\n            pointer-events: none;\n        }\n        \n        .--puter-menubar .menubar * {\n            user-select: none;\n        }                \n        ",
                        (document.head || document.getElementsByTagName("head")[0]).appendChild(e),
                        document.addEventListener("click", (function (e) {
                            if (e.target.classList.contains("dropdown-item-disabled"))
                                return !1;
                            e.target.classList.contains("menubar-item") || (document.querySelectorAll(".menubar-item.menubar-item-open").forEach((function (e) {
                                e.classList.remove("menubar-item-open")
                            }
                            )),
                                document.querySelectorAll(".dropdown").forEach((e => e.style.display = "none")))
                        }
                        )),
                        window.addEventListener("blur", (function (e) {
                            document.querySelectorAll(".dropdown").forEach((function (e) {
                                e.style.display = "none"
                            }
                            )),
                                document.querySelectorAll(".menubar-item.menubar-item-open").forEach((e => e.classList.remove("menubar-item-open")))
                        }
                        )),
                        document.querySelectorAll(".menubar-item").forEach((e => e.addEventListener("mousedown", (function (e) {
                            document.querySelectorAll(".dropdown").forEach((function (e) {
                                e.style.display = "none"
                            }
                            )),
                                document.querySelectorAll(".menubar-item.menubar-item-open").forEach((function (t) {
                                    t != e.target && t.classList.remove("menubar-item-open")
                                }
                                )),
                                this.classList.contains("menubar-item-open") ? document.querySelectorAll(".menubar-item.menubar-item-open").forEach((function (e) {
                                    e.classList.remove("menubar-item-open")
                                }
                                )) : e.target.classList.contains("dropdown-item") || (this.classList.add("menubar-item-open"),
                                    function (e) {
                                        const t = [];
                                        if (!e.parentNode)
                                            return t;
                                        let n = e.parentNode.firstChild;
                                        for (; n;)
                                            1 === n.nodeType && n !== e && t.push(n),
                                                n = n.nextSibling;
                                        return t
                                    }(this).forEach((function (e) {
                                        e.style.display = "block"
                                    }
                                    )))
                        }
                        )))),
                        document.querySelectorAll(".--puter-menubar .menubar-item").forEach((e => e.addEventListener("mouseover", (function (e) {
                            const t = document.querySelectorAll(".menubar-item.menubar-item-open");
                            t.length > 0 && t[0] !== e.target && e.target.dispatchEvent(new Event("mousedown"))
                        }
                        ))))
                }
                    ;
                on(e, t) {
                    super.on(e, t),
                        this.#e.includes(e) && this.#h.has(e) && t(this.#h.get(e))
                }
            }
                ;
            function at(e, t) {
                let n = (s = e,
                    s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).replace(/\\\*/g, ".*").replace(/\\\?/g, ".").replace(/\\\[/g, "[").replace(/\\\]/g, "]").replace(/\\\^/g, "^");
                var s;
                return new RegExp("^" + n + "$").test(t)
            }
            const ct = class {
                MAX_KEY_SIZE = 1024;
                MAX_VALUE_SIZE = 409600;
                constructor(e, t, n) {
                    this.authToken = e,
                        this.APIOrigin = t,
                        this.appID = n
                }
                setAuthToken(e) {
                    this.authToken = e
                }
                setAPIOrigin(e) {
                    this.APIOrigin = e
                }
                set = a(["key", "value"], "puter-kvstore", "set", {
                    preprocess: e => {
                        if (void 0 === e.key || null === e.key)
                            throw {
                                message: "Key cannot be undefined",
                                code: "key_undefined"
                            };
                        if (e.key.length > this.MAX_KEY_SIZE)
                            throw {
                                message: "Key size cannot be larger than " + this.MAX_KEY_SIZE,
                                code: "key_too_large"
                            };
                        if (e.value && e.value.length > this.MAX_VALUE_SIZE)
                            throw {
                                message: "Value size cannot be larger than " + this.MAX_VALUE_SIZE,
                                code: "value_too_large"
                            };
                        return e
                    }
                });
                get = a(["key"], "puter-kvstore", "get", {
                    preprocess: e => {
                        if (e.key.length > this.MAX_KEY_SIZE)
                            throw {
                                message: "Key size cannot be larger than " + this.MAX_KEY_SIZE,
                                code: "key_too_large"
                            };
                        return e
                    }
                    ,
                    transform: e => e
                });
                incr = async (...e) => {
                    let t = {};
                    if (!e || 0 === e.length)
                        throw {
                            message: "Arguments are required",
                            code: "arguments_required"
                        };
                    if (t.key = e[0],
                        t.amount = e[1] ?? 1,
                        t.key.length > this.MAX_KEY_SIZE)
                        throw {
                            message: "Key size cannot be larger than " + this.MAX_KEY_SIZE,
                            code: "key_too_large"
                        };
                    return a(["key"], "puter-kvstore", "incr").call(this, t)
                }
                    ;
                decr = async (...e) => {
                    let t = {};
                    if (!e || 0 === e.length)
                        throw {
                            message: "Arguments are required",
                            code: "arguments_required"
                        };
                    if (t.key = e[0],
                        t.amount = e[1] ?? 1,
                        t.key.length > this.MAX_KEY_SIZE)
                        throw {
                            message: "Key size cannot be larger than " + this.MAX_KEY_SIZE,
                            code: "key_too_large"
                        };
                    return a(["key"], "puter-kvstore", "decr").call(this, t)
                }
                    ;
                del = a(["key"], "puter-kvstore", "del", {
                    preprocess: e => {
                        if (e.key.length > this.MAX_KEY_SIZE)
                            throw {
                                message: "Key size cannot be larger than " + this.MAX_KEY_SIZE,
                                code: "key_too_large"
                            };
                        return e
                    }
                });
                list = async (...e) => {
                    let t, n = {}, s = !1;
                    return e && 1 === e.length && !0 === e[0] || e && 2 === e.length && !0 === e[1] ? (n = {},
                        s = !0) : n = {
                            as: "keys"
                        },
                        (e && 1 === e.length && "string" == typeof e[0] || e && 2 === e.length && "string" == typeof e[0] && !0 === e[1]) && (t = e[0]),
                        a([], "puter-kvstore", "list", {
                            transform: e => t ? s ? e.filter((e => at(t, e.key))) : e.filter((e => at(t, e))) : e
                        }).call(this, n)
                }
                    ;
                flush = a([], "puter-kvstore", "flush");
                clear = this.flush
            }
                , ut = class {
                    constructor(e, t, n) {
                        this.authToken = e,
                            this.APIOrigin = t,
                            this.appID = n
                    }
                    setAuthToken(e) {
                        this.authToken = e
                    }
                    setAPIOrigin(e) {
                        this.APIOrigin = e
                    }
                    img2txt = async (...e) => {
                        let t = {}
                            , n = !1;
                        if (!e)
                            throw {
                                message: "Arguments are required",
                                code: "arguments_required"
                            };
                        if (("string" == typeof e[0] || e[0] instanceof Blob) && (t.source = e[0]),
                            e[0].source instanceof Blob && (t.source = await p(e[0].source)),
                            t.source.length > this.MAX_INPUT_SIZE)
                            throw {
                                message: "Input size cannot be larger than 10485760",
                                code: "input_too_large"
                            };
                        return ("boolean" == typeof e[1] && !0 === e[1] || "boolean" == typeof e[2] && !0 === e[2] || "boolean" == typeof e[3] && !0 === e[3]) && (n = !0),
                            console.log(e, t),
                            await a(["source"], "puter-ocr", "recognize", {
                                test_mode: n ?? !1,
                                transform: async e => {
                                    let t = "";
                                    for (let n = 0; n < e?.blocks?.length; n++)
                                        "text/textract:LINE" === e.blocks[n].type && (t += e.blocks[n].text + "\n");
                                    return t
                                }
                            }).call(this, t)
                    }
                        ;
                    txt2speech = async (...e) => {
                        let t = {}
                            , n = !1;
                        if (!e)
                            throw {
                                message: "Arguments are required",
                                code: "arguments_required"
                            };
                        if ("string" == typeof e[0] && (t = {
                            text: e[0]
                        }),
                            e[1] && "string" == typeof e[1] && (t.language = e[1]),
                            t.text.length > this.MAX_INPUT_SIZE)
                            throw {
                                message: "Input size cannot be larger than 3000",
                                code: "input_too_large"
                            };
                        return ("boolean" == typeof e[1] && !0 === e[1] || "boolean" == typeof e[2] && !0 === e[2] || "boolean" == typeof e[3] && !0 === e[3]) && (n = !0),
                            await a(["source"], "puter-tts", "synthesize", {
                                responseType: "blob",
                                test_mode: n ?? !1,
                                transform: async e => {
                                    const t = await h(e)
                                        , n = new Audio(t);
                                    return n.toString = () => t,
                                        n.valueOf = () => t,
                                        n
                                }
                            }).call(this, t)
                    }
                        ;
                    chat = async (...e) => {
                        let t = {}
                            , n = !1;
                        if (!e)
                            throw {
                                message: "Arguments are required",
                                code: "arguments_required"
                            };
                        if ("string" != typeof e[0] || e[1] && "boolean" != typeof e[1])
                            if ("string" == typeof e[0] && ("string" == typeof e[1] || e[1] instanceof File))
                                e[1] instanceof File && (e[1] = await p(e[1])),
                                    t = {
                                        vision: !0,
                                        messages: [{
                                            content: [e[0], {
                                                image_url: {
                                                    url: e[1]
                                                }
                                            }]
                                        }]
                                    };
                            else if ("string" == typeof e[0] && Array.isArray(e[1])) {
                                for (let t = 0; t < e[1].length; t++)
                                    e[1][t] = {
                                        image_url: {
                                            url: e[1][t]
                                        }
                                    };
                                t = {
                                    vision: !0,
                                    messages: [{
                                        content: [e[0], ...e[1]]
                                    }]
                                }
                            } else
                                Array.isArray(e[0]) && (t = {
                                    messages: e[0]
                                });
                        else
                            t = {
                                messages: [{
                                    content: e[0]
                                }]
                            };
                        return ("boolean" == typeof e[1] && !0 === e[1] || "boolean" == typeof e[2] && !0 === e[2] || "boolean" == typeof e[3] && !0 === e[3]) && (n = !0),
                            await a(["messages"], "puter-chat-completion", "complete", {
                                test_mode: n ?? !1,
                                transform: async e => (e.toString = () => e.message?.content,
                                    e.valueOf = () => e.message?.content,
                                    e)
                            }).call(this, t)
                    }
                        ;
                    txt2img = async (...e) => {
                        let t = {}
                            , n = !1;
                        if (!e)
                            throw {
                                message: "Arguments are required",
                                code: "arguments_required"
                            };
                        return "string" == typeof e[0] && (t = {
                            prompt: e[0]
                        }),
                            "boolean" == typeof e[1] && !0 === e[1] && (n = !0),
                            await a(["prompt"], "puter-image-generation", "generate", {
                                responseType: "blob",
                                test_mode: n ?? !1,
                                transform: async e => {
                                    let t = new Image;
                                    return t.src = await h(e),
                                        t.toString = () => t.src,
                                        t.valueOf = () => t.src,
                                        t
                                }
                            }).call(this, t)
                    }
                }
                , ht = class {
                    #i = 1;
                    constructor(e, t, n) {
                        this.authToken = e,
                            this.APIOrigin = t,
                            this.appID = n
                    }
                    setAuthToken(e) {
                        this.authToken = e
                    }
                    setAPIOrigin(e) {
                        this.APIOrigin = e
                    }
                    signIn = () => new Promise(((e, t) => {
                        let n = this.#i++;
                        var s = screen.width / 2 - 300
                            , i = screen.height / 2 - 300;
                        window.open(puter.defaultGUIOrigin + "/action/sign-in?embedded_in_popup=true&msg_id=" + n, "Puter", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=600, height=600, top=" + i + ", left=" + s),
                            window.addEventListener("message", (function (s) {
                                s.data.msg_id == n && (delete s.data.msg_id,
                                    delete s.data.msg,
                                    s.data.success ? (puter.setAuthToken(s.data.token),
                                        e(s.data)) : t(s.data),
                                    window.removeEventListener("message", this))
                            }
                            ))
                    }
                    ));
                    isSignedIn = () => !!puter.authToken;
                    getUser = function (...e) {
                        let n;
                        return n = "object" == typeof e[0] && null !== e[0] ? e[0] : {
                            success: e[0],
                            error: e[1]
                        },
                            new Promise(((e, s) => {
                                const r = t("/whoami", puter.APIOrigin, puter.authToken, "get");
                                i(r, n.success, n.error, e, s),
                                    r.send()
                            }
                            ))
                    }
                        ;
                    signOut = () => {
                        puter.resetAuthToken()
                    }
                }
                ;
            window.puter = new class {
                env;
                defaultAPIOrigin = "https://api.puter.com";
                defaultGUIOrigin = "https://puter.com";
                onAuth;
                puterAuthState = {
                    isPromptOpen: !1,
                    authGranted: null,
                    resolver: null
                };
                appInstanceID;
                parentInstanceID;
                static FSItem = tt;
                eventHandlers = {};
                constructor(e) {
                    e = e ?? {};
                    let t = new URLSearchParams(window.location.search);
                    if (t.has("puter.app_instance_id") ? this.env = "app" : !0 === window.puter_gui_enabled ? this.env = "gui" : this.env = "web",
                        "puter.com" === window.location.hostname && (this.env = "gui"),
                        t.has("puter.args") ? this.args = JSON.parse(decodeURIComponent(t.get("puter.args"))) : this.args = {},
                        t.has("puter.app_instance_id") && (this.appInstanceID = decodeURIComponent(t.get("puter.app_instance_id"))),
                        t.has("puter.parent_instance_id") && (this.parentInstanceID = decodeURIComponent(t.get("puter.parent_instance_id"))),
                        t.has("puter.app.id") && (this.appID = decodeURIComponent(t.get("puter.app.id"))),
                        this.appID && (this.appDataPath = `~/AppData/${this.appID}`),
                        this.APIOrigin = this.defaultAPIOrigin,
                        t.has("puter.api_origin") ? this.APIOrigin = decodeURIComponent(t.get("puter.api_origin")) : t.has("puter.domain") && (this.APIOrigin = "https://api." + t.get("puter.domain")),
                        "gui" === this.env)
                        this.authToken = window.auth_token,
                            this.initSubmodules();
                    else if ("app" === this.env) {
                        this.authToken = decodeURIComponent(t.get("puter.auth.token")),
                            this.initSubmodules();
                        try {
                            localStorage.getItem("puter.auth.token") && this.setAuthToken(localStorage.getItem("puter.auth.token")),
                                localStorage.getItem("puter.app.id") && this.setAppID(localStorage.getItem("puter.app.id"))
                        } catch (e) {
                            console.error("Error accessing localStorage:", e)
                        }
                    } else if ("web" === this.env) {
                        this.initSubmodules();
                        try {
                            localStorage.getItem("puter.auth.token") && this.setAuthToken(localStorage.getItem("puter.auth.token")),
                                localStorage.getItem("puter.app.id") && this.setAppID(localStorage.getItem("puter.app.id"))
                        } catch (e) {
                            console.error("Error accessing localStorage:", e)
                        }
                    }
                }
                initSubmodules = function () {
                    this.auth = new ht(this.authToken, this.APIOrigin, this.appID, this.env),
                        this.os = new l(this.authToken, this.APIOrigin, this.appID, this.env),
                        this.fs = new Je(this.authToken, this.APIOrigin, this.appID, this.env),
                        this.ui = new ot(this.appInstanceID, this.parentInstanceID, this.appID, this.env),
                        this.hosting = new $e(this.authToken, this.APIOrigin, this.appID, this.env),
                        this.apps = new et(this.authToken, this.APIOrigin, this.appID, this.env),
                        this.ai = new ut(this.authToken, this.APIOrigin, this.appID, this.env),
                        this.kv = new ct(this.authToken, this.APIOrigin, this.appID, this.env),
                        this.path = Ne
                }
                    ;
                updateSubmodules() {
                    [this.os, this.fs, this.hosting, this.apps, this.ai, this.kv].forEach((e => {
                        e && (e.setAuthToken(this.authToken),
                            e.setAPIOrigin(this.APIOrigin))
                    }
                    ))
                }
                setAppID = function (e) {
                    try {
                        localStorage.setItem("puter.app.id", e)
                    } catch (e) {
                        console.error("Error accessing localStorage:", e)
                    }
                    this.appID = e
                }
                    ;
                setAuthToken = function (e) {
                    if (this.authToken = e,
                        "web" === this.env || "app" === this.env)
                        try {
                            localStorage.setItem("puter.auth.token", e)
                        } catch (e) {
                            console.error("Error accessing localStorage:", e)
                        }
                    this.updateSubmodules()
                }
                    ;
                setAPIOrigin = function (e) {
                    this.APIOrigin = e,
                        this.updateSubmodules()
                }
                    ;
                resetAuthToken = function () {
                    if (this.authToken = null,
                        "web" === this.env || "app" === this.env)
                        try {
                            localStorage.removeItem("puter.auth.token")
                        } catch (e) {
                            console.error("Error accessing localStorage:", e)
                        }
                    this.updateSubmodules()
                }
                    ;
                exit = function () {
                    window.parent.postMessage({
                        msg: "exit",
                        appInstanceID: this.appInstanceID
                    }, "*")
                }
                    ;
                randName = function (e = "-") {
                    const t = ["helpful", "sensible", "loyal", "honest", "clever", "capable", "calm", "smart", "genius", "bright", "charming", "creative", "diligent", "elegant", "fancy", "colorful", "avid", "active", "gentle", "happy", "intelligent", "jolly", "kind", "lively", "merry", "nice", "optimistic", "polite", "quiet", "relaxed", "silly", "victorious", "witty", "young", "zealous", "strong", "brave", "agile", "bold"]
                        , n = ["street", "roof", "floor", "tv", "idea", "morning", "game", "wheel", "shoe", "bag", "clock", "pencil", "pen", "magnet", "chair", "table", "house", "dog", "room", "book", "car", "cat", "tree", "flower", "bird", "fish", "sun", "moon", "star", "cloud", "rain", "snow", "wind", "mountain", "river", "lake", "sea", "ocean", "island", "bridge", "road", "train", "plane", "ship", "bicycle", "horse", "elephant", "lion", "tiger", "bear", "zebra", "giraffe", "monkey", "snake", "rabbit", "duck", "goose", "penguin", "frog", "crab", "shrimp", "whale", "octopus", "spider", "ant", "bee", "butterfly", "dragonfly", "ladybug", "snail", "camel", "kangaroo", "koala", "panda", "piglet", "sheep", "wolf", "fox", "deer", "mouse", "seal", "chicken", "cow", "dinosaur", "puppy", "kitten", "circle", "square", "garden", "otter", "bunny", "meerkat", "harp"];
                    return t[Math.floor(Math.random() * t.length)] + e + n[Math.floor(Math.random() * n.length)] + e + Math.floor(1e4 * Math.random())
                }
                    ;
                getUser = function (...e) {
                    let n;
                    return n = "object" == typeof e[0] && null !== e[0] ? e[0] : {
                        success: e[0],
                        error: e[1]
                    },
                        new Promise(((e, s) => {
                            const r = t("/whoami", this.APIOrigin, this.authToken, "get");
                            i(r, n.success, n.error, e, s),
                                r.send()
                        }
                        ))
                }
                    ;
                print = function (...e) {
                    for (let t of e)
                        document.getElementsByTagName("body")[0].append(t)
                }
            }
                ,
                window.addEventListener("message", (async e => {
                    e.origin === puter.defaultGUIOrigin && (e.data.msg && "requestOrigin" === e.data.msg ? e.source.postMessage({
                        msg: "originResponse"
                    }, "*") : "puter.token" === e.data.msg && (puter.setAuthToken(e.data.token),
                        puter.setAppID(e.data.app_uid),
                        puter.puterAuthState.authGranted = !0,
                        puter.onAuth && "function" == typeof puter.onAuth && puter.getUser().then((e => {
                            puter.onAuth(e)
                        }
                        )),
                        puter.puterAuthState.isPromptOpen = !1,
                        puter.puterAuthState.resolver && (puter.puterAuthState.authGranted ? puter.puterAuthState.resolver.resolve() : puter.puterAuthState.resolver.reject(),
                            puter.puterAuthState.resolver = null)))
                }
                ))
        }
        )()
}
)();
