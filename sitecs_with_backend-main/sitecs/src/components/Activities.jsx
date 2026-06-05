// src/components/Activities.jsx
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import useReveal from '../hooks/useReveal'
import { getActivities } from '../data/activityCatalog'

function ActivityCard({ activity, delay, num }) {
  const { t } = useTranslation()
  const Icon = activity.icon

  return (
    <article className={`reveal delay-${delay} group card-premium flex flex-col overflow-hidden`}>
      <div className="relative h-44 overflow-hidden">
        <img
          src={activity.image}
          alt={activity.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/65 via-primary-950/10 to-transparent" />
      </div>

      <div className={`h-1 w-full bg-gradient-to-r ${activity.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="p-8 flex flex-col h-full">
        <div className="flex items-start justify-between mb-6">
          <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${activity.iconBg}`}>
            <Icon className="text-2xl" />
          </div>
          <span className="text-[2rem] font-black text-slate-100 leading-none">{num}</span>
        </div>

        <h3 className="text-lg font-black text-primary-900 mb-1 group-hover:text-primary-700 transition-colors">
          {activity.title}
        </h3>

        <p className="text-amber-600 text-[.7rem] font-black uppercase tracking-widest mb-3">
          {activity.sub}
        </p>

        <div className="text-slate-500 text-sm leading-relaxed flex-1 space-y-3">
          {activity.text && <p>{activity.text}</p>}

          {activity.points && (
            <ul className="space-y-1 text-xs text-slate-600">
              {activity.points.map((point, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-amber-600">&bull;</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}

          {activity.sections && (
            <div className="space-y-3">
              {activity.sections.map((section, idx) => (
                <div key={idx}>
                  <p className="font-semibold text-slate-700 text-xs mb-1">{section.title}</p>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {section.points.map((point, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-amber-600">&bull;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activity.conclusion && <p className="font-semibold text-slate-700">{activity.conclusion}</p>}
        </div>

        <div className="flex flex-wrap gap-2 mt-5 mb-5">
          {activity.tags?.map(tagText => (
            <span key={tagText} className="text-[.65rem] font-bold uppercase tracking-wider text-slate-500 border border-slate-200 rounded-full px-2.5 py-1 bg-slate-50">
              {tagText}
            </span>
          ))}
        </div>

        <Link
          to={`/activities#${activity.key}`}
          className="flex items-center gap-1.5 text-primary-700 text-sm font-bold mt-auto transition-colors hover:text-amber-600"
        >
          {t('activities.action_view_more')} <FiArrowRight className="text-xs" />
        </Link>
      </div>
    </article>
  )
}

export default function Activities() {
  const { t } = useTranslation()
  const ref = useReveal()
  const navigate = useNavigate()
  const activities = getActivities(t('activities.cards', { returnObjects: true }) || {})

  return (
    <section ref={ref} className="py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[.025]" style={{ backgroundImage: `linear-gradient(rgba(30,58,138,1) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,138,1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
      <div className="section-wrap relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="reveal max-w-xl">
            <span className="section-tag">{t('activities.section_tag')}</span>
            <h2 className="section-title">{t('activities.title')}</h2>
            <p className="section-body">{t('activities.subtitle')}</p>
          </div>
          <div className="reveal delay-200 flex-shrink-0">
            <button onClick={() => navigate('/activities')} className="btn-primary">
              {t('activities.cta_view_all')} <FiArrowRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((entry, i) => (
            <ActivityCard
              key={entry.key}
              activity={entry}
              delay={i * 100}
              num={`0${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
