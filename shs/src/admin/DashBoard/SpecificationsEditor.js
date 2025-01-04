import React, { useState } from "react";

const SpecificationsEditor = ({ initialSpecifications }) => {
  const [specifications, setSpecifications] = useState(() => {
    // Wrap each field with unique ids
    const addIds = (obj) =>
      Object.entries(obj).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: { id: `${key}-${Date.now()}`, value: value },
        }),
        {}
      );
    return addIds(initialSpecifications);
  });

  const handleAddSection = () => {
    const newKey = `New Section ${Date.now()}`;
    setSpecifications((prev) => ({
      ...prev,
      [newKey]: { id: newKey, value: {} },
    }));
  };

  const handleRemoveSection = (sectionId) => {
    setSpecifications((prev) => {
      const updated = { ...prev };
      delete updated[sectionId];
      return updated;
    });
  };

  const handleAddField = (sectionKey) => {
    setSpecifications((prev) => {
      const section = prev[sectionKey];
      const newKey = `New Key ${Date.now()}`;
      section.value = {
        ...section.value,
        [newKey]: { id: newKey, value: "New Value" },
      };
      return { ...prev };
    });
  };

  const handleRemoveField = (sectionKey, fieldKey) => {
    setSpecifications((prev) => {
      const section = prev[sectionKey];
      const updatedFields = { ...section.value };
      delete updatedFields[fieldKey];
      section.value = updatedFields;
      return { ...prev };
    });
  };

  const handleChangeSpecification = (sectionKey, fieldKey, newValue) => {
    setSpecifications((prev) => {
      if (fieldKey) {
        prev[sectionKey].value[fieldKey].value = newValue;
      } else {
        prev[sectionKey].id = newValue;
      }
      return { ...prev };
    });
  };

  return (
    <div>
      {/* Add New Specification Button */}
      <button
        type="button"
        className="admin_features_button"
        onClick={handleAddSection}
      >
        Add New Specification
      </button>
      {Object.entries(specifications).map(([sectionKey, section]) => (
        <div key={section.id} className="admin_features">
          {/* Section Header */}
          <div className="admin_features_section">
            <h4>
              <input
                type="text"
                value={sectionKey}
                onChange={(e) =>
                  setSpecifications((prev) => {
                    const updated = { ...prev };
                    const newKey = e.target.value;
                    updated[newKey] = updated[sectionKey];
                    delete updated[sectionKey];
                    return updated;
                  })
                }
                placeholder="Specification Key"
              />
            </h4>
            <button
              type="button"
              className="admin_features_button"
              onClick={() => handleRemoveSection(sectionKey)}
            >
              Remove Specification
            </button>
          </div>

          {/* Nested Fields */}
          {typeof section.value === "object" && !Array.isArray(section.value) ? (
            Object.entries(section.value).map(([fieldKey, field]) => (
              <div key={field.id} className="admin_features_section">
                <input
                  type="text"
                  value={fieldKey}
                  onChange={(e) =>
                    setSpecifications((prev) => {
                      const updated = { ...prev };
                      const newFieldKey = e.target.value;
                      updated[sectionKey].value[newFieldKey] =
                        updated[sectionKey].value[fieldKey];
                      delete updated[sectionKey].value[fieldKey];
                      return updated;
                    })
                  }
                  placeholder="Nested Key"
                />
                <input
                  type="text"
                  value={field.value}
                  onChange={(e) =>
                    handleChangeSpecification(sectionKey, fieldKey, e.target.value)
                  }
                  placeholder="Nested Value"
                />
                <button
                  type="button"
                  className="admin_features_button"
                  onClick={() => handleRemoveField(sectionKey, fieldKey)}
                >
                  Remove Field
                </button>
              </div>
            ))
          ) : (
            <input
              type="text"
              value={section.value}
              onChange={(e) => handleChangeSpecification(sectionKey, null, e.target.value)}
              placeholder="Specification Value"
            />
          )}

          {/* Add Nested Field */}
          <button
            type="button"
            className="admin_features_button"
            onClick={() => handleAddField(sectionKey)}
          >
            Add Field
          </button>
        </div>
      ))}
    </div>
  );
};

export default SpecificationsEditor;
