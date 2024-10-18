const ContactLink = ({ href, icon: Icon, label, subLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group rounded-3xl hover:bg-card-background transition-colors pr-3"
  >
    <div className="flex items-center m-auto">
      <div className="mr-3 rounded-full bg-card-background p-3 w-12 h-12 flex items-center justify-center">
        <Icon className="text-2xl" />
      </div>
      <div className="text-left">
        <p>{label}</p>
        <p className="text-blue-600 group-hover:text-blue-700 dark:text-blue-500 dark:group-hover:text-blue-300">{subLabel}</p>
      </div>
    </div>
  </a>
);

export default ContactLink;