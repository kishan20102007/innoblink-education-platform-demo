import { Download, Eye, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/common/SEO.jsx';
import { deleteAdminEntry, downloadTutorResume, fetchAdminData, fetchTutorResume } from '../services/api.js';

const resources = [
  ['bookings', 'Demo Bookings'],
  ['tutors', 'Tutor Applications']
];

const listValue = (value) => (Array.isArray(value) ? value.join(', ') : value);

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [active, setActive] = useState('bookings');
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem('eduenrich_admin_token')) navigate('/admin/login');
  }, [navigate]);

  useEffect(() => {
    setLoading(true);
    fetchAdminData(active)
      .then(({ data }) => setRows(data.items))
      .catch(() => toast.error('Unable to load admin data'))
      .finally(() => setLoading(false));
  }, [active]);

  const remove = async (id) => {
    await deleteAdminEntry(active, id);
    setRows((prev) => prev.filter((row) => row._id !== id));
    toast.success('Entry deleted');
  };

  const viewResume = async (id) => {
    try {
      const { data } = await fetchTutorResume(id);
      const url = URL.createObjectURL(data);
      window.open(url, '_blank', 'noopener,noreferrer');
      setTimeout(() => URL.revokeObjectURL(url), 30000);
    } catch {
      toast.error('Unable to open resume');
    }
  };

  const downloadResume = async (id, name) => {
    try {
      const { data } = await downloadTutorResume(id);
      const url = URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${name || 'tutor'}-resume`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch {
      toast.error('Unable to download resume');
    }
  };

  const rowDetails = (row) => {
    if (active === 'bookings') {
      return [row.course, row.grade, row.subject].filter(Boolean).join(' | ') || '-';
    }

    if (active === 'tutors') {
      return [
        listValue(row.curricula),
        listValue(row.grades),
        listValue(row.subjects)
      ].filter(Boolean).join(' | ') || '-';
    }

    return row.course || row.subject || row.subjectExpertise || listValue(row.curricula) || '-';
  };

  return (
    <section className="min-h-screen bg-slate-50 p-4 md:p-8">
      <SEO title="Admin Dashboard" path="/admin" />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl font-black text-brand-ink">Admin Dashboard</h1>
            <p className="mt-2 text-slate-600">Manage EduEnrich enquiries, demo bookings and applications.</p>
          </div>
          <button onClick={() => { localStorage.removeItem('eduenrich_admin_token'); navigate('/admin/login'); }} className="rounded-full bg-white px-5 py-3 font-bold text-brand-blue shadow-sm">Logout</button>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {resources.map(([key, label]) => (
            <button key={key} onClick={() => setActive(key)} className={`rounded-full px-5 py-3 font-bold ${active === key ? 'bg-brand-blue text-white' : 'bg-white text-slate-700'}`}>{label}</button>
          ))}
        </div>
        <div className="mt-8 overflow-hidden rounded-[28px] bg-white shadow-premium">
          {loading ? (
            <p className="p-8 font-semibold text-slate-600">Loading...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left text-sm">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="p-4">Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Phone</th>
                    <th className="p-4">Details</th>
                    <th className="p-4">Created</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row._id} className="border-t">
                      <td className="p-4 font-bold">{row.name}</td>
                      <td className="p-4">{row.email}</td>
                      <td className="p-4">{row.phone || '-'}</td>
                      <td className="p-4">{rowDetails(row)}</td>
                      <td className="p-4">{new Date(row.createdAt).toLocaleString()}</td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-2">
                          {active === 'tutors' && (
                            <>
                              <button onClick={() => viewResume(row._id)} className="rounded-full bg-blue-50 p-3 text-brand-blue" aria-label="View resume"><Eye size={17} /></button>
                              <button onClick={() => downloadResume(row._id, row.name)} className="rounded-full bg-green-50 p-3 text-brand-green" aria-label="Download resume"><Download size={17} /></button>
                            </>
                          )}
                          <button onClick={() => remove(row._id)} className="rounded-full bg-red-50 p-3 text-red-600" aria-label="Delete entry"><Trash2 size={17} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
