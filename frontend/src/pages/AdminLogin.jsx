import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import PremiumButton from '../components/common/PremiumButton.jsx';
import SEO from '../components/common/SEO.jsx';
import { adminLogin } from '../services/api.js';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(event.currentTarget));
    setLoading(true);
    try {
      const { data } = await adminLogin(payload);
      localStorage.setItem('eduenrich_admin_token', data.token);
      navigate('/admin');
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Invalid admin credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid min-h-screen place-items-center bg-[#f8fbff] p-4">
      <SEO title="Admin Login" path="/admin/login" />
      <form onSubmit={submit} className="w-full max-w-md rounded-[30px] bg-white p-8 shadow-premium">
        <h1 className="font-display text-3xl font-black text-brand-ink">EduEnrich Admin</h1>
        <p className="mt-2 text-slate-600">Secure access for form submissions and lead management.</p>
        <input required name="email" type="email" placeholder="Admin email" className="focus-ring mt-6 w-full rounded-2xl border border-slate-200 px-4 py-3" />
        <input required name="password" type="password" placeholder="Password" className="focus-ring mt-4 w-full rounded-2xl border border-slate-200 px-4 py-3" />
        <PremiumButton type="submit" className="mt-6 w-full" disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</PremiumButton>
      </form>
    </section>
  );
}
