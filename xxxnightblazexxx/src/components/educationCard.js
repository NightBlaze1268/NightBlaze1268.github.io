import React from 'react';

const posts = [
  {
    id: 1,
    href: "#",
  },
];

export default function EducationCard( { id, cardTitle, cardSubtitle, cardDescription, cardDate, cardCategory, certFileUrl, certName } ) {
  return (  
    <div>
      {posts.map((post) => (
        <article
          key={id}
          className="flex max-w-xl flex-col items-start justify-between">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={post.datetime} className="text-gray-500">
              {cardDate}
            </time>
            <a
              href={post.href}
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
              {cardCategory}
            </a>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-gray-100">
              <a href={post.href}>
                <span className="absolute inset-0" />
                {cardTitle}
              </a>
            </h3>
            <h4 className="mt-2 text-base font-medium leading-6 text-gray-900 group-hover-text-gray-600 dark:text-gray-100">
              { cardSubtitle }
            </h4>
            <p className="mt-5 line-clamp-4 text-sm leading-6 text-gray-600">
              {cardDescription}
            </p>
          </div>
          {certName && certFileUrl && (
            <div className="relative mt-8 flex flex-col gap-y-2">
              <a
                href={certFileUrl}
                download
                className="text-blue-500 hover:text-blue-700"
              >
                Download {certName}
              </a>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
