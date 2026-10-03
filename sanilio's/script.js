// ==============================
// SHOW / HIDE PASSWORD
// ==============================

function togglePassword(inputId, button) {

    const input = document.getElementById(inputId);

    if (input.type === "password") {

        input.type = "text";

        button.classList.add("show");

        button.setAttribute(
            "aria-label",
            "Sembunyikan password"
        );

    } else {

        input.type = "password";

        button.classList.remove("show");

        button.setAttribute(
            "aria-label",
            "Tampilkan password"
        );
    }
}


// ==============================
// LOGIN
// ==============================

function login() {

    const nama =
        document.getElementById("loginNama").value;

    const password =
        document.getElementById("loginPassword").value;


    if (nama === "" || password === "") {

        alert("Nama dan kata sandi harus diisi!");

        return;

    }

    alert("Login berhasil!");
    window.location.href = "dashboard.html";
}


// ==============================
// REGISTER
// ==============================

function register() {

    const nama =
        document.getElementById("nama").value;

    const toko =
        document.getElementById("toko").value;

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    if (
        nama === "" ||
        toko === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {

        alert("Semua data harus diisi!");

        return;

    }


    if (password !== confirmPassword) {

        alert("Konfirmasi kata sandi tidak sesuai!");

        return;

    }


    alert("Register berhasil!");

    // Nanti setelah PHP:
    // window.location.href = "login.html";

}

function goToTambahStok() {
    window.location.href = "tambah-stok.html";
}