import { useMemo, useState } from "react";

function todayISO() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function addDaysISO(isoDate, days) {
  // isoDate: "YYYY-MM-DD"
  const [y, m, d] = isoDate.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + days);

  const yyyy = dt.getFullYear();
  const mm = String(dt.getMonth() + 1).padStart(2, "0");
  const dd = String(dt.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function isValidPhone(v) {
  return /^\+?[0-9\s-]{8,15}$/.test(v.trim());
}

function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    arrivalDate: "",
    departureDate: "",
    guests: "",
    message: "",
  });

  const [touched, setTouched] = useState({});
  const today = todayISO();

  const errors = useMemo(() => {
    const e = {};

    // Required basics
    if (!form.name.trim()) e.name = "Full name is required";

    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!isValidPhone(form.phone)) e.phone = "Enter a valid phone number";

    if (form.email.trim() && !isValidEmail(form.email)) e.email = "Enter a valid email";

    // Date validations
    if (!form.arrivalDate) {
      e.arrivalDate = "Arrival date is required";
    } else if (form.arrivalDate < today) {
      e.arrivalDate = "Arrival date cannot be in the past";
    }

    if (!form.departureDate) {
      e.departureDate = "Departure date is required";
    } else if (form.departureDate < today) {
      e.departureDate = "Departure date cannot be in the past";
    }

    // Next-day rule: departure must be >= arrival + 1 day
    if (form.arrivalDate && form.departureDate) {
      const minDeparture = addDaysISO(form.arrivalDate, 1);
      if (form.departureDate < minDeparture) {
        e.departureDate = "Departure date must be at least 1 day after arrival date";
      }
    }

    if (!form.message.trim()) e.message = "Message is required";

    return e;
  }, [form, today]);

  const isValid = Object.keys(errors).length === 0;

  const update = (key) => (ev) => setForm((p) => ({ ...p, [key]: ev.target.value }));
  const blur = (key) => () => setTouched((p) => ({ ...p, [key]: true }));

  const buildText = () => {
    const lines = [
      "🌿 *Evergreen Retreat — Enquiry1*",
      `Full Name: ${form.name || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Email: ${form.email || "-"}`,
      `Preferred Arrival Date: ${form.arrivalDate || "-"}`,
      `Preferred Departure Date: ${form.departureDate || "-"}`,
      `Guests: ${form.guests || "-"}`,
      `Message: ${form.message || "-"}`,
    ];
    return lines.join("\n");
  };

  const markAllTouched = () =>
    setTouched({
      name: true,
      phone: true,
      email: true,
      arrivalDate: true,
      departureDate: true,
      guests: true,
      message: true,
    });

  const sendWhatsApp = (e) => {
    e.preventDefault();
    markAllTouched();
    if (!isValid) return;

    const text = encodeURIComponent(buildText());
    const phoneNumber = "919479282528"; // +91 9479282528
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank", "noreferrer");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    markAllTouched();
    if (!isValid) return;

    const subject = encodeURIComponent("Enquiry — Evergreen Retreat");
    const body = encodeURIComponent(buildText());
    const to = "hello@yourresort.com"; // <-- replace if needed
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };

  const departureMin = form.arrivalDate
    ? addDaysISO(form.arrivalDate, 1)
    : addDaysISO(today, 1);

  return (
    <form className="enquiryCard" onSubmit={sendWhatsApp} aria-label="Enquiry form">
      <div className="enqTop">
        <div>
          <div className="kicker">Enquiry</div>
          <h3 className="enqTitle">Send us your requirements</h3>
          <p className="muted">We’ll respond quickly with availability, packages & pricing.</p>
        </div>
      </div>

      <div className="enqGrid">
        <Field
          label="Full Name *"
          value={form.name}
          onChange={update("name")}
          onBlur={blur("name")}
          placeholder="Your name"
          error={touched.name ? errors.name : ""}
        />

        <Field
          label="Phone *"
          value={form.phone}
          onChange={update("phone")}
          onBlur={blur("phone")}
          placeholder="9xxxxxxxxx"
          error={touched.phone ? errors.phone : ""}
        />

        <Field
          label="Email (optional)"
          value={form.email}
          onChange={update("email")}
          onBlur={blur("email")}
          placeholder="you@email.com"
          error={touched.email ? errors.email : ""}
        />

        <Field
          label="Number of Guests"
          value={form.guests}
          onChange={update("guests")}
          onBlur={blur("guests")}
          placeholder="Eg. 2"
          error={touched.guests ? errors.guests : ""}
        />

        <Field
          label="Preferred Arrival Date *"
          value={form.arrivalDate}
          onChange={update("arrivalDate")}
          onBlur={blur("arrivalDate")}
          type="date"
          min={today}
          error={touched.arrivalDate ? errors.arrivalDate : ""}
        />

        <Field
          label="Preferred Departure Date *"
          value={form.departureDate}
          onChange={update("departureDate")}
          onBlur={blur("departureDate")}
          type="date"
          min={departureMin}
          error={touched.departureDate ? errors.departureDate : ""}
        />

        <div className="field full">
          <label className="lbl">Message *</label>
          <textarea
            className={`input textarea ${touched.message && errors.message ? "bad" : ""}`}
            value={form.message}
            onChange={update("message")}
            onBlur={blur("message")}
            placeholder="Tell us: stay / wedding / event, rooms needed, budget range, etc."
            rows={4}
          />
          {touched.message && errors.message ? <div className="err">{errors.message}</div> : null}
        </div>
      </div>

      <div className="enqActions">
        <button className="btn primary" type="submit" disabled={!isValid}>
          Send on WhatsApp
        </button>

        <button className="btn outline" type="button" onClick={sendEmail} disabled={!isValid}>
          Send via Email
        </button>

        {!isValid ? <span className="muted small">* Please fill required fields correctly</span> : null}
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  type = "text",
  error,
  min,
}) {
  return (
    <div className="field">
      <label className="lbl">{label}</label>
      <input
        className={`input ${error ? "bad" : ""}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        type={type}
        min={min}
      />
      {error ? <div className="err">{error}</div> : null}
    </div>
  );
}